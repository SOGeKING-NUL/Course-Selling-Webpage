// const express= require("express");
// const router- express.Router;

const { Router }= require("express");
const{ userModel }= require("../db");
const { signupHandler, signinHander, Model, auth} = require("../Middlewares/signup-auth");

const userRouter= Router();
userRouter.use(express.json());


userRouter.post("/signup",Model("User"), signupHandler);

userRouter.post("/signin", Model("User"), signinHander);

userRouter.get("/courses/purchased", auth, (req, res)=>{
    
});


module.exports={
    userRouter
};