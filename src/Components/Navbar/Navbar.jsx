import React, { useState, useEffect } from 'react';

// --- Icons (Slightly updated stroke width for premium feel) ---
const SearchIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const HeartIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.15C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" />
    </svg>
);
const ShoppingBagIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18 6V7H20V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V7H6V6C6 3.79086 7.79086 2 10 2H14C16.2091 2 18 3.79086 18 6ZM14 6H10V7H14V6ZM6 9V20H18V9H6Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const MenuIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const CloseIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Navbar = ({ handlePanel, totalItems, totalWishlistItems }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Define gradient text class for reuse
    const gradientTextClass = "bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent";
    
    // Define hover style for icon buttons
    const iconButtonHoverClass = "hover:bg-white/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:text-pink-400";

    return (
        // Main Header Container with dark theme and scroll effect
        <header 
            className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b
            ${isScrolled 
                ? 'bg-gray-900/80 backdrop-blur-md shadow-lg shadow-purple-900/20 border-white/10 py-2' 
                : 'bg-gray-950 border-transparent py-4'}`}
        >
            <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>

                    {/* --- Left: Logo & Mobile Menu Toggle --- */}
                    <div className='flex items-center gap-4'>
                        <button 
                            className={`lg:hidden p-2 -ml-2 text-gray-300 rounded-full transition-all duration-300 ${iconButtonHoverClass}`}
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <MenuIcon className="w-6 h-6" />
                        </button>

                        {/* Premium Gradient Logo */}
                        <a href="#" className='group flex items-center gap-3'>
                            <div className='relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-orange-500 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_10px_rgba(249,115,22,0.5)]'>
                                <img
                                    src="https://img.freepik.com/premium-vector/clothing-store-logo-design-template-featuring-shopping-bag-t-shirt_650144-5844.jpg"
                                    alt="Store Logo"
                                    className='w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500'
                                />
                            </div>
                            <span className={`hidden sm:block text-2xl font-serif font-black tracking-tight ${gradientTextClass}`}>
                                LuxeWear
                            </span>
                        </a>
                    </div>

                    {/* --- Center: Desktop Navigation --- */}
                    <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-gray-300 uppercase tracking-wider">
                        {['New Arrivals', 'Collections', 'Accessories', 'Sale'].map((item) => (
                            <a key={item} href="#" className="relative group py-2">
                                <span className={`bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-orange-400 transition-all duration-300`}>
                                    {item}
                                </span>
                                {/* Gradient underline on hover */}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* --- Right: Actions (Search, Wishlist, Cart) --- */}
                    <div className='flex items-center space-x-2 sm:space-x-3'>

                        {/* Desktop Search Bar */}
                        <div className='hidden md:flex items-center group bg-white/5 border border-white/10 focus-within:bg-black/40 focus-within:border-purple-500/50 focus-within:ring-2 focus-within:ring-pink-500/20 rounded-full px-4 py-2 w-64 transition-all duration-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]'>
                            <SearchIcon className='w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors duration-300' />
                            <input
                                type="text"
                                placeholder='Search...'
                                className='bg-transparent border-none outline-none text-sm ml-2 w-full text-gray-200 placeholder-gray-500'
                            />
                        </div>

                        {/* Mobile Search Toggle */}
                        <button 
                            className={`md:hidden p-2 text-gray-300 rounded-full transition-all duration-300 ${iconButtonHoverClass}`}
                            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                        >
                            <SearchIcon className={`w-6 h-6 ${isMobileSearchOpen ? 'text-pink-400' : ''}`} />
                        </button>

                        {/* Wishlist Icon */}
                        <button
                            className={`relative p-2 text-gray-300 rounded-full transition-all duration-300 ${iconButtonHoverClass}`}
                            onClick={() => handlePanel('WishList')}
                            aria-label="Wishlist"
                        >
                            <HeartIcon className='w-6 h-6' />
                            {totalWishlistItems > 0 && (
                                /* Orange notification badge for pop */
                                <span className='absolute top-1.5 right-1.5 flex h-2.5 w-2.5'>
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-tr from-orange-500 to-pink-500 shadow-sm"></span>
                                </span>
                            )}
                        </button>

                        {/* Cart Icon */}
                        <button
                            className={`relative p-2 text-gray-300 rounded-full transition-all duration-300 ${iconButtonHoverClass}`}
                            onClick={() => handlePanel('Cart')}
                            aria-label="Cart"
                        >
                            <ShoppingBagIcon className='w-6 h-6' />
                            {totalItems > 0 && (
                                /* Orange gradient badge */
                                <span className='absolute -top-0.5 -right-0.5 flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 text-[10px] font-bold text-white shadow-[0_2px_5px_rgba(249,115,22,0.5)] ring-2 ring-gray-950'>
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* --- Mobile Search Bar (Expandable) --- */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMobileSearchOpen ? 'max-h-20 opacity-100 pb-4 mt-2' : 'max-h-0 opacity-0'}`}>
                    <div className='flex items-center bg-white/10 border border-white/10 rounded-full px-4 py-2.5 focus-within:ring-2 focus-within:ring-pink-500/30'>
                        <SearchIcon className='w-5 h-5 text-gray-400' />
                        <input
                            type="text"
                            placeholder='Search collections...'
                            className='bg-transparent border-none outline-none text-base ml-3 w-full text-gray-100 placeholder-gray-500'
                        />
                    </div>
                </div>
            </nav>

            {/* --- Mobile Menu Drawer (Off-canvas) --- */}
            <div className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Dark blurred backdrop */}
                <div 
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
                
                {/* Sliding Panel */}
                <div className={`absolute top-0 left-0 w-[85%] max-w-sm h-full bg-gray-950 border-r border-white/10 shadow-2xl shadow-purple-900/20 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    
                    {/* Decorative gradient blur at top of menu */}
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-transparent blur-3xl pointer-events-none"></div>

                    <div className="p-6 h-full flex flex-col relative z-10">
                        <div className="flex justify-between items-center mb-12">
                             <span className={`text-2xl font-serif font-black tracking-tight ${gradientTextClass}`}>
                                LuxeWear
                            </span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className={`p-2 text-gray-400 rounded-full transition-all duration-300 ${iconButtonHoverClass}`}>
                                <CloseIcon className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Mobile Navigation Links */}
                        <div className="flex flex-col space-y-2 flex-grow">
                            {['New Arrivals', 'Collections', 'Accessories', 'Sale'].map((item) => (
                                <a 
                                    key={item} 
                                    href="#" 
                                    className="group flex items-center justify-between text-lg font-medium text-gray-300 hover:text-white transition-all p-3 rounded-xl hover:bg-white/5"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{item}</span>
                                    {/* Arrow icon that appears on hover */}
                                    <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-400 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </a>
                            ))}
                        </div>

                        {/* Mobile Footer links */}
                        <div className="mt-auto pt-8 border-t border-white/10">
                             <div className="flex flex-col space-y-4 text-gray-400 text-sm font-medium uppercase tracking-wider">
                                <a href="#" className="hover:text-pink-400 transition-colors flex items-center gap-2">
                                    My Account
                                </a>
                                <a href="#" className="hover:text-pink-400 transition-colors flex items-center gap-2">
                                    Wishlist ({totalWishlistItems})
                                </a>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;