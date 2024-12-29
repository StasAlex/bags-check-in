import React from 'react';
import { FaBox } from 'react-icons/fa';

const Products: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl text-primary-dark font-bold flex items-center">
                <FaBox className="mr-2" /> Products
            </h1>
            <p>Manage your product inventory.</p>
        </div>
    );
};

export default Products;
