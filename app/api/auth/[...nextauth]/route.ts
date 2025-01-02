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
                console.log("Redirect Callback Debug:");
                console.log("URL:", url);
                console.log("Base URL:", baseUrl);

                // Redirect to dashboard if the URL starts with the base URL, otherwise return the base URL
                return url.startsWith(baseUrl) ? "/dashboard" : baseUrl;
            },
            async session({ session, token }: { session: any; token: any }) {
                console.log("Session Callback Debug:");
                console.log("Session before enrichment:", session);

                // Add the user ID to the session if available
                if (token?.id) {
                    session.user = session.user || {};
                    session.user.id = token.id;
                }

                console.log("Session after enrichment:", session);
                return session;
            },
            async jwt({ token, user }: { token: any; user?: any }) {
                console.log("JWT Callback Debug:");
                console.log("Token before enrichment:", token);
                console.log("User:", user);

                // Add the user ID to the token if available
                if (user) {
                    token.id = user.id;
                }

                console.log("Token after enrichment:", token);
                return token;
            },
        }
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
