import React from 'react';

const OrderSummary = ({ cart, subTotal, shippingFee, orderTotal, onPlaceOrder, onClose }) => {

    
    const formattedSubTotal = subTotal ? subTotal.toFixed(2) : '0.00';
    const formattedShippingFee = shippingFee ? shippingFee.toFixed(2) : '0.00';
    const formattedOrderTotal = orderTotal ? orderTotal.toFixed(2) : '0.00';

    return (
        <section className='flex justify-center items-center bg-black/95 fixed inset-0 z-40'>
            <div className='bg-zinc-100 p-8 w-[600px] rounded-lg border border-zinc-300'>
                <h2 className='text-3xl text-zinc-800 font-bold mb-6 text-center'>Order Summary</h2>

                <div className='mb-6 border-b border-zinc-300 pb-4 max-h-60 overflow-y-auto'>
                    <h3 className='text-xl font-semibold text-zinc-700 mb-3'>Items:</h3>

                    {cart.length === 0 ? (
                        <p className='text-zinc-500 italic text-center py-4'>No items in the order.</p>
                    ) : (
                        <div>
                            {
                                cart.map(item => {

                                    const priceValue = parseFloat(item.Price?.toString().replace('$', '') || 0);
                                    const itemTotal = (priceValue * (item.quantity || 1)).toFixed(2);

                                    return (
                                        <div key={item.id} className='flex justify-between items-center py-2 border-t border-zinc-200'>
                                            <span className='text-zinc-800 flex-1'>{item.name} <span className='text-sm text-zinc-500'>(x{item.quantity})</span></span>

                                    
                                            <span className='text-zinc-800 font-medium'>${itemTotal}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )}
                </div>

                <div className='space-y-3'>
                    <div className='flex justify-between items-center'>
                        <span className='text-zinc-700 text-lg'>Subtotal</span>
                        <span className='text-zinc-800 text-lg font-bold'>${formattedSubTotal}</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <span className='text-zinc-700 text-lg'>Shipping & Handling</span>
                        <span className={`text-lg font-bold ${shippingFee > 0 ? 'text-red-600' : 'text-green-600'}`}>
                            ${formattedShippingFee}
                        </span>
                    </div>

                    <div className='flex justify-between items-center pt-3 border-t-2 border-zinc-300'>
                        <span className='text-zinc-800 text-2xl font-extrabold'>Order Total</span>
                        <span className='text-zinc-800 text-2xl font-extrabold'>${formattedOrderTotal}</span>
                    </div>
                </div>

            
                <div className='mt-8 flex gap-4'>
                    <button 
                        className='flex-1 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition' 
                        onClick={onPlaceOrder} // 🌟 
                        disabled={cart.length === 0}
                    >
                        Place Order Now
                    </button>
                
                    <button 
                        className='w-1/3 py-3 bg-zinc-300 text-zinc-800 font-semibold rounded hover:bg-zinc-400 transition' 
                        onClick={onClose} 
                    >
                        Cancel
                    </button>
                </div>
            </div>

        </section>
    )
}

export default OrderSummary;