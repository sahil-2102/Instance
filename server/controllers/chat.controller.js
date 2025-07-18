import Chat from '../models/chat.model.js';
import Message from '../models/message.model.js';

export const getSingleChat = async (req, res) => {
    try {
        const myId = req.user;
        const connId = req.body.userId;
        if(!connId){return res.status(400).json({success:false,message:"connection's id required!"})}
        let chat = await Chat.findOne(
            {members: {$all:[myId,connId]}}
        ).populate("members","-password");

        if(chat){
            return res.status(200).json({success:true,chat});
        }
        chat = await Chat.create({members:[myId,connId]});

        const fullChat = await Chat.findById(chat._id).populate("members","-password");

        return res.status(200).json({success:true,fullChat});

    } catch (error) {
        console.log(`Error in chat controller: ${error.message}`);
        return res.status(500).json({success:false,message:"Internal server error!"});
    }
}