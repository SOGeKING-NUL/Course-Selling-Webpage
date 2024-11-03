const mongoose= require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Types;

// console.log("connected to db");
// mongoose.connect("mongodb+srv://UtsavJana:7aviMv781KbprmKp@cluster0.s4bwq.mongodb.net/course-selling")

const UserSchema= new Schema({
    email: {type:String, unique : true },
    password: String,
    FirstName: String,
    LastName: String
});

const AdminSchema= new Schema({
    email: {type:String, unique : true },
    password: String,
    FirstName: String,
    LastName: String
});

const CourseSchema= new Schema({
    title: String,
    description : String,
    price : Number,
    img_url : String,
    creator_id : ObjectId
});

const PurchaseSchema= new Schema({
    course_id : {type: ObjectId},
    user_id : {type: ObjectId, ref: 'Users'}
})

const userModel= mongoose.model("User", UserSchema);
const adminModel= mongoose.model("Admin", AdminSchema);
const courseModel= mongoose.model("Course", CourseSchema);
const purchaseModel= mongoose.model("Purchase", PurchaseSchema);

module.exports= {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};