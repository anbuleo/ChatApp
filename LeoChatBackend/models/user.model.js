import mongoose from "./index.js";

const validateEmail = (e)=>{
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(e); 
}

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
        minlength: 6
    },
    gender: {
        type: String,
        required : true,
        enum: ["male", "female"]
    },
    profilePic:{
        type: String,
        default:""
    },
    email: {
        type:String,
        required: true,
        validate: validateEmail
    },
    role:{type:String,default:'customer'},
    


},{timestamps:true})

const User =  mongoose.model("User",userSchema)

export default User