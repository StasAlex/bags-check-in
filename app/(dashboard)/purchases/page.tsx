"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {BiSolidPurchaseTag} from "react-icons/bi";

type Purchase = {
    _id: string;
    name: string;
    price: number;
    date: Date
};

const Purchases: React.FC = () => {
    const [purchases, setPurchases] = useState<Purchase[]>([]);

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const response = await fetch("/api/purchases");
                const data: Purchase[] = await response.json();
                setPurchases(data);
            } catch (error) {
                console.error("Error fetching purchases:", error);
            }
        };

        fetchPurchases();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl text-primary-dark font-bold flex items-center">
                <BiSolidPurchaseTag className="mr-2" /> Purchases
            </h1>
            <p>Manage your purchases </p>
            {purchases.length > 0 && (
                <ul>
                    {purchases.map((purchase) => (
                        <li key={purchase._id}>
                            {purchase.name} - ${purchase.price}
                        </li>
                    ))}
                </ul>
            )}
            {!purchases.length && (
                <>
                    <h3 className="text-sm font-bold flex items-center my-2 md:my-4">
                        You have no purchases yet
                    </h3>
                    <Link href={`/purchase/create`} className="rounded-md py-2 px-4 text-white bg-primary-dark hover:bg-red-600 ">Create Purchase</Link>
                </>
            )}
        </div>
    );
};

export default Purchases;
