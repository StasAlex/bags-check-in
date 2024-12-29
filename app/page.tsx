// app/page.tsx
"use client";

import React from 'react';
import {RiDashboardHorizontalFill} from "react-icons/ri";

const Home: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl text-primary-dark font-bold flex items-center">
                <RiDashboardHorizontalFill className="mr-2"/> Dashboard
            </h1>
            <p>All info related to your products.</p>
        </div>
    );
};

export default Home;
