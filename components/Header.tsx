"use client";

import React from 'react';
import Account from '@/components/Account';
import Link from "next/link";
import { FaBagShopping } from 'react-icons/fa6';

const Header: React.FC = () => {
    return (
        <div className="flex justify-between items-center p-4 shadow-lg">
            <Link href="/" className="text-xl font-bold text-primary-dark flex items-center">
                <FaBagShopping className="text-3xl text-primary-dark" />
                <h1 className="pl-2">Productly</h1>
            </Link>
            <Account />
        </div>
    );
};

export default Header;
