import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    
    const reviews = [
        {
            id: 1,
            name: "Isabella V.",
            role: "Fashion Editor",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
            quote: "LuxeWear has completely redefined my wardrobe. The quality of the fabrics and the attention to detail is simply unmatched in this price range.",
        },
        {
            id: 2,
            name: "James D.",
            role: "Verified Buyer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
            quote: "The shipping was incredibly fast, but the packaging? An experience in itself. Unboxing my order felt like receiving a gift from a high-end boutique.",
        },
        {
            id: 3,
            name: "Sophia L.",
            role: "Stylist",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
            quote: "Finally, a brand that understands modern streetwear aesthetics without compromising on elegance. The 'Summer Jacket' is a masterpiece.",
        },
    ];

    const brands = ["VOGUE", "GQ", "ELLE", "HYPEBEAST", "VANITY FAIR"];

    return (
        <section className="relative w-full bg-slate-950 py-24 overflow-hidden font-sans">
            
            
            <div className="absolute top-[20%] left-[20%] w-[800px] h-[800px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-pink-900/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                
                <div className="text-center mb-20">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">
                        As Seen In
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {brands.map((brand, index) => (
                            <span 
                                key={index} 
                                className="text-2xl md:text-4xl font-serif font-bold text-white cursor-default hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 transition-all duration-300"
                            >
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6">
                        Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Luxury</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

             
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div 
                            key={review.id} 
                            className="group relative p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.2)]"
                        >
                           
                            <FaQuoteLeft className="absolute top-8 right-8 text-6xl text-white/5 group-hover:text-white/10 transition-colors duration-300" />

                           
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-sm text-orange-400 group-hover:text-pink-400 transition-colors duration-300" />
                                ))}
                            </div>

                            <p className="text-slate-300 text-lg leading-relaxed italic mb-8 relative z-10 font-serif">
                                "{review.quote}"
                            </p>

                           
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-purple-500 transition-colors duration-300">
                                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm tracking-wide">
                                        {review.name}
                                    </h4>
                                    <span className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-bold uppercase tracking-wider">
                                        {review.role}
                                    </span>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>

            
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/10 pt-12">
                     {[
                        { number: "25k+", label: "Happy Clients" },
                        { number: "100+", label: "Countries Shipped" },
                        { number: "4.9", label: "Average Rating" },
                        { number: "24/7", label: "Premium Support" },
                     ].map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</h3>
                            <p className="text-xs text-slate-400 uppercase tracking-widest">{stat.label}</p>
                        </div>
                     ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;