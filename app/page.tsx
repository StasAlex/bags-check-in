// app/page.tsx
"use client";

import React from 'react';
import Navigation from '@/app/components/Navigation';
import NavigationCard from '@/app/components/NavigationCard';

const Home: React.FC = () => {
    return (
        <div className="flex min-h-screen">
            <div className="w-3/4 p-4">
                <h1 className="text-3xl text-primary-dark font-bold mb-4">Welcome to the Bags Accounting App</h1>
                <p className="text-lg">Navigate through the app to manage your dashboard, products, and orders efficiently.</p>
            </div>
        </div>
    );
};

export default Home;
