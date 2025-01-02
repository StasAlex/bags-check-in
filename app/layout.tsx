import type {Metadata} from "next";
import React, {ReactNode} from 'react';
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
    title: "Products Accounting",
    description: "Products Accounting created on NextJs",
    icons: {
        icon: "/favicon.svg"
    }
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta name="google-site-verification" content="jKun-GpwdNaKX3u8V_GXz87bVIzJZfLXFB_fVnXs0p4"/>
        </head>
        <body>
        <ClientProviders>
            {children}
        </ClientProviders>
        </body>
        </html>
    );
}
