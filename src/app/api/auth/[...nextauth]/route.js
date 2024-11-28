import { mongodb } from "@/lib/mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // Ensure both email and password are provided
        if (!email || !password) {
          return null;
        }

        const db = await mongodb();

        // Find user by email
        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) {
          return null;
        }

        // Compare provided password with stored password
        if (currentUser.password !== password) {
          return null;
        }

        // Return user object
        return {
          id: currentUser._id.toString(),
          email: currentUser.email,
          name: currentUser.name || "User",
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login", // Custom sign-in page
  },
});

export { handler as GET, handler as POST };
