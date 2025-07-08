import User from "../models/user.model.js";
export const userData = async( req, res) => {
    try {
        const {id} = req.user;
        const user = await User.findById(id).select('-password');
        return res.json({success: true, user});

        
    } catch (error) {
        console.log("Error in userData controller: ", error.message);
        return res.json({success: false, message: "Internal server error!"});
        
    }
}