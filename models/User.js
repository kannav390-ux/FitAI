import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  name: String,

  heartRate: { type: Number, default: 52 },
  readiness: { type: Number, default: 94 },

  workouts: [
    {
      name: String,
      duration: Number,
    }
  ],

  meals: [
    {
      name: String,
      status: String,
    }
  ]
});

export default mongoose.models.User || mongoose.model("User", UserSchema);