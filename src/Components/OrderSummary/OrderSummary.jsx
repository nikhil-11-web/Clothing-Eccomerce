import React from 'react';

const OrderSummary = ({ cart, subTotal, shippingFee, orderTotal, onPlaceOrder, onClose }) => {

    const formattedSubTotal = subTotal ? subTotal.toFixed(2) : '0.00';
    const formattedShippingFee = shippingFee ? shippingFee.toFixed(2) : '0.00';
    const formattedOrderTotal = orderTotal ? orderTotal.toFixed(2) : '0.00';

    return (
        <section className='fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/80 backdrop-blur-md transition-all duration-300'>
            
          
            <div className='relative w-full max-w-[550px] bg-slate-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-fadeIn'>
                
               
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

                <div className="relative z-10 p-8 md:p-10">
                    
                 
                    <div className="text-center mb-8">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink-400 mb-2 block">Checkout</span>
                        <h2 className='text-3xl md:text-4xl font-serif text-white italic'>Order Summary</h2>
                    </div>

                    
                    <div className='mb-8 border-t border-b border-white/10 py-4 max-h-[30vh] overflow-y-auto pr-2 custom-scrollbar'>
                        <h3 className='text-xs font-bold uppercase tracking-widest text-slate-500 mb-4'>Items ({cart.length})</h3>

                        {cart.length === 0 ? (
                            <p className='text-slate-500 italic text-center py-6'>No items in the order.</p>
                        ) : (
                            <div className="space-y-4">
                                {cart.map((item, index) => {
                                    const priceValue = parseFloat(item.Price?.toString().replace('$', '') || 0);
                                    const itemTotal = (priceValue * (item.quantity || 1)).toFixed(2);

                                    return (
                                        <div key={item.id || index} className='flex justify-between items-start'>
                                            <div className="flex-1 pr-4">
                                                <span className='text-slate-200 font-serif block text-lg leading-tight'>{item.name}</span>
                                                <span className='text-xs text-slate-500 uppercase tracking-wider'>Qty: {item.quantity || 1}</span>
                                            </div>
                                            <span className='text-white font-medium'>${itemTotal}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>

                    {/* Totals Calculation */}
                    <div className='space-y-3 mb-8'>
                        <div className='flex justify-between items-center'>
                            <span className='text-slate-400 text-sm uppercase tracking-wide'>Subtotal</span>
                            <span className='text-slate-200 font-medium'>${formattedSubTotal}</span>
                        </div>

                        <div className='flex justify-between items-center'>
                            <span className='text-slate-400 text-sm uppercase tracking-wide'>Shipping & Handling</span>
                            <span className={`text-sm font-bold uppercase tracking-wider ${shippingFee > 0 ? 'text-pink-400' : 'text-emerald-400'}`}>
                                {shippingFee > 0 ? `$${formattedShippingFee}` : 'Free Shipping'}
                            </span>
                        </div>

                        <div className='flex justify-between items-end pt-4 mt-2 border-t border-white/10'>
                            <span className='text-white font-serif text-2xl italic'>Total</span>
                            <span className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400'>
                                ${formattedOrderTotal}
                            </span>
                        </div>
                    </div>

                    
                    <div className='flex flex-col-reverse md:flex-row gap-4'>
                        <button 
                            className='flex-1 py-4 px-6 rounded-full border border-white/10 text-slate-300 font-bold uppercase tracking-widest text-xs hover:bg-white/5 hover:text-white transition-all duration-300' 
                            onClick={onClose} 
                        >
                            Cancel
                        </button>

                        <button 
                            className={`flex-[2] py-4 px-6 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg ${cart.length === 0 ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-white text-black hover:bg-slate-200 hover:shadow-white/10'}`} 
                            onClick={onPlaceOrder} 
                            disabled={cart.length === 0}
                        >
                            Confirm Order
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default OrderSummary;