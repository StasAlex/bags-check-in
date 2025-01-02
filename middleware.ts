import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const token =
        request.cookies.get("next-auth.session-token")?.value || // For HTTP
        request.cookies.get("__Secure-next-auth.session-token")?.value; // For HTTPS

    const isAuthPage = request.nextUrl.pathname.startsWith("/signin");

    console.log("Middleware Debug: Token:", token, "Path:", request.nextUrl.pathname);

    // Redirect unauthenticated users to /signin
    if (!token && !isAuthPage) {
        const url = request.nextUrl.clone();
        url.pathname = "/signin";
        url.searchParams.set("callbackUrl", request.nextUrl.pathname); // Keep the original requested path
        return NextResponse.redirect(url);
    }

    // Redirect authenticated users away from /signin
    if (token && isAuthPage) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/:path*", // Protect dashboard routes
        "/products/:path*",  // Protect products routes
        "/orders/:path*",    // Protect orders routes
        "/",                 // Protect the root route
    ],
};
