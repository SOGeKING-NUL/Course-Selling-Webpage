const { z } = require("zod");
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken");

JWT_SECRET= "IlovetoSing";

const{ userModel }= require("./db");
const{ adminModel }= require("./db");




const Model= (model)=>{
    return (req,res,next)=>{
        try{
            if(model== "Admin"){
            req.model= adminModel;
            }
            else if(model=='User'){
                req.model=userModel;
            }
            else{
                res.json({
                    message : "Schema not recognised"
                });
            }
            next();
        }
        catch(e){
            console.error("select between User and Admin");
            res.status(403).json({
                message : "Invalid Schema Selected"
            });
        }
    }
};

const signupHandler= async (req,res)=>{
    
    const RequiredBody= z.object({
        email :z.string().min(3).max(50).email(),
        password: z.string().min(8).max(30),
        FirstName: z.string().min(2).max(20),
        LastName: z.string().min(2).max(20)        
    })
    const Parsed_Body_with_Success= RequiredBody.safeParse(req.body);

    if(!Parsed_Body_with_Success.success){ // Check if parsing was successful
        res.json({
            messaage: "invalid details",
            error: Parsed_Body_with_Success.error
        })
    }

    const email= req.body.email;
    const password= req.body.password;
    const FirstName=req.body.FirstName;
    const LastName=req.body.LastName;

    try{
        HashedPassword= await bcrypt.hash(password,5);

        await req.model.create({
            email,
            password : HashedPassword,
            FirstName,
            LastName
        });

        res.json({
            message : "You are signed in"
        });
    }
    catch(e){
        res.json({
            message : "User Already Exists"
        });
    }
};

const signinHander= async (req,res)=>{

    try{
        const email= req.body.email;
        const password= req.body.password;

        const user_found= await req.model.findOne({
            email
        });

        if(!user_found){
            res.json({
                message : "User is not signed up"
            })
        }

        password_matched= await bcrypt.compare(password, user_found.password);
        if(!password_matched){
            res.json({
                message : "Wrong Password"
            })
        }

        const token= jwt.sign({
            userId: user_found._id   
        }, JWT_SECRET);
        
        res.json({
            message: "you are now signed in",
            token
        });
    }
    catch(e){
        res.json({
            message : "An error occurred while signing you in"
        });
    };
};

module.exports={
    signupHandler,
    signinHander,
    Model
}