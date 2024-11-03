// const express= require("express");
// const router- express.Router;

const { Message } = require("@solana/web3.js");
const { Router }= require("express");

const userRouter= Router();


userRouter.post("/signup", (req, res)=>{
    res.json({
        Message : "you are signed in"
    })
});

userRouter.post("/signin", (req, res)=>{
    
});

userRouter.get("/courses/purchased", (req, res)=>{
    
});


module.exports={
    userRouter
};