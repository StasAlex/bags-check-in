"use client";

import React, { useState, useEffect } from "react";
import { BiSolidPurchaseTag } from "react-icons/bi";

const PurchaseCreatePage = () => {
    const [formData, setFormData] = useState({
        id: "",
        date: Date.now(),
        currencyRate: 6.23,
        amount: "",
    });

    useEffect(() => {
        const generatePurchaseID = () => `PUR-${Date.now()}`;
        setFormData((prev) => ({ ...prev, id: generatePurchaseID() }));
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Purchase Created:", formData);
        // Add logic to save the purchase, e.g., send it to an API
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl text-primary-dark font-bold flex items-center mb-4">
                <BiSolidPurchaseTag className="text-2xl mr-2" />
                <span>Purchase Create</span>
            </h1>
            <p className="mb-4">Fill out the form below to create a new purchase.</p>
            <form
                className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto"
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Purchase ID
                    </label>
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="Enter purchase ID"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Currency Rate
                    </label>
                    <input
                        type="number"
                        name="currencyRate"
                        value={formData.currencyRate}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="Enter currency rate"
                        step="0.01"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Amount
                    </label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="Enter amount of purchase"
                        step="0.01"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary-dark hover:bg-white border border-transparent hover:border-primary-dark hover:text-primary-dark text-white font-bold py-2 rounded-lg transition delay-200"
                >
                    Create Purchase
                </button>
            </form>
        </div>
    );
};

export default PurchaseCreatePage;
