"use client";

import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoBag } from "react-icons/io5";
import { BiSolidPurchaseTag } from "react-icons/bi";

import Link from "next/link";

import useIsDesktop from "@/hooks/useIsDesktop";

type Props = {
    href: string;
    icon: "RiDashboardHorizontalFill" | "IoBag" | "FaShoppingCart" | "BiSolidPurchaseTag";
    label: string;
    isActive: boolean;
};

const icons = {
    RiDashboardHorizontalFill: <RiDashboardHorizontalFill className="text-2xl" />,
    IoBag: <IoBag className="text-2xl" />,
    FaShoppingCart: <FaShoppingCart className="text-2xl" />,
    BiSolidPurchaseTag: <BiSolidPurchaseTag className="text-2xl" />
};

const NavigationCard: React.FC<Props> = ({ href, icon, label, isActive }) => {
    const isDesktop = useIsDesktop();

    return (
        <Link
            href={href}
            className={`p-2 md:p-3 rounded-full md:rounded-lg shadow-md flex items-center justify-center md:justify-start space-x-2 md:space-x-4 ${isActive ? 'bg-primary-dark text-white' : 'bg-white text-primary-dark'}`}
        >
            <div>
                {icons[icon]}
            </div>
            {isDesktop && (
                <p className={isActive ? 'font-light md:text-xl text-white' : 'text-primary-dark font-light md:text-xl'}>{label}</p>
            )}
        </Link>
    );
};

export default NavigationCard;
