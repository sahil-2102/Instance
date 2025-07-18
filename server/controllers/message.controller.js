import Message from "../models/message.model.js";

export const sendMessage = async(req, res) => {
    try {
        const myId = req.user;
        const {chat, text} = req.body;
        if(!chat || !text) return res.status(400).json({success:false,message:"chat id or text missing!"});

        const newMessage = await Message.create({
            sender: myId,
            text,
            chat
        });
        const populatedMessage = await Message.findById(newMessage._id)
        .populate("sender","-password")
        .populate("chat");
        return res.status(200).json({success:true,message:populatedMessage});
    } catch (error) {
        console.log(`Error in sendMessage controller: ${error.message}`);
        return res.status(500).json({success:false,message:"Internal server error!"});
    }
}

export const getMessages = async(req,res) => {
    try {
        const {id} = req.params;
        const messages = await Message.find({chat:id})
        .populate("sender","-password")
        .populate("chat");

        return res.status(200).json({success:true,messages});
    } catch (error) {
        console.log(`Error in getMessage controller:${error.message}`);
        return res.status(500).json({success:false,message:"Internal server error!"});
    }
}