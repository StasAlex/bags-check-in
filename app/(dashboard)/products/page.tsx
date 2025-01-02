"use client";

import React, { useState, useEffect } from "react";
import { FaBox } from "react-icons/fa";
import Link from "next/link";

type Product = {
    _id: string;
    name: string;
    price: number;
};

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/products");
                const data: Product[] = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl text-primary-dark font-bold flex items-center">
                <FaBox className="mr-2" /> Products
            </h1>
            <p>Manage your product inventory.</p>
            {products.length > 0 && (
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            {product.name} - ${product.price}
                        </li>
                    ))}
                </ul>
            )}
            {!products.length && (
                <>
                    <h3 className="text-sm font-bold flex items-center my-2 md:my-4">
                        You have no products yet
                    </h3>
                    <Link href={`/product/create`} className="rounded-md py-2 px-4 text-white bg-primary-dark hover:bg-red-600 ">Create Product</Link>
                </>
            )}
        </div>
    );
};

export default Products;
