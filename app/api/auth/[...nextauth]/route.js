import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
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
        if (!credentials?.email || !credentials?.password) return null;

        await connectDB();

        const user = await User.findOne({ email: credentials.email.toLowerCase() });
        if (!user || !user.passwordHash) return null;

        const valid = user.passwordHash === hashPassword(credentials.password);
        if (!valid) return null;

        user.lastLoginAt = new Date();
        user.loginHistory.push({
          at: new Date(),
          ua: req?.headers?.["user-agent"] || "unknown",
        });
        user.inputLogs.push({
          type: "login",
          payload: { email: credentials.email.toLowerCase() },
          createdAt: new Date(),
        });
        await user.save();

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
