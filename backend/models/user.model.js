import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    profilePic: {
        type: String,
        default: ""
    },
    isAccountVerified: {
        type: Boolean,
        default: false
    },
    emailVerifyOtp: {
        type: String,
        default: ''
    },
    passwordResetOtp: {
        type: String,
        default: ''
    },
    verifyOtpExpireAt: {
            type: Number,
            default: 0
    },
    resetOtpExpireAt: {
            type: Number,
            default: 0
    },
}, {timestamps: true});

const User = mongoose.model("User", userSchema);
export default User;