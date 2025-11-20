


import React from 'react';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';

const WishList = ({ 
    activePanel, 
    handlePanel, 
    wishlistItems, 
    removeWishlistItem, 
    addToCart, 
    setWishlist 
}) => {
    
    const list = wishlistItems || [];
    const handleMoveToCart = (product) => {
        addToCart(product);
        removeWishlistItem(product); 
    };

    const handleClearAll = () => {
       
        if (window.confirm("Are you sure you want to clear your entire wishlist?")) {
            setWishlist([]);
        }
    };


    return (
        
        <div className={`
        flex flex-col justify-between gap-5 fixed bg-white shadow-2xl top-0 right-0 bottom-0 z-40 left-auto w-[350px] border-l border-zinc-200 transform transition-transform duration-300
        ${activePanel === 'WishList' ? 'translate-x-0' : 'translate-x-full'}`}>
            
            <div className='px-8 border-b border-zinc-100'>
                <h3 className='text-3xl font-bold text-orange-600 py-6 text-center tracking-wider'>
                    Your Wishlist ({list.length})
                </h3>
            </div>
    
            <div className='flex-1 overflow-y-auto'>
                {list.length === 0 ? (
                 
                    <div className='p-8 text-center flex flex-col items-center justify-center h-full text-zinc-500'>
                        <HeartIcon className='w-12 h-12 mb-4 text-pink-500' />
                        <p className='text-lg font-medium mb-1'>Your wishlist is empty.</p>
                        <p className='text-sm'>Save your favorite items here!</p>
                    </div>
                ) : (
                
                    list.map(product => (
                        <div key={product.id} className='flex items-center gap-4 bg-white px-8 py-3 border-b border-zinc-100 hover:bg-zinc-50 transition duration-150 ease-in-out'>
                            
                        
                            <div className='h-20 w-20 flex-shrink-0 border border-zinc-200'>
                                <img 
                                    src={product.img || "https://placehold.co/80x80/f0f0f0/888?text=N/A"} 
                                    className='w-full h-full object-cover'
                                    alt={product.name}
                                />
                            </div>
        
                            <div className='flex-1'>
                                <div className='flex justify-between items-start mb-1'>
                                    <h4 className='text-base font-medium text-zinc-800 truncate'>{product.name}</h4>
                                    
                                    <button 
                                        onClick={() => removeWishlistItem(product)}
                                        className='text-zinc-400 hover:text-red-500 transition-colors duration-150 ml-4 cursor-pointer'
                                    >
                                        <FaTrash className='w-4 h-4' />
                                    </button>
                                </div>
        
                                <div className='flex justify-between items-center'>
                                   
                                    <span className='text-lg font-semibold text-blue-600'>{product.Price}</span> 
                                    
                                   
                                    <button 
                                        onClick={() => handleMoveToCart(product)}
                                        className='bg-blue-600 text-white text-sm p-2 py-[5px] rounded-full active:bg-blue-700 hover:bg-blue-500 transition-colors cursor-pointer flex items-center gap-1'
                                    >
                                        <FaShoppingCart className='w-3 h-3' />
                                        <span>Move to Cart</span>
                                    </button>
                                </div>
                            </div>
                        </div> 
                    ))
                )}
            </div>

            {/* Footer Buttons */}
            <div className='flex flex-col gap-y-3 p-8 pt-0'> 
                {/* Clear All Button - Primary Action */}
                <button 
                    onClick={handleClearAll}
                    disabled={list.length === 0}
                    className={`w-full h-[6vh] font-semibold tracking-wide rounded transition duration-200 ${
                        list.length > 0 ? 'bg-red-500 text-white hover:bg-red-600 cursor-pointer active:bg-red-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}>
                    Clear All
                </button>
                {/* Close Button - Secondary Action */}
                <button 
                    onClick={() => handlePanel(null)} // Call handlePanel to close the drawer
                    className='bg-zinc-200 text-zinc-700 w-full h-[6vh] font-medium tracking-wide rounded hover:bg-zinc-300 transition duration-200 cursor-pointer active:bg-zinc-500'>
                    Close Wish List
                </button>
            </div>
        </div>
    );
};

export default WishList;

// Simple Heart Icon for empty state (if you haven't defined it elsewhere)
const HeartIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
);