import React, { useState } from 'react';

import ProductList from './ProductList';
import { GoHeartFill } from 'react-icons/go';

const Product = ({ addToCart, addToWishlist, wishList }) => { 

    const categories = ['All', 'Mens', 'Womens', 'Kids', 'New Arrivals', 'On Sale'];

    const [activeTab, setActiveTab] = useState('All');

    
    const currentWishlist = wishList || []; 

    const filteredProducts = ProductList.filter(product => {
        if (activeTab === 'All') {
            return true;
        }
        if (activeTab === 'On Sale') {
            return product.onSale;
        }
        return product.category === activeTab;
    });
    

    const isProductInWishlist = (productId) => {
        return currentWishlist.some(item => item.id === productId);
    };

    const renderProduct = filteredProducts.map(product => {
        
        
        const isFavorite = isProductInWishlist(product.id);

        return (
        
            <div
                key={product.id || product.name}
                className="block group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden relative"
            >
                <a href={`/product/${product.id}`} className='block'>
                    <div className="relative">
                        
                        <img
                            src={product.img}
                            className="w-full h-[60vh] object-cover transition-transform duration-500 group-hover:scale-105"
                            alt={product.name}
                        />
                        
                     
                        {product.onSale && (
                            <span className='absolute top-2 left-0 bg-red-600 px-3 py-1 text-white font-semibold text-sm rounded-r-lg z-10'>
                                Sale
                            </span>
                        )}
                    </div>
                </a>

            
                <button
                    
                    className={`absolute top-2 right-2 p-2 text-3xl transition-colors duration-200 bg-white bg-opacity-70 rounded-full z-20 
                        ${isFavorite 
                            ? 'text-red-500' 
                            : 'text-zinc-300 hover:text-red-500'
                        }`
                    }
                    onClick={(e) => { 
                    
                        e.stopPropagation(); 
                        e.preventDefault();
                        addToWishlist(product); 
                        console.log('Added to Wishlist:', product.name); 
                    }}
                    aria-label={isFavorite ? "Remove from Wishlist" : "Add to Wishlist"}
                >
                    <GoHeartFill/>
                </button>

                <div className="p-4">
                    <h3 className="text-lg font-medium text-zinc-900 truncate group-hover:text-blue-600 transition-colors">
                        {product.name}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-xl font-bold text-red-600">${product.Price}</span>
                        
                        <button
                            className="bg-blue-500 text-white px-4 py-2 text-sm rounded-full hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation(); 
                                e.preventDefault();
                                addToCart(product)} 
                            }
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <section className='max-w-[1300px] mx-auto px-12 py-10'>
            <h2 className='text-3xl font-bold mb-6 text-center'>🛍️ Featured Products</h2>
        
            <div className='flex gap-3 justify-center items-center mt-8 mb-12 flex-wrap'>
                {
                    categories.map(category => {
                        return (
                            <button key={category}
                            className={`px-8 py-2 rounded-full text-lg cursor-pointer transition-colors duration-200 ${activeTab === category ? 'bg-blue-600 text-white shadow-lg' : 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'}`}
                            onClick={() => setActiveTab(category)}>
                                {category}
                            </button>
                        );
                    })
                }
            </div>

            <h2 className='text-2xl font-semibold mb-6 text-center'>📦 Product Listing for: {activeTab}</h2>
            
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    renderProduct.length > 0 ? (
                        renderProduct
                    ) : (
                        <p className="col-span-full text-center text-xl text-zinc-500 p-10 bg-zinc-50 rounded-lg">
                            No products found in the **{activeTab}** category. Try selecting another tab.
                        </p>
                    )
                }
            </div>
        </section>
    );
};

export default Product;