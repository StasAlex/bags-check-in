"use client";

import React from 'react';
import HeaderAccount from '@/components/Account';
import Link from "next/link";
import { FaBagShopping } from 'react-icons/fa6';
import {BiLoader} from "react-icons/bi";
import {useSession} from "next-auth/react";

const Header: React.FC = () => {
    const { status } = useSession({
        required: false
    });

    return (
        <div className="flex justify-between items-center p-4 shadow-lg">
            <Link href="/" className="text-xl font-bold text-primary-dark flex flex-col md:flex-row items-center justify-center">
                <FaBagShopping className="text-3xl text-primary-dark"/>
                <h1 className={`md:pl-2 uppercase relative top-1 text-xs md:text-xl`}>Productify</h1>
            </Link>
            {status === 'loading' ? (
                <BiLoader className="animate-spin text-4xl text-primary-dark" />
            ) : (
                <HeaderAccount/>
            )}
        </div>
    );
};

export default Header;
