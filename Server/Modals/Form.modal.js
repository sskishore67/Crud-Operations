const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const formsschema =new Schema({
    username:{
        type : String,
        required :true
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
const form=mongoose.model("test",formsschema);
module.exports=form;
