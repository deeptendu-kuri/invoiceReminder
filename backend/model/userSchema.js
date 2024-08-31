const mongoose = require("mongoose");

const UserSchema=new mongoose.Schema({
    googleId:String,
    displayName:String,
    email:Strring,
    image:String
},{timestamps:true})