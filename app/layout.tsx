import type {Metadata} from "next";
import {ReactNode} from 'react';
import ReduxProvider from '@/components/ReduxProvider';
import "./globals.css";
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';

export const metadata: Metadata = {
    title: "Products Accounting",
    description: "Products Accounting created on NextJs",
};

export default function DashboardLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
            <ReduxProvider>
                <div className="flex flex-col h-screen">
                    <Header/>
                    <div className="flex flex-1 flex-col-reverse md:flex-row">
                        <Navigation />
                        <main className="w-full md:w-3/4 p-4 flex-1">
                            {children}
                        </main>
                    </div>
                </div>
            </ReduxProvider>
            </body>
        </html>
    );
}
