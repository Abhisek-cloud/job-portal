import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user.model";
import { connectDb } from "./helpers/conectDB";
import { AuthError, CredentialsSignin } from "next-auth";
import { compare } from "bcryptjs";

export const options = {
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Email",
          name: "email",
        },
        password: { label: "Password", type: "password", name: "password" },
      },

      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;
        await connectDb();
        if (!email) {
          throw new CredentialsSignin({ cause: "Enter your email" });
        }
        const usr = await User.findOne({ email });
        if (!usr) {
          throw new CredentialsSignin({ cause: "user not exsist" });
        }

        const passwordCheck = await compare(String(password), usr.password!);
        if (!passwordCheck) {
          throw new CredentialsSignin({ cause: "password incorect" });
        }
        const user = {
          userName: usr.userName,
          email: usr.email,
          role: usr.role,
          providerId: usr.providerId,

          recurterInfo: usr.recurterInfo,
          candidateInfo: usr.candidateInfo,
          memberShipEndDate: usr.memberShipEndDate,
          memberShipStartDate: usr.memberShipStartDate,
          memberShipType: usr.memberShipType,
          isPremiumUser: usr.isPremiumUser,
        };
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/sign-in",
    signUp: "/sign-up",
  },
  callbacks: {
    //sign-in function call every time when sign in
    async signIn({ user, account, profile }: any) {
      await connectDb();
      if (account.provider == "google") {
        try {
          const getUser = await User.findOne({ email: user.email });
          if (!getUser) {
            await User.create({
              userName: user.name,
              email: user.email,
              providerId: user.id,
            });
          }
          return true;
        } catch (error) {
          throw new AuthError("Error while creating user");
        }
      }
      if (account.provider == "credentials") {
        return true;
      }
      return false;
    },
    //after sign-in redirect function
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      return baseUrl;
    },
    // async session({ session, token, user }) {
    //   return session;
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token;
    // },
  },
};
