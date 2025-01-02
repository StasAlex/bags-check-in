import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@/lib/mongodb"

const authOptions = {
    adapter: MongoDBAdapter(client),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    pages: {
        signIn: "/signin",
    },
    callbacks: {
        async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
            return url.startsWith(baseUrl) ? "/dashboard" : baseUrl;
        },
        async session({ session, token }:{ session: any; token: string | any }) {
            console.log("session", session);
            if (token) {
                session.user.id = token.id;
            }
            return session;
        },
        async jwt({ token, user }:{ token: string | any; user: any }) {
            console.log("user", user);
            if (user) {
                token.id = user.id;
            }
            return token;
        },
    },

};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
