import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        Enum:["Admin","User","Contributor"],
        default:"User",
        required:true,
    },
},{
    timeStamps:true,
});


const User = mongoose.model(userSchema,'User');

export default User;
