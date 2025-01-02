import React from 'react';
import {IoBag} from "react-icons/io5";

const ProductCreatePage = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl text-primary-dark font-bold flex items-center">
                <IoBag className="text-2xl mr-2" />
                <span>Product Create</span>
            </h1>
            <p>Create your product.</p>
        </div>
    );
}

export default ProductCreatePage;
