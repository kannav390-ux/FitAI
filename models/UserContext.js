import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: String,
  goal: String,
  streak: Number,
  lastWorkout: String,
});

export default mongoose.models.UserContext ||
  mongoose.model("UserContext", schema);