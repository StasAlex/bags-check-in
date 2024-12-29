"use client";

import React from 'react';
import NavigationCard from './NavigationCard';


const Navigation: React.FC = () => {
    return (
        <div className="w-full md:w-[200px] lg:w-[250px] border-t-2 bg-primary-light p-2 md:p-4">
            <nav className="flex gap-4 justify-around md:flex-col md:justify-between">
                <NavigationCard href="/" icon="RiDashboardHorizontalFill" label="Dashboard" />
                <NavigationCard href="/products" icon="IoBag" label="Products" />
                <NavigationCard href="/orders" icon="FaShoppingCart" label="Orders" />
            </nav>
        </div>
    );
};

export default Navigation;
