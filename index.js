express= require("express");
app= express();

const{ userRouter } = require("./routes/user");
const{ adminRouter } = require("./routes/admin");
const{ courseRouter } = require("./routes/course");


app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);


app.listen(3000, ()=> console.log("listening on port 3000"));