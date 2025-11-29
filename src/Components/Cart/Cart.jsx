import React, { useMemo } from 'react';
import { FaMinus, FaPlus, FaTrash, FaTimes, FaArrowRight } from 'react-icons/fa';

const Cart = ({ 
    activePanel, 
    handlePanel, 
    cart, 
    removeItem, 
    quantityIncrement, 
    quantityDecrement, 
    setIsOrderSummaryOpen 
}) => {

    
    const subtotal = useMemo(() => {
        return cart.reduce((sum, item) => {
           
            const priceString = item.Price?.toString().replace(/[^0-9.]/g, '') || '0';
            const priceValue = parseFloat(priceString);
            const quantity = item.quantity || 1;
            return sum + (priceValue * quantity);
        }, 0).toFixed(2);
    }, [cart]);

    const isCartOpen = activePanel === 'Cart';

    return (
        <>
            
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => handlePanel(null)}
            />

           
            <aside className={`
                fixed top-0 right-0 bottom-0 z-50
                w-full md:w-[480px] 
                bg-slate-950/95 backdrop-blur-xl
                border-l border-white/10
                shadow-2xl shadow-black
                flex flex-col
                transform transition-transform duration-500 cubic-bezier(0.25, 1, 0.5, 1)
                ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            
                <div className='relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10'>
                    <h3 className='text-3xl font-serif italic text-white'>
                        Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 not-italic font-sans font-bold uppercase tracking-widest text-lg ml-2">Selection</span>
                    </h3>
                    <button 
                        onClick={() => handlePanel(null)}
                        className='group p-2 rounded-full hover:bg-white/10 transition-colors duration-300'
                    >
                        <FaTimes className='text-slate-400 group-hover:text-white transition-colors' size={20} />
                    </button>
                </div>

             
                <div className='relative z-10 flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6'>
                    {cart.length === 0 ? (
                        <div className='h-full flex flex-col items-center justify-center text-center space-y-4 opacity-0 animate-fadeIn' style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                                <ShoppingBagIcon className='w-8 h-8 text-slate-500' />
                            </div>
                            <p className='text-xl font-serif text-white'>Your bag is empty.</p>
                            <p className='text-sm text-slate-400 max-w-[200px]'>Looks like you haven't discovered our latest collection yet.</p>
                            <button onClick={() => handlePanel(null)} className="mt-4 text-xs font-bold uppercase tracking-widest text-pink-400 border-b border-pink-400/50 pb-1 hover:text-pink-300 hover:border-pink-300 transition-all">
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        cart.map((product, index) => (
                            <div 
                                key={product.id || index} 
                                className="group flex gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all duration-300"
                            >
                               
                                <div className='h-28 w-24 flex-shrink-0 rounded-lg overflow-hidden relative'>
                                    <img
                                        src={product.img || 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=200&auto=format&fit=crop'}
                                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                                        alt={product.name}
                                    />
                                </div>

                                
                                <div className='flex-1 flex flex-col justify-between py-1'>
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h4 className='text-lg font-serif text-white leading-tight mb-1 pr-4 line-clamp-2'>
                                                {product.name}
                                            </h4>
                                            <button 
                                                className='text-slate-500 hover:text-red-400 transition-colors p-1'
                                                onClick={() => removeItem(product)}
                                            >
                                                <FaTrash size={12} />
                                            </button>
                                        </div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider">{product.category || 'Collection'}</p>
                                    </div>

                                    <div className='flex justify-between items-end mt-4'>
                                      
                                        <div className='flex items-center gap-3 bg-black/20 rounded-full px-1 py-1 border border-white/10'>
                                            <button 
                                                className='w-6 h-6 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all'
                                                onClick={() => quantityDecrement(product)}
                                            >
                                                <FaMinus size={8} />
                                            </button>
                                            <span className='text-xs font-bold text-white w-3 text-center'>
                                                {product.quantity}
                                            </span>
                                            <button 
                                                className='w-6 h-6 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all'
                                                onClick={() => quantityIncrement(product)}
                                            >
                                                <FaPlus size={8} />
                                            </button>
                                        </div>

                                        <span className='text-lg font-medium text-white tracking-wide'>
                                            {product.Price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            
                {cart.length > 0 && (
                    <div className='relative z-10 px-8 py-8 bg-black/20 backdrop-blur-md border-t border-white/10'>
                        
                        
                        <div className='space-y-3 mb-8'>
                            <div className='flex justify-between items-center text-sm'>
                                <span className='text-slate-400 uppercase tracking-wider text-xs'>Subtotal</span>
                                <span className='text-slate-200 font-medium tracking-wide'>${subtotal}</span>
                            </div>
                            <div className='flex justify-between items-center text-sm'>
                                <span className='text-slate-400 uppercase tracking-wider text-xs'>Shipping</span>
                                <span className='text-emerald-400 text-xs font-bold uppercase tracking-widest'>Calculated at Checkout</span>
                            </div>
                        </div>

                        {/* Total */}
                        <div className='flex justify-between items-end mb-8 pt-4 border-t border-white/10'>
                            <span className='font-serif text-2xl text-white italic'>Total</span>
                            <span className='text-2xl font-bold text-white'>${subtotal}</span>
                        </div>

                        {/* Actions */}
                        <div className='flex flex-col gap-3'>
                            <button 
                                onClick={() => setIsOrderSummaryOpen(true)}
                                className='w-full py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group'
                            >
                                Proceed to Checkout
                                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                )}
            </aside>
        </>
    )
}

export default Cart


const ShoppingBagIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6H20C20.5523 6 21 6.44772 21 7V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V7C3 6.44772 3.44772 6 4 6H7ZM9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6H9ZM5 8V20H19V8H5ZM9 10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V9H13V10C13 10.5523 13.4477 11 14 11C14.5523 11 15 10.5523 15 10V9H19V12H5V9H9V10Z" />
    </svg>
);