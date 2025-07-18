import User from "../models/user.model.js";

export const currentUser = async(req, res) => {
    try {
        const id = req.user;
        const user = await User.findById(id).select("-password");
        if(!user){
            return res.status(400).json({success:false,message:"Invalid user! Login again"});
        }
        return res.status(200).json({success:true,
            id: user._id,
            name: user.name,
            email: user.email
        });
    } catch (error) {
        console.log(`Error in current user controller: ${error.message}`);
        return res.status(500).json({success:false,message:"Internal server error!"});
    }
}