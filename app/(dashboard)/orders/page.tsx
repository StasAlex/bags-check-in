import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Orders: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl text-primary-dark font-bold flex items-center">
                <FaShoppingCart className="mr-2" /> Orders
            </h1>
            <p>Track your orders and their statuses.</p>
        </div>
    );
};

export default Orders;
