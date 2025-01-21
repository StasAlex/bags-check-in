"use client";

import React from 'react';
import NavigationCard from './NavigationCard';
import { usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className="w-full md:w-[200px] lg:w-[250px] border-t-2 bg-primary-light p-2 md:p-4">
            <nav className="flex gap-4 justify-around md:flex-col md:justify-between">
                <NavigationCard href="/dashboard" icon="RiDashboardHorizontalFill" label="Dashboard" isActive={pathname === '/dashboard'} />
                <NavigationCard href="/products" icon="IoBag" label="Products" isActive={pathname === '/products'} />
                <NavigationCard href="/orders" icon="FaShoppingCart" label="Orders" isActive={pathname === '/orders'} />
                <NavigationCard href="/purchases" icon="BiSolidPurchaseTag" label="Purchases" isActive={pathname === '/purchases'} />
            </nav>
        </div>
    );
};

export default Navigation;
