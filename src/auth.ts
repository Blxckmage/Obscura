import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";

const credentialsConfig = CredentialsProvider({});

export const nextAuthOptions = {
  adapter: DrizzleAdapter(db),
  providers: [GitHub],
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(nextAuthOptions);
