import React from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'

const calculateTotal = (cart) => {
    return cart.reduce((sum, item) => {
        
        const priceValue = parseFloat(item.Price?.toString().replace('$', '') || 0);
        const quantity = item.quantity || 1;
        return sum + (priceValue * quantity);
    }, 0).toFixed(2);
};


const Cart = ({ activePanel, handlePanel, cart, removeItem, quantityIncrement, quantityDecrement, setIsOrderSummaryOpen }) => {

    const subtotal = calculateTotal(cart);

    return (

        <div className={`
        flex flex-col justify-between gap-5 fixed bg-white shadow-2xl top-0 right-0 bottom-0 z-40 
        left-auto w-[350px] border-l border-zinc-200 
        transform transition-transform duration-300 ease-in-out 
        ${activePanel === 'Cart' ? 'translate-x-0' : 'translate-x-full'}
    `} >

            {/* Header */}
            <div className='px-8 border-b border-zinc-100'>
                <h3 className='text-3xl font-light text-zinc-700 py-6 text-center tracking-wider'>
                    Your Cart
                </h3>
            </div>

         
            <div className=' scroll flex-1 flex flex-col gap-2 overflow-y-auto '>
                {cart.length === 0 ? (
                  
                    <div className='p-8 text-center flex flex-col items-center justify-center h-full text-zinc-500'>
                        <ShoppingBagIcon className='w-12 h-12 mb-4 text-pink-600' />
                        <p className='text-lg font-medium mb-1'>Your shopping bag is empty.</p>
                        <p className='text-sm'>Start adding items to proceed to checkout!</p>
                    </div>
                ) : (
                    // Cart Items Mapping
                    cart.map((product, index) => {
                        return (
                            <div key={product.id || index} className={`flex items-center gap-4  px-8 py-3 hover:bg-zinc-50 transition duration-150 ease-in-out ${index % 2 === 0 ? 'bg-blue-100/50' : 'bg-white'}`}>

                                {/* Cart Image */}
                                <div className='h-20 w-20 flex-shrink-0 border border-zinc-200'>
                                    <img
                                        src={product.img || 'https://placehold.co/80x80/f0f0f0/888?text=N/A'}
                                        className='w-full h-full object-cover'
                                        alt={product.name}
                                    />
                                </div>

                                {/* Product Detail */}
                                <div className='flex-1'>
                                    <div className='flex justify-between items-start mb-1'>
                                        <h4 className='text-base font-medium text-zinc-800 truncate'>{product.name}</h4>
                                        {/* Trash Button */}
                                        <button className='text-zinc-400 hover:text-red-500 transition-colors duration-150 ml-4 cursor-pointer'
                                            onClick={() => removeItem(product)}>
                                            <FaTrash className='w-4 h-4' />
                                        </button>
                                    </div>

                                    <div className='flex justify-between items-center'>
                                        {/* Price */}
                                        <span className='text-lg font-semibold text-blue-600'>{product.Price}</span>

                                        {/* Quantity Controls */}
                                        <div className='flex items-center border border-zinc-300 rounded-sm'>
                                            <button className='p-2 text-zinc-600 hover:bg-zinc-100 transition-colors duration-100 cursor-pointer' onClick={() => quantityDecrement(product)}>
                                                <FaMinus className='w-3 h-3' />
                                            </button>
                                            <span className='px-3 text-sm font-medium text-zinc-700'>
                                                {product.quantity}
                                            </span>
                                            <button className='p-2 text-zinc-600 hover:bg-zinc-100 transition-colors duration-100 cursor-pointer'
                                                onClick={() => quantityIncrement(product)}>
                                                <FaPlus className='w-3 h-3' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                )}

            </div>

            {/* Cart Total Summary */}
            <div className='px-8 pt-4 pb-2 bg-zinc-50 border-t border-zinc-200'>

                <div className='flex justify-between pb-2'>
                    <span className='text-zinc-600'>Subtotal</span>
                    <span className='text-zinc-800 font-medium'>${subtotal}</span>
                </div>

                <div className='flex justify-between pb-4'>
                    <span className='text-zinc-600'>Shipping & Handling</span>
                    <span className='text-green-600 font-medium'>Free</span>
                </div>

                {/* Total Price Row */}
                <div className='flex justify-between border-t border-zinc-300 pt-4 text-xl font-bold'>
                    <span>Total</span>
                    <span>${subtotal}</span>
                </div>
            </div>

            {/* Footer Buttons */}
            <div className='flex flex-col gap-y-3 p-8 pt-0'>
                {/* Checkout Button - Primary Action */}
                <button className={`bg-blue-600 text-white w-full h-[6vh] font-semibold tracking-wide rounded hover:bg-blue-700 transition duration-200 ${cart.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 cursor-pointer'}`}
                    disabled={cart.length === 0} onClick={() => setIsOrderSummaryOpen(true)}>
                    Checkout
                </button>
                {/* Close Button - Secondary Action */}
                <button
                    // FIX: Pass null to handlePanel. In Home.jsx, this will set activePanel to null,
                    // which makes 'activePanel === Cart' false, triggering 'translate-x-full'.
                    onClick={() => handlePanel(null)} 
                    className='bg-zinc-200 text-zinc-700 w-full h-[6vh] font-medium tracking-wide rounded hover:bg-zinc-300 transition duration-200'>
                    Close Cart
                </button>
            </div>

        </div>
    )
}

export default Cart


const ShoppingBagIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18 6V7H20V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V7H6V6C6 3.79086 7.79086 2 10 2H14C16.2091 2 18 3.79086 18 6ZM14 6H10V7H14V6ZM6 9V20H18V9H6Z" />
    </svg>
);