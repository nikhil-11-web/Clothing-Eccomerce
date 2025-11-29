import React, { useState } from 'react';
import ProductList from './ProductList';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { FiShoppingBag, FiArrowRight } from "react-icons/fi";

const Product = ({ addToCart, addToWishlist, wishList }) => { 

    const categories = ['All', 'Mens', 'Womens', 'Kids', 'New Arrivals', 'On Sale'];
    const [activeTab, setActiveTab] = useState('All');

    const currentWishlist = wishList || []; 

    const filteredProducts = ProductList.filter(product => {
        if (activeTab === 'All') return true;
        if (activeTab === 'On Sale') return product.onSale;
        return product.category === activeTab;
    });

    const isProductInWishlist = (productId) => {
        return currentWishlist.some(item => item.id === productId);
    };

    return (
        <section className='relative w-full min-h-screen bg-slate-950 font-sans text-white overflow-hidden'>
            
           
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/30 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
            <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-pink-600/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
            
          
            <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none mix-blend-screen"></div>

      
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10'>
                
            
                <div className="text-center mb-16">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
                        New Season Drops
                    </span>
                    <h2 className='text-4xl md:text-6xl font-serif font-medium mb-6 tracking-tight text-white'>
                        The Collection
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Curated essentials featuring our signature vibrant aesthetics.
                        Designed to stand out.
                    </p>
                </div>
            
              
                <div className='sticky top-20 z-30 py-4 mb-10'>
                
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl border-y border-white/10 -mx-[100vw] px-[100vw] shadow-2xl"></div>
                    
                    <div className='relative flex gap-3 md:gap-4 overflow-x-auto pb-2 pt-1 justify-start md:justify-center scrollbar-hide no-scrollbar'>
                        {categories.map(category => (
                            <button 
                                key={category}
                                onClick={() => setActiveTab(category)}
                                className={`
                                    relative px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ease-out whitespace-nowrap border
                                    ${activeTab === category 
                                        ? 'text-white border-transparent shadow-[0_0_20px_rgba(236,72,153,0.5)] transform scale-105' 
                                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                                    }
                                `}
                            >
                           
                                {activeTab === category && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 rounded-full -z-10 animate-gradient-x"></div>
                                )}
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

             
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12'>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => {
                            const isFavorite = isProductInWishlist(product.id);

                            return (
                                <div key={product.id || product.name} className="group relative">
                                    
                                   
                                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-white mb-5 shadow-lg group-hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.4)] transition-all duration-500">
                                        <a href={`/product/${product.id}`} className='block h-full w-full'>
                                            <img
                                                src={product.img}
                                                alt={product.name}
                                                className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110"
                                            />
                                        </a>

                                      
                                        {product.onSale && (
                                            <div className='absolute top-3 left-3 bg-black/80 backdrop-blur px-3 py-1 rounded-full border border-pink-500/50'>
                                                <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                                                    Sale
                                                </span>
                                            </div>
                                        )}

                                        <button
                                            onClick={(e) => { 
                                                e.stopPropagation(); 
                                                e.preventDefault();
                                                addToWishlist(product); 
                                            }}
                                            className="absolute top-3 right-3 p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm hover:bg-white hover:text-pink-600 text-white transition-all duration-300"
                                        >
                                            {isFavorite ? (
                                                <GoHeartFill className="text-xl text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
                                            ) : (
                                                <GoHeart className="text-xl" />
                                            )}
                                        </button>

                                     
                                        <div className="absolute inset-x-3 bottom-3 translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out md:block hidden">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation(); 
                                                    e.preventDefault();
                                                    addToCart(product);
                                                }}
                                                className="w-full relative overflow-hidden bg-black text-white font-bold text-sm uppercase tracking-widest py-3.5 rounded-xl shadow-2xl"
                                            >
                                                <span className="relative z-10 flex items-center justify-center gap-2">
                                                    <FiShoppingBag /> Add to Cart
                                                </span>
                                             
                                                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 opacity-90"></div>
                                            </button>
                                        </div>
                                    </div>

                               
                                    <div className="space-y-1 px-1">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-orange-400 transition-all duration-300 cursor-pointer truncate pr-4">
                                                <a href={`/product/${product.id}`}>
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <p className="text-lg font-serif font-medium text-slate-200">
                                                ${product.Price}
                                            </p>
                                        </div>
                                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                                            {product.category}
                                        </p>
                                    </div>

                                \
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            e.preventDefault();
                                            addToCart(product);
                                        }}
                                        className="mt-4 w-full md:hidden bg-transparent border border-slate-700 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg flex items-center justify-center gap-2 active:scale-95 transition-all hover:bg-slate-800"
                                    >
                                        Add to Cart
                                    </button>

                                </div>
                            );
                        })
                    ) : (
                        <div className="col-span-full py-24 text-center">
                            <div className="inline-block p-6 rounded-full bg-slate-900 border border-slate-800 shadow-lg mb-4">
                                <FiShoppingBag className="text-4xl text-slate-600" />
                            </div>
                            <p className="text-lg text-slate-400 font-light">
                                No items found in <span className="font-bold text-white">{activeTab}</span>.
                            </p>
                            <button 
                                onClick={() => setActiveTab('All')}
                                className="mt-6 inline-flex items-center gap-2 text-sm text-pink-400 font-bold uppercase tracking-widest border-b-2 border-pink-900 hover:border-pink-400 transition-all"
                            >
                                Clear Filters <FiArrowRight />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Product;