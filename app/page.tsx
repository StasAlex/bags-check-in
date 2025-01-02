"use client";

import React from 'react';
import {RiDashboardHorizontalFill} from "react-icons/ri";
import Header from "@/components/Header";

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="p-4">
                <h1 className="text-2xl text-primary-dark font-bold flex items-center">
                    <RiDashboardHorizontalFill className="mr-2"/> Home
                </h1>
                <p>This is home page</p>
            </div>
        </div>

    );
};

export default Home;
