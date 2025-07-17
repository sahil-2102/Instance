import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const signup = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password){ 
            return res.status(400).json({success: false,message: "All fields are required!"});
        }
        const existing = await User.findOne({email});
        if(existing){
            return res.status(400).json({success: false, message: "User already exists!"});
        }
        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = new User({name, email, password:hashedPass});
        await newUser.save();
        const options = {
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7d
        }
        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET, {expiresIn: "7d"});
        res.cookie("token",token,options);
        return res.status(201).json({success:true, message: "Signup successful!"});
    } catch (error) {
        console.log(`Error in signup controller: ${error.message}`);
        return res.status(500).json({success: false, message: "Internal Server Error!"});
    }
}

const login = async (req,res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({success: false, message:"All fields are required!"});
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success: false, message: "Invalid credentials!"});
        }
        const comp = await bcrypt.compare(password, user.password);
        if(!comp){
            return res.status(400).json({success: false, message:"Invalid creadentials!"});
        }
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        const options = {
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7d
        }
        return res
                .status(200)
                .cookie('token',token,options)
                .json({success:true, email, name:user.name});
    } catch (error) {
        console.log(`Error in login controller: ${error.message}`);
        return res.status(500).json({success:false, message: "Internal server error!"});
        
    }
}
const logout = (req,res) => {
    try {
        const options = {
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production'
        }
        res.clearCookie('token',options);
        if(!req.cookies?.token){
            return res.status(200).json({success:true});
        }
    } catch (error) {
        console.log(`Error in logout controller: ${error.message}`);
        return res.status(500).json({success: false, message:"Internal server error!"});
    }
}

export {signup, login, logout};