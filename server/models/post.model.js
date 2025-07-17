import mongoose, {Schema} from "mongoose";

const postSchema = new Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        image: {
            type: String,
            required: true
        },
        likes:{
            type: [mongoose.Schema.Types.ObjectId],
            ref: "User"
        }
    },
    {
        timestamps: true
    }
);
const Post = mongoose.model("Post",postSchema);
export default Post;