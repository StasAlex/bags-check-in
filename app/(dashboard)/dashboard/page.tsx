import React from 'react';
import { FaTachometerAlt } from 'react-icons/fa';

const Dashboard: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl text-primary-dark font-bold flex items-center">
                <FaTachometerAlt className="mr-2" /> Dashboard
            </h1>
            <p>Analyze your income and expenses here.</p>
        </div>
    );
};

export default Dashboard;
