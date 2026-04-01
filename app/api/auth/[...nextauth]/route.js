import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import AuthLog from "@/models/AuthLog";
import { hashPassword } from "@/lib/security";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const email = credentials?.email?.toLowerCase?.() || "";
        const ua = req?.headers?.["user-agent"] || "unknown";

        if (!email || !credentials?.password) {
          await connectDB();
          await AuthLog.create({ email, action: "login", status: "failed", reason: "missing_credentials", meta: { ua } });
          return null;
        }

        await connectDB();

        const user = await User.findOne({ email });
        if (!user || !user.passwordHash) {
          await AuthLog.create({ email, action: "login", status: "failed", reason: "user_not_found", meta: { ua } });
          return null;
        }

        const valid = user.passwordHash === hashPassword(credentials.password);
        if (!valid) {
          await AuthLog.create({ email, action: "login", status: "failed", reason: "invalid_password", meta: { ua } });
          return null;
        }

        user.lastLoginAt = new Date();
        user.loginHistory.push({ at: new Date(), ua });
        user.inputLogs.push({
          type: "login",
          payload: { email },
          createdAt: new Date(),
        });
        await user.save();

        await AuthLog.create({ email, action: "login", status: "success", meta: { ua } });

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name || `${user.firstName || ""} ${user.lastName || ""}`.trim(),
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
