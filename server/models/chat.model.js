import mongoose, {Schema} from "mongoose";

const chatSchema = new Schema(
    {
        members: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "User",
            required: true,
            validate: {
                validator: arr => arr.length === 2,
                message: "Only two users are allowed!"
            }
        },
    },
    {
        timestamps: true
    }
);
const Chat = mongoose.model("Chat", chatSchema);
export default Chat;

