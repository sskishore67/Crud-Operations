const mongoose=require("mongoose")
const Schema=mongoose.Schema;
const usermodel=new Schema({
    Name:{
        type:String,
        required:true
    },
    Department:{
        type:String,
        required:true
    },
    Branch:{
        type:String,
        required:true
    },
    Year:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Mobileno:{
        type:String,
        required:true
    },
},{timestamps:true})
const user=mongoose.model("users",usermodel);
module.exports=user;