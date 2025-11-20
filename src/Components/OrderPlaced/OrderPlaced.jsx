import React from 'react';

const OrderPlaced = ({ onClose }) => {
    
    return (
        
        <section className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'>
            
        
            <div 
                className='relative w-full max-w-lg p-10 bg-white shadow-2xl rounded-xl transition-all duration-300 transform scale-100 opacity-100 ease-out'
                
            >
                
                <div className='flex justify-center mb-6'>
                    <svg 
                        className='w-16 h-16 text-green-500 animate-pulse' 
                        fill='none' 
                        strokeLinecap='round' 
                        strokeLinejoin='round' 
                        strokeWidth='2' 
                        viewBox='0 0 24 24' 
                        stroke='currentColor'
                    >
                        <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                    </svg>
                </div>
                
                
                <h2 className='text-4xl text-center text-gray-800 font-extrabold tracking-tight mb-2'>
                    Order Confirmed!
                </h2>
                
                
                
                <p className='text-center text-lg text-gray-500 mb-8'>
                    Your purchase was successful. Thanks for shopping with us!
                </p>
                
                <div className='flex justify-center'>
                    <button 
                    
                        onClick={onClose} 
                        className='w-full px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-150 ease-in-out cursor-pointer'
                    >
                        Continue Shopping
                    </button>
                </div>

            
                <p className='text-center text-sm text-gray-400 mt-6'>
                  A confirmation email has been sent.
                </p>

            </div>

        </section>
    );
}

export default OrderPlaced;