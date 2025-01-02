import React from 'react';
import { FaBox } from 'react-icons/fa';

const Account: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl text-primary-dark font-bold flex items-center">
                <FaBox className="mr-2" /> Account
            </h1>
            <p>Manage your Account here.</p>
        </div>
    );
};

export default Account;
