"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { BiLoader } from "react-icons/bi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import {MdAdminPanelSettings, MdExpandMore} from "react-icons/md";
import useIsDesktop from "@/hooks/useIsDesktop";

const HeaderAccount: React.FC = () => {
    const { data: session, status } = useSession();
    const isDesktop = useIsDesktop();

    if (status === "loading") {
        return <BiLoader className="animate-spin text-4xl text-primary-dark" />;
    }

    return (
        <div className="flex justify-between items-center">
            {status === "authenticated" ? (
                <details className="relative group">
                    <summary className="flex items-center cursor-pointer">
                        {session?.user?.image && (
                            <Image
                                src={session?.user?.image}
                                width={isDesktop ? 50 : 30}
                                height={isDesktop ? 50 : 30}
                                alt={session.user.name || "User"}
                                className="rounded-full mr-2"
                            />
                        )}
                        <p className="text-primary-dark max-w-20 md:max-w-full text-xs md:text-lg">
                            {session.user?.name || "User"}
                        </p>
                        {/* Arrow Icon */}
                        <MdExpandMore className="text-primary-dark text-lg md:text-2xl transform group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col space-y-2 z-10">
                        <Link
                            href="/dashboard"
                            className="text-primary-dark text-md hover:underline flex items-center space-x-2 hover:text-red-600"
                        >
                            <MdAdminPanelSettings className="text-xl" />
                            <span>Admin</span>
                        </Link>
                        <button
                            onClick={() => signOut({ callbackUrl: "/signin" })}
                            className="flex items-center space-x-2 text-md text-primary-dark hover:text-red-600 hover:underline"
                        >
                            <RiLogoutBoxRFill className="text-xl" />
                            <span>Logout</span>
                        </button>
                    </div>
                </details>
            ) : (
                <Link
                    className="text-primary-dark font-medium"
                    href="/signin"
                >
                    Login
                </Link>
            )}
        </div>
    );
};

export default HeaderAccount;
