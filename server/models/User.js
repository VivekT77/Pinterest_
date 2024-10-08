const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    firstName: {
        type:String,
    
        trim:true,
    },
    lastName: {
        type:String,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    followers:{
        type:Number,
        default:0,
    },
    following:{
        type:Number,
        default:0,

    },
    accountType:{
        type:String,
        enum:["Admin","Creator"],

        trim:true
    },
    additionalDetails:{
       type:mongoose.Schema.Types.ObjectId,
       required:true,
       ref:"Profile",
    },
    token:{
        type:String,
    },
    contactNumber:{
        type:Number,
        
    },
    resetPasswordExpires:{
        type:Date,
    },
    image:{
        type:String,
        required:true,

    },
    Posts:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
      }
    ]



})

module.exports=mongoose.model("User",userSchema)