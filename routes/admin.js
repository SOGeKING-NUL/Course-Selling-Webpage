const { Router }= require("express");
const { adminModel }= require("../db");
const { signupHandler, signinHander, Model} = require("../signup-auth");

const adminRouter= Router();
userRouter.use(express.json());


adminRouter.post("/signup",Model("Admin"), signupHandler);

adminRouter.post("/signin", Model("Admin"), signinHander);

adminRouter.post("/add-course", (req,res)=>{

})


adminRouter.put("/course", (req,res)=>{

})


module.exports= {
    adminRouter
}