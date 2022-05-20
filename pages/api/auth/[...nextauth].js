import { FirebaseAdapter } from "@next-auth/firebase-adapter"
import NextAuth from "next-auth"
import Providers from "next-auth/providers/google"
import { db } from "../../../src/configs/firebase";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  adapter: FirebaseAdapter(db)
})