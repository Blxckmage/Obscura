import NextAuth, { CredentialsSignin, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByUsername } from "./hooks/user.hooks";
import bcrypt from "bcryptjs";

export const nextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        let user = null;
        const username = credentials.username as string;
        const password = credentials.password as string;

        if (!username || !password) {
          throw new CredentialsSignin("Missing credentials");
        }

        user = await getUserByUsername(credentials.username as string);
        if (!user) throw new CredentialsSignin("Invalid credentials");

        // const pwHash = await bcrypt.hash(password, user.salt);
        // if (!bcrypt.compareSync(password, pwHash)) return user;

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
  },
  secret: process.env.NEXT_AUTH_SECRET,
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(nextAuthConfig);
