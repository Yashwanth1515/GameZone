const Usermodel = require("../models/Usermodel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const signup = async (req,res) =>{
    try{
        const {username,email,password} = req.body; 
        const user = await Usermodel.findOne({email});
        if(user){
            return res.status(409)
            .json({message:"user is already existed you can login",success: false});
        }
        const newUser = new Usermodel({username,email,password});
        newUser.password = await bcrypt.hash(password,10);
        await newUser.save();
        res.status(201)
        .json({message:"Signup successful",success:true})
    }
    catch(err){
        res.status(500)
        .json({message:"server side error",success:false})
    }
}
const login = async (req,res) =>{
    try{
        const {email,password} = req.body; 
        const user = await Usermodel.findOne({email});
        if(!user){
            return res.status(403)
            .json({message:"User Not Registered",success: false});
        }
        const isPassequal = await bcrypt.compare(password,user.password)
        if(!isPassequal){
            return res.status(403)
            .json({message:"Incorrect Password",success: false});
        }
        const jwttoken = jwt.sign(
            {email: user.email,_id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        )
        res.status(200)
        .json({message:"login successful",
            success:true, 
            jwttoken,
            email,
            username: user.username
        })
    }
    catch(err){
        res.status(500)
        .json({message:"server side error",success:false})
    }
}
module.exports = {
    signup,
    login,
}