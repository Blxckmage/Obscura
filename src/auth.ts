import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import db from "./lib/db";
import { handleLogin } from "./lib/actions/auth.actions";

export const nextAuthConfig = {
	adapter: DrizzleAdapter(db),
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

				let res = await handleLogin(username, password);

				if (!res.ok) {
					throw new Error("Failed to login");
				}

				user = await res.json();

				return user;
			},
		}),
	],
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		async session({ session, token }) {
			//@ts-ignore
			session.user.id = token.id;
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
