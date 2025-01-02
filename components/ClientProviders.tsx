"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import ReduxProvider from "./ReduxProvider";

const ClientProviders: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <SessionProvider>
            <ReduxProvider>{children}</ReduxProvider>
        </SessionProvider>
    );
};

export default ClientProviders;
