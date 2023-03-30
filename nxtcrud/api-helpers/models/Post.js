import mongoose from "mongoose"

const PostSchema = mongoose.Schema({
    title: {type: "String", required: true},
    content: {type: "String", required: true},
    featured: {type: Boolean, default: false},

})

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
