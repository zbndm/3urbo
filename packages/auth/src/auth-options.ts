import { type NextAuthOptions } from "next-auth";
//import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@acme/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    // DiscordProvider({
    //   clientId: process.env.DISCORD_CLIENT_ID as string,
    //   clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    // }),
    GoogleProvider({
      clientId:
        "262918829565-hu8j80alblviin7nshbq7hqrnb4buqlc.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};
// function GoogleProvider(arg0: { clientId: string | undefined; clientSecret: string | undefined; }): import("next-auth/providers").Provider {
//   throw new Error("Function not implemented.");
// }
