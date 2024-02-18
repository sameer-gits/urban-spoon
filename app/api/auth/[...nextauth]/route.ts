// import NextAuth from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import { PrismaAdapter } from "@next-auth/prisma-adapter"; // its older version bacause newer version is not working as of today it should be npm install @auth/prisma-adapter but its not working so using npm install @next-auth/prisma-adapter
// import prisma from "@/lib/prisma";

// export const authOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID ?? "",
//       clientSecret: process.env.GITHUB_SECRET ?? "",
//     }),
//   ],
// };

// export const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter"; // its older version bacause newer version is not working as of today it should be npm install @auth/prisma-adapter but its not working so using npm install @next-auth/prisma-adapter
import prisma from "@/lib/prisma";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
