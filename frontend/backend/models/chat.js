import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: String,
  text: String,
  time: String,
});

const chatSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  messages: [messageSchema],
}, { timestamps: true });

export default mongoose.model("Chat", chatSchema);