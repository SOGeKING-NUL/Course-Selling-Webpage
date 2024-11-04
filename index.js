express= require("express");
app= express();
const mongoose= require("mongoose");
require('dotenv').config();  //reads the .env files

const{ userRouter } = require("./routes/user");
const{ adminRouter } = require("./routes/admin");
const{ courseRouter } = require("./routes/course");


app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);

async function main(){
    await mongoose.connect("mongodb+srv://UtsavJana:7aviMv781KbprmKp@cluster0.s4bwq.mongodb.net/course-selling")
    app.listen(3000, ()=> console.log("listening on port 3000"));
};

main();