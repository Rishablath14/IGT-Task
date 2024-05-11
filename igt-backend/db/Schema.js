import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI,{dbName:"igttask"}).then(()=>{console.log("Connected to DB")}).catch((error)=>{console.log("Error Connecting...",error)});
const ReviewSchema = mongoose.Schema({
    image:String,
    star:Number,
    review:Number,
    title:String,
    watched:Number
})
const UserSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

export const Review = mongoose.model("Review",ReviewSchema);
export const User = mongoose.model("User",UserSchema);
