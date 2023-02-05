import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "prisma/client";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = credentials;
        console.log({ username, password });

        if (!username || !password) {
          throw new Error("Not authorized");
        }

        if (
          username !== process.env.NEXT_PUBLIC_ADMIN_LOGIN_USERNAME ||
          password !== process.env.NEXT_PUBLIC_ADMIN_LOGIN_PW
        ) {
          throw new Error("Not authorized");
        }

        // Any object returned will be saved in `user` property of the JWT
        if (
          username === process.env.NEXT_PUBLIC_ADMIN_LOGIN_USERNAME ||
          password === process.env.NEXT_PUBLIC_ADMIN_LOGIN_PW
        ) {
          const user = {
            user: username,
            role: "admin",
          };
          return user;
        }

        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
