import NextAuth from "next-auth";
import { options } from "./options";

export const { handlers, signIn, signOut, auth } = NextAuth(options);
