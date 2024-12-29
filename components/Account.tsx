"use client";

import React from 'react';
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <div className="flex justify-between items-center">
            <Link className="text-xl font-bold text-primary-dark" href="/account" >Login</Link>
        </div>
    );
};

export default Header;
