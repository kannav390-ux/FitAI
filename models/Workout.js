import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: String,
  date: { type: Date, default: Date.now },
  exercises: Array,
});

export default mongoose.models.Workout ||
  mongoose.model("Workout", schema);