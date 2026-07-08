import bcrypt from "bcrypt";

async function handleUserSignup(request,response){
    try{
        const {fullname,username,email,password} = request.body;
        if(!fullname || !username || !email || !password){
            return response.status(400).json({message:"FullName or username or email or password is missing"});
        }
        const isUserNameTaken = await User.findOne({username:username});
        if(isUserNameTaken){
            return response.status(400).json({message:"UserName Already Taken"});
        }

        const isUserExist = await User.findOne({email:email});
        if(isUserExist){
            return response.status(400).json({message:"User Already Exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({fullname,username,email,hashedPassword});
        return response.status(200).json({message:"New User Registered Suceessfully",data:newUser});
    }
    catch(error){
        console.log("User Registration error");
        return response.status(500).json({message:"Internal Server Error"});
    }
}
async function handleUserLogin(request,response){
    try{
        const {email,password} = request.body;
        if(!email || !password){
            return response.status(400).json({message:"Email or password is missing"});
        }
        const isUserExist = await User.findOne({email:email});
        if(!isUserExist){
            return response.status(400).json({message:"User With Email Does Not Exist"});
        }
        const isPasswordCorrect = await bcrypt.compare(isUserExist.password,password);
        if(!isPasswordCorrect){
            return response.status(400).json({message:"Password is incorrect"});
        }
        return response.status(200).json({message:"User Logged In Successfully",data:isUserExist});
    }
    catch(error){
        console.log("User Login error");
        return response.status(500).json({message:"Internal Server Error"});
    }
}

async function handleUserLogout(request,response){
     try{
        const {id} = request.body;
        if(!id) return response.status(400).json({message:"User Id is Missing"});
        await User.findOne({id:id});
        return response.status(200).json({message:"User LoggedOut Successfully"});
    }
    catch(error){
        console.log("User Logout Successfull ");
        return response.status(500).json({message:"Internal Server Error"});
    }
}

async function handleCurrentUserInfo(request,response){
    try{
        const {id} = request.body;
        if(!id) return response.status(400).json({message:"User Id is Missing"});
        const userInfo = await User.findOne({id:id});
        if(userInfo == null){
            return response.status(400).json({message:"User cannot be fetched or user does not exist"});
        } 
        return response.status(200).json({message:"User Info Fetched Successfully"});
    }
    catch(error){
        console.log("User Info Cannot Be fetched");
        return response.status(500).json({message:"Internal Server Error"});
    }
}


async function handleUserAccountDelete(request,response){
     try{
        const {id} = request.body;
        if(!id) return response.status(400).json({message:"User Id is Missing"});
        await User.delete({id:id});
        return response.status(200).json({message:"User Info Deleted Successfully"});
    }
    catch(error){
        console.log("User Info Cannot be Deleted");
        return response.status(500).json({message:"Internal Server Error"});
    }
}

module.exports = {handleCurrentUserInfo,handleUserAccountDelete,handleUserLogin,handleUserLogout,handleUserSignup};