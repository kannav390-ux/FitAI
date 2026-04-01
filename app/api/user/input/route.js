import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { type, payload } = await req.json();
    if (!type || !payload) {
      return Response.json({ error: "type and payload are required." }, { status: 400 });
    }

    const user = await User.findOne({ email: session.user.email.toLowerCase() });
    if (!user) {
      return Response.json({ error: "User not found." }, { status: 404 });
    }

    user.inputLogs.push({
      type: "input",
      payload: { type, ...payload },
      createdAt: new Date(),
    });

    await user.save();

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: err.message || "Unable to save input." }, { status: 500 });
  }
}
