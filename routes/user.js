// const express= require("express");
// const router- express.Router;

const { Router }= require("express");
const{ userModel }= require("../db");
const { signupHandler, signinHander, Model} = require("../signup-auth");

const userRouter= Router();
userRouter.use(express.json());


userRouter.post("/signup",Model("Admin"),signupHandler);

userRouter.post("/signin", signinHander);

userRouter.get("/courses/purchased", (req, res)=>{
    
});


module.exports={
    userRouter
};