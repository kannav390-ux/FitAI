import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export async function GET(req) {
  await connectDB();

  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let user = await User.findOne({ email: session.user.email });

  // Create user if not exists
  if (!user) {
    user = await User.create({
      email: session.user.email,
      name: session.user.name,
    });
  }

  return Response.json(user);
}