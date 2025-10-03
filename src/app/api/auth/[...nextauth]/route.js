import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { readDB } from "@/lib/db"; 
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const db = readDB();
        const user = db.users.find(
          (u) =>
            u.username === credentials?.username &&
            u.password === credentials?.password
        );
        if (user) return { id: user.id, name: user.name, username: user.username };
        return null;
      }
    })
  ],
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET || "dev_secret"
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
