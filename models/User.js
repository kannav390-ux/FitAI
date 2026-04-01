import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  firstName: String,
  lastName: String,
  passwordHash: String,

  heartRate: { type: Number, default: 52 },
  readiness: { type: Number, default: 94 },

  workouts: [
    {
      name: String,
      duration: Number,
    },
  ],

  meals: [
    {
      name: String,
      status: String,
    },
  ],

  inputLogs: [
    {
      type: { type: String, enum: ["signup", "login"] },
      payload: mongoose.Schema.Types.Mixed,
      createdAt: { type: Date, default: Date.now },
    },
  ],

  loginHistory: [
    {
      at: { type: Date, default: Date.now },
      ua: String,
    },
  ],

  lastLoginAt: Date,
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
