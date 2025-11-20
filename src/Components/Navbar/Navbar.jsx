import React from 'react';


const SearchIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const HeartIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.15C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
);
const ShoppingBagIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18 6V7H20V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V7H6V6C6 3.79086 7.79086 2 10 2H14C16.2091 2 18 3.79086 18 6ZM14 6H10V7H14V6ZM6 9V20H18V9H6Z" />
    </svg>
);


const Navbar = ({ handlePanel, totalItems, totalWishlistItems }) => {
    return (
        <>
            
            <header className='bg-gray-50 shadow-md sticky top-0 z-50'>

                
                <nav className='h-24 max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8'>

                    <a href="#" className='flex w-14 h-14 rounded-full border-2 border-pink-700 transition duration-300 hover:scale-105 hover:shadow-lg overflow-hidden flex-shrink-0'>
                        <img
                            src="https://img.freepik.com/premium-vector/clothing-store-logo-design-template-featuring-shopping-bag-t-shirt_650144-5844.jpg"
                            alt="Store Logo"
                            className='w-full h-full object-cover p-1'
                        />
                    </a>
                    <div className='flex items-center space-x-4 sm:space-x-8'>

                        
                        <div className='hidden sm:flex items-center bg-white  border-gray-200 rounded-full px-5 py-2 w-auto lg:w-96 transition duration-300 focus-within:ring-2 focus-within:ring-pink-500 focus-within:border-transparent border-4'>
                            <input
                                type="text"
                                name='search'
                                id='search'
                                placeholder='Search exclusive collections...'
                                autoComplete='off'
                                className='bg-transparent outline-none  w-full text-sm text-gray-800 placeholder-gray-400'
                            />
                            <button className='text-gray-400 hover:text-pink-600  transition duration-200 ml-3'>
                                <SearchIcon className='w-5 h-5' />
                            </button>
                        </div>
                        <button className='p-2 text-gray-600 hover:text-pink-600 transition duration-200 sm:hidden'>
                            <SearchIcon className='w-6 h-6' />
                        </button>

                        <button
                            className='relative p-2 text-gray-700 hover:text-pink-700 transition duration-200 cursor-pointer'
                            onClick={() => handlePanel('WishList')}
                        >
                            <HeartIcon className='w-6 h-6' />
                            {
                                totalWishlistItems > 0 &&
                                <span className='absolute top-0 right-0 flex items-center justify-center h-4 w-4 rounded-full bg-red-600 text-xs font-semibold text-white'>
                                    {totalWishlistItems}
                                </span>
                            }
                            
                        </button>

                        <button
                            className='relative p-2 text-gray-700 hover:text-pink-700 transition duration-200'
                            onClick={() => handlePanel('Cart')}
                        >
                            <ShoppingBagIcon className='w-7 h-7' />
                            {
                                totalItems > 0 &&
                                <span className='absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 rounded-full bg-pink-700 text-xs font-bold text-white'>
                                    {totalItems} 
                                </span>
                            }
                        </button>
                    </div>

                </nav>
            </header>
        </>
    );
}

export default Navbar;