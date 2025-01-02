import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const token =
        request.cookies.get("next-auth.session-token")?.value ||
        request.cookies.get("__Secure-next-auth.session-token")?.value;

    const isAuthPage = request.nextUrl.pathname.startsWith("/signin");

    if (!token && !isAuthPage) {
        const url = request.nextUrl.clone();
        url.pathname = "/signin";
        url.searchParams.set("callbackUrl", request.nextUrl.pathname);
        return NextResponse.redirect(url);
    }

    if (token && isAuthPage) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/products/:path*",
        "/orders/:path*",
        "/",
    ],
};
