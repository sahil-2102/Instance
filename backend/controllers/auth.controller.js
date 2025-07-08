import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import transporter from "../config/nodemailer.js";
export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ message: "All fields are required!" });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "A user with this email already exists!" });
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPass });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Welcome to Instance",
      text: "Your account on Instance has been created!",
    };
    await transporter.sendMail(mailOptions);
    return res.json({ success: true, message: "Signup successful!" });
  } catch (error) {
    console.log("Error in signup controller: ", error.message);
    return res.json({ message: "Server side error!" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.json({ success: false, message: "All fields are required!" });
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.json({ success: false, message: "Wrong credentials!" });
    const correctPass = await bcrypt.compare(password, user.password);
    if (!correctPass)
      return res.json({ success: false, message: "Wrong credentials!" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json({ success: true, name: user.name, userEmail: email });
  } catch (error) {
    console.log("error in login controller: ", error.message);
    
    return res.json({ success: false, message: "Internal server error!" });
  }
};
export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
  });
  return res.json({success: true, message: "Logged Out!"});
};
