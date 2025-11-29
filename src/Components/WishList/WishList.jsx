


import React from 'react';
import { FaShoppingCart, FaTrash, FaTimes, FaHeart } from 'react-icons/fa';

const WishList = ({ 
    activePanel, 
    handlePanel, 
    wishlistItems, 
    removeWishlistItem, 
    addToCart, 
    setWishlist 
}) => {
    
    const list = wishlistItems || [];
    const isWishlistOpen = activePanel === 'WishList';

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
        <>
         
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 ${isWishlistOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => handlePanel(null)}
            />

            
            <aside className={`
                fixed top-0 right-0 bottom-0 z-50
                w-full md:w-[450px] 
                bg-slate-950/95 backdrop-blur-xl
                border-l border-white/10
                shadow-2xl shadow-black
                flex flex-col
                transform transition-transform duration-500 cubic-bezier(0.25, 1, 0.5, 1)
                ${isWishlistOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>

               
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

                
                <div className='relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10'>
                    <div>
                        <h3 className='text-3xl font-serif italic text-white'>
                            My <span className="text-orange-500 not-italic font-sans font-bold uppercase tracking-widest text-lg">Wishlist</span>
                        </h3>
                        <span className="text-xs text-slate-500 uppercase tracking-widest">{list.length} Saved Items</span>
                    </div>
                    <button 
                        onClick={() => handlePanel(null)}
                        className='group p-2 rounded-full hover:bg-white/10 transition-colors duration-300'
                    >
                        <FaTimes className='text-slate-400 group-hover:text-white transition-colors' size={20} />
                    </button>
                </div>
    
                
                <div className='relative z-10 flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4'>
                    {list.length === 0 ? (
                        <div className='h-full flex flex-col items-center justify-center text-center space-y-4 opacity-0 animate-fadeIn' style={{animationFillMode: 'forwards'}}>
                            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                                <FaHeart className='w-8 h-8 text-slate-600' />
                            </div>
                            <p className='text-xl font-serif text-white'>Your wishlist is empty.</p>
                            <p className='text-sm text-slate-400 max-w-[200px]'>Save your favorite looks here to shop them later.</p>
                        </div>
                    ) : (
                        list.map(product => (
                            <div key={product.id} className='group flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/30 hover:bg-white/[0.08] transition-all duration-300'>
                                
                               
                                <div className='h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden relative border border-white/10'>
                                    <img 
                                        src={product.img || "https://placehold.co/80x80/f0f0f0/888?text=N/A"} 
                                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                                        alt={product.name}
                                    />
                                </div>
        
                              
                                <div className='flex-1 flex flex-col justify-between py-1'>
                                    <div className='flex justify-between items-start gap-2'>
                                        <h4 className='text-base font-medium text-slate-200 line-clamp-1'>{product.name}</h4>
                                        
                                      
                                        <button 
                                            onClick={() => removeWishlistItem(product)}
                                            className='text-slate-500 hover:text-red-500 transition-colors duration-200 p-1'
                                            title="Remove from wishlist"
                                        >
                                            <FaTrash className='w-3 h-3' />
                                        </button>
                                    </div>
        
                                    <div className='flex justify-between items-end mt-2'>
                                    
                                        <span className='text-lg font-bold text-emerald-400 tracking-wide'>{product.Price}</span> 
                                        
                                       
                                        <button 
                                            onClick={() => handleMoveToCart(product)}
                                            className='flex items-center gap-2 px-4 py-2 bg-orange-600/90 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-orange-900/20 active:scale-95 transition-all duration-300'
                                        >
                                            <FaShoppingCart className='w-3 h-3' />
                                            <span>Add</span>
                                        </button>
                                    </div>
                                </div>
                            </div> 
                        ))
                    )}
                </div>

           
                {list.length > 0 && (
                    <div className='relative z-10 flex flex-col gap-3 p-8 border-t border-white/10 bg-black/20 backdrop-blur-md'> 
                    
                        <button 
                            onClick={handleClearAll}
                            className='w-full py-4 border border-red-500/30 text-red-400 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-red-500/10 hover:border-red-500 hover:text-red-300 transition-all duration-300 flex items-center justify-center gap-2'
                        >
                            <FaTrash size={10} />
                            Clear Wishlist
                        </button>
                    </div>
                )}
            </aside>
        </>
    );
};

export default WishList