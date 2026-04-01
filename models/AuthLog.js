import mongoose from "mongoose";

const AuthLogSchema = new mongoose.Schema({
  email: String,
  action: { type: String, enum: ["signup", "login"] },
  status: { type: String, enum: ["success", "failed"] },
  reason: String,
  meta: mongoose.Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.AuthLog || mongoose.model("AuthLog", AuthLogSchema);
