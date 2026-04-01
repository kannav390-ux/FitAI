import { connectDB } from "@/lib/db";
import User from "@/models/User";
import AuthLog from "@/models/AuthLog";
import { hashPassword } from "@/lib/security";

export async function POST(req) {
  try {
    const { firstName, lastName, email, password } = await req.json();

    if (!firstName || !lastName || !email || !password) {
      return Response.json({ error: "All fields are required." }, { status: 400 });
    }

    await connectDB();

    const normalizedEmail = email.toLowerCase().trim();
    const existing = await User.findOne({ email: normalizedEmail });

    if (existing) {
      await AuthLog.create({
        email: normalizedEmail,
        action: "signup",
        status: "failed",
        reason: "user_exists",
      });
      return Response.json({ error: "User already exists." }, { status: 409 });
    }

    const user = await User.create({
      firstName,
      lastName,
      name: `${firstName} ${lastName}`.trim(),
      email: normalizedEmail,
      passwordHash: hashPassword(password),
      inputLogs: [
        {
          type: "signup",
          payload: { firstName, lastName, email: normalizedEmail },
          createdAt: new Date(),
        },
      ],
    });

    await AuthLog.create({
      email: normalizedEmail,
      action: "signup",
      status: "success",
      meta: { userId: user._id.toString() },
    });

    return Response.json({ ok: true, userId: user._id.toString() });
  } catch (err) {
    return Response.json({ error: err.message || "Signup failed." }, { status: 500 });
  }
}
