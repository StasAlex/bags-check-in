"use client";

import React from 'react';
import HeaderAccount from '@/components/Account';
import Link from "next/link";
import { FaBagShopping } from 'react-icons/fa6';
import useIsDesktop from "@/hooks/useIsDesktop";

const Header: React.FC = () => {
    const isDesktop = useIsDesktop();

    return (
        <div className="flex justify-between items-center p-4 shadow-lg">
            <Link href="/" className="text-xl font-bold text-primary-dark flex items-center justify-center">
                <FaBagShopping className="text-3xl text-primary-dark" />
                {isDesktop ? (<h1 className="md:pl-2 uppercase relative top-1">Productify</h1>): "" }
            </Link>
            <HeaderAccount />
        </div>
    );
};

export default Header;
