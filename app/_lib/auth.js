import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

// This file is for authentication configuration using NextAuth.js. It sets up Google as an authentication provider and exports the auth handler for GET and POST requests.
const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  //callbacks are functions that are called at specific points in the authentication flow, allowing you to control what happens during sign-in, sign-out, and session handling.
  callbacks: {
    //this authorized checks if the user is already authorized (if the auth is an object and not null its true)
    authorized({ auth, request }) {
      return !!auth?.user;
    },

    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);
        if (!existingGuest) {
          await createGuest({ email: user.email, fullName: user.name });
        }

        return true;
      } catch {
        return false;
      }
    },
    async session({ session }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
// The auth handler is created using NextAuth with the specified configuration. It will handle authentication requests for both GET and POST methods.
export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
