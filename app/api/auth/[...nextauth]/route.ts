import NextAuth, {Session, User} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@/lib/mongodb"
import {JWT} from "next-auth/jwt";

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
            console.log('url', url);
            console.log('baseUrl', baseUrl);

            return url.startsWith(baseUrl) ? "/dashboard" : baseUrl;
        },
        async session({ session, token }: { session: Session; token: JWT }) {
            console.log("Session Callback Debug:");
            console.log("Session before enrichment:", session);

            if (token?.id) {
                session.user = {
                    ...session.user,
                    id: token.id,
                };
            }

            console.log("Session after enrichment:", session);
            return session;
        },
        async jwt({ token, user }:{ token: JWT; user: User }) {
            console.log("token", token);
            if (user) {
                token.id = user.id;
            }
            return token;
        },
    },
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
