import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// models/User.js
const userSchema = new mongoose.Schema({
  name:     { type: String, required: true },  // ← must exist
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model("User", userSchema);