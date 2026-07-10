import mongoose from "mongoose";

const hintSchema = new mongoose.Schema({
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


const Hints = mongoose.model(hintSchema,'Hint');

export default Hints;