import express from "express"
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { Review,User } from "./db/Schema.js";



dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const authenticateToken = (req, res, next) => 
{ const token = req.cookies.token; if (!token) return res.status(401).json({message:"Not Authenticated"}); jwt.verify(token, process.env.JWTSECRET, (err, user) => { if (err) return res.status(403).json({message:"Not Authenticated"}); next(); });
};
app.get("/",(req,res)=>{res.json({message:"Hyy"})})
app.get("/reviews",async function(req,res){
    const data = await Review.find();
    res.json(data);
})
app.post("/add",authenticateToken,async (req,res)=>{
    const {image,star,review,title,watched} = req.body;
    const addReview = new Review({image,star,review,title,watched});
    const result = await addReview.save();
    res.status(201).json({message:"Review Added Successfully"})
})
app.post("/update/:id",authenticateToken,async (req,res)=>{
    const {image,star,review,title,watched} = req.body;
    const update = await Review.findByIdAndUpdate(req.params.id,{
        image,star,review,title,watched
    })
    res.status(201).json({message:"Review Updated Successfully"})
})
app.post("/delete/:id",authenticateToken,async (req,res)=>{
    const update = await Review.findByIdAndDelete(req.params.id,(err,user)=>{if(err){return res.status(401).json({message:"Error Deleting"})}else{return res.status(201).json({message:"Deleted Successfully"})}});
})
app.post("/register",async function(req,res){
    const {name,email,password} = req.body;
    const hashpass = await bcrypt.hash(password,10);
    console.log(hashpass);
    const user = new User({
        name,email,password:hashpass
    })
    const result = await user.save();
    res.status(201).json({message:"User Created Successfully",success:true});
})

app.get("/token",async function(req,res){
    const token = req.cookies.token;
    if(token){return res.status(201).json({token})}
    else{return res.status(401).json({token})}
})
        
app.post("/login",async function(req,res){
    const token = req.cookies.token;
    if(token){return res.redirect("/")}
    const {email,password} = req.body;
    if(!email || !password){return res.status(401).json({message:"All fields are required"})}
    const user = await User.findOne({email});
    if(user){const check = await bcrypt.compare(password,user.password);if(check){const token = jwt.sign({id:user._id},process.env.JWTSECRET,{expiresIn:"1d"});res.cookie("token",token,{httpOnly:true});return res.status(201).json({message:"Login Successfully"})}else{return res.status(400).json({message:"Incorrect Credentials"})}}
    else{return res.status(400).json({message:"User Not Registered"})}
})
app.listen(5000);