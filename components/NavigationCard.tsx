"use client";

import React, {useEffect} from 'react';
import { FaBox, FaShoppingCart } from 'react-icons/fa';
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoBag } from "react-icons/io5";

type Props = {
    href: string;
    icon: "RiDashboardHorizontalFill" | "IoBag" | "FaShoppingCart";
    label: string;
};

const icons = {
    RiDashboardHorizontalFill: <RiDashboardHorizontalFill className="text-primary-dark text-2xl" />,
    IoBag: <IoBag className="text-primary-dark text-2xl" />,
    FaShoppingCart: <FaShoppingCart className="text-primary-dark text-2xl" />,
};

const NavigationCard: React.FC<Props> = ({ href, icon, label }) => {
    const [isDesktop, setIsDesktop] = React.useState(false);
    useEffect(() => {
        const updateMedia = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        updateMedia();
        window.addEventListener('resize', updateMedia);

        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    return (
        <a href={href} className="bg-white p-2 md:p-3 border rounded-full md:rounded-lg shadow-md flex items-center justify-center md:justify-start space-x-2 md:space-x-4 hover:bg-primary-dark hover:bg-opacity-10">
            <div>
                {icons[icon]}
            </div>
            {isDesktop && (
                <p className="text-primary-dark font-light md:text-xl">{label}</p>
            )}
        </a>
    );
};

export default NavigationCard;
