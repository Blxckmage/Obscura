import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import db from "./lib/db";
import { authenticate } from "./lib/actions/auth.actions";
import { userSchema } from "./types/user.types";
import { ZodError } from "zod";

export const nextAuthConfig = {
	adapter: DrizzleAdapter(db),
	providers: [
		Credentials({
			credentials: {
				username: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" },
			},
			authorize: async (credentials) => {
				try {
					let user = null;
					const { username, password } =
						await userSchema.parseAsync(credentials);

					let res = await authenticate(username, password);

					if (!res.ok) {
						throw new Error("Failed to login");
					}

					user = await res.json();

					return user;
				} catch (error) {
					if (error instanceof ZodError) {
						return null;
					}
				}
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
