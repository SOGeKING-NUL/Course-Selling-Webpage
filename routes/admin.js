const { Router }= require("express");
const { courseModel }= require("../db");
const { signupHandler, signinHander, Model, auth} = require("../Middlewares/signup-auth");

const { Types } = require("mongoose");

const adminRouter= Router();
adminRouter.use(express.json());


adminRouter.post("/signup",Model("Admin"), signupHandler);

adminRouter.post("/signin", Model("Admin"), signinHander);

adminRouter.post("/course", Model("Admin"), auth, async(req,res)=>{

    const adminId= req._id;
    console.log(adminId);
    console.log(typeof adminId);

    const{title, description, price, img_url} =req.body;

    const course= await courseModel.create({
        title,
        description,
        price,
        img_url, 
        creator_id: new Types.ObjectId(adminId)
    })

    res.json({
        message : "course added",
        courseId : course._id
    })

})


adminRouter.put("/course", (req,res)=>{

})


module.exports= {
    adminRouter
}