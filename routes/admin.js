const { Router }= require("express");

const { adminModel }= require("../db");

const adminRouter= Router();

adminRouter.post("/signup", (req, res)=>{
    res.json({
        message : "you are signed in"
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