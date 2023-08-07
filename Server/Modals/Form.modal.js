const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const formsschema =new Schema({
    Firstname:{
        type : String,
        required :true
    },
    Lastname:{
        type : String,
        required :true
    },
    Email:{
        type:String,
        required:true,
        unique:true 
    },
    Password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
const form=mongoose.model("test",formsschema);
module.exports=form;
