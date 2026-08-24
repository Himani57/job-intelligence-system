import authModel from '../models/auth.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


const register = async(req,res)=>{
    try{
    const{fullName, email, password} = req.body;

    if(!fullName || !email || !password){
        return res.status(400).json({
            message: "All fields are required" 
        });
    }

    const isEmailExist = await authModel.findOne({email});

    if(isEmailExist){
        return res.status(400).json({
            message: "Email already registered"
        })
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = await authModel.create({
        fullName,
        email,
        password : hashedPassword
    })

    const token = jwt.sign({
        id : newUser._id
    },process.env.JWT_SECRET_KEY,{
        expiresIn: "7d"
    })


    return res.status(201).json({
        message : "User created successfully",
        token,
        user:{
            id : newUser._id,
            fullName : newUser.fullName,
            email: newUser.email,
            role: newUser.role,
        }
    })
}   catch(error){
      res.status(500).json({ 
        message: "Server error", error: error.message 
      });
    }

}

const login = async(req,res)=>{
    try{
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            message: "All fields are required" 
        });
    }

    const user = await authModel.findOne({email}).select("+password");

    if(!user){
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if (!isMatch) {
        return res.status(400).json({
            message: "Invalid email or password" 
        });
    }

    const token = jwt.sign(
      { id: user._id},
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.cookie("token",token,{
        httpOnly : true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });


    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
}catch(error){
    res.status(500).json({ 
        message: "Server error", error: error.message 
    });
}

}

export default {
    register,
    login
}