const { Message } = require("@solana/web3.js");
const { Router }= require("express");

const { adminModel }= require("../db");

const adminRouter= Router();

adminRouter.post("/signup", (req, res)=>{
    res.json({
        Message : "you are signed in"
    })
});

adminRouter.post("/signin", (req, res)=>{
    
});

adminRouter.post("/add-course", (req,res)=>{

})


adminRouter.put("/course", (req,res)=>{

})


module.exports= {
    adminRouter
}