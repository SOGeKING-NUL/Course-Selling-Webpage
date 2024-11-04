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
    // console.log(adminId);
    // console.log(typeof adminId);

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

adminRouter.put("/course", Model("Admin"), auth, async(req,res)=>{
    const adminId= req._id;
    const{title, description, price, img_url, courseId}= req.body;

    const course= await courseModel.updateOne({
        _id: courseId,
        creator_id: adminId
    },{
        title,
        description,
        price,
        img_url, 
    })

    res.json({
        message : "updated course data"
    })

})

adminRouter.get("/course", Model("Admin"), auth, async(req,res)=>{
        const creator_id = req._id;
        const courses= await courseModel.find({
            creator_id
        })

        res.json({
            message : "These are the courses you have created",
            courses
        })
})
module.exports= {
    adminRouter
}