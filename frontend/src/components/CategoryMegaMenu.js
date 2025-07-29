
// src/components/CategoryMegaMenu.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SummaryApi from '../common';

const CategoryMegaMenu = ({ onClose }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const response = await fetch(SummaryApi.categoryProduct.url);
            const dataResponse = await response.json();
            setCategories(dataResponse.data || []);
        } catch (error) {
            console.error('Error fetching categories for mega menu:', error);
            setCategories([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const getColumns = (items, numColumns) => {
        const columns = Array.from({ length: numColumns }, () => []);
        items.forEach((item, index) => {
            columns[index % numColumns].push(item);
        });
        return columns;
    };

    const numDisplayColumns = 4;
    const groupedCategories = getColumns(categories, numDisplayColumns);

    return (
        <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6 max-h-[calc(100vh-120px)] overflow-y-auto">
            {loading ? (
                Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="flex items-center gap-4 animate-pulse">
                        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                ))
            ) : (
                groupedCategories.map((column, colIndex) => (
                    <div key={colIndex} className="flex flex-col space-y-3">
                        {column.map((product, itemIndex) => (
                            <Link 
                                to={"/product-category?category=" + product?.category} 
                                className="flex items-center gap-4 text-gray-800 hover:text-red-600 hover:bg-red-50 p-2 rounded-md transition-colors" // Back to Red hover
                                key={product?.category + itemIndex}
                                onClick={onClose}
                            >
                                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                                    <img 
                                        src={product?.productImage?.[0]} 
                                        alt={product?.category} 
                                        className="h-full object-contain mix-blend-multiply" 
                                    />
                                </div>
                                <span className="capitalize text-lg font-medium">{product?.category}</span>
                            </Link>
                        ))}
                    </div>
                ))
            )}
            {!loading && categories.length === 0 && (
                <p className="text-gray-600 col-span-full text-center py-4">No categories found.</p>
            )}
        </div>
    );
};

export default CategoryMegaMenu;