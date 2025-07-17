import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema(
    {
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
            required: true
        },
        verifyEmailOtp: {
            type: String,
            default: ''
        },
        emailOtpExp: {
            type: Date,
            default: 0
        },
        isVerified: {
            type: Boolean,
            default: false
        }
    },{timestamps: true}
);

const User = mongoose.model("User",userSchema);
export default User;