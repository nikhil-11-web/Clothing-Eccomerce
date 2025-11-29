import React, { useState } from 'react';
import { FaPlus, FaTimes, FaShoppingBag, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Lookbook = ({ addToCart }) => {

    
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [activeSpot, setActiveSpot] = useState(null); 


    const lookbookSlides = [
        {
            id: 1,
            title: "Midnight",
            subtitle: "Velvet",
            mainImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2576&auto=format&fit=crop",
            hotspots: [
                {
                    id: "1-1", name: "Velvet Bomber", price: 185.00, top: "35%", left: "42%",
                    image: "https://images.unsplash.com/photo-1551028919-ac7bcb7d01b9?q=80&w=500&auto=format&fit=crop"
                },
                {
                    id: "1-2", name: "Cargo Trousers", price: 95.00, top: "65%", left: "48%",
                    image: "https://images.unsplash.com/photo-1517445312882-566b864c33db?q=80&w=500&auto=format&fit=crop"
                },
                {
                    id: "1-3", name: "Leather Satchel", price: 240.00, top: "50%", left: "60%",
                    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=500&auto=format&fit=crop"
                }
            ]
        },
        {
            id: 2,
            title: "Urban",
            subtitle: "Explorer",
            mainImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2240&auto=format&fit=crop",
            hotspots: [
                {
                    id: "2-1", name: "Oversized Blaze", price: 210.00, top: "40%", left: "50%",
                    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500&auto=format&fit=crop"
                },
                {
                    id: "2-2", name: "Pleated Skirt", price: 120.00, top: "70%", left: "50%",
                    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=500&auto=format&fit=crop"
                }
            ]
        },
        {
            id: 3,
            title: "Monochrome",
            subtitle: "Minimalist",
            mainImage: "https://images.unsplash.com/photo-1490481651871-732db6182466?q=80&w=2576&auto=format&fit=crop",
            hotspots: [
                {
                    id: "3-1", name: "Structured Coat", price: 350.00, top: "45%", left: "45%",
                    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=500&auto=format&fit=crop"
                },
                {
                    id: "3-2", name: "Leather Boots", price: 180.00, top: "85%", left: "55%",
                    image: "https://images.unsplash.com/photo-1543163521-1ea5388470d2?q=80&w=500&auto=format&fit=crop"
                }
            ]
        }
    ];

    
    const currentLook = lookbookSlides[currentSlideIndex];

   
    const nextSlide = () => {
        setActiveSpot(null);
        setCurrentSlideIndex((prev) => (prev === lookbookSlides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveSpot(null);
        setCurrentSlideIndex((prev) => (prev === 0 ? lookbookSlides.length - 1 : prev - 1));
    };

   
    const toggleSpot = (id) => {
        setActiveSpot(activeSpot === id ? null : id);
    };

    const handleQuickAdd = (e, item) => {
        e.stopPropagation();
        if (addToCart) {
            addToCart({ ...item, img: item.image, category: 'Editorial' });
        } else {
            alert(`Added ${item.name} to cart!`);
        }
    };

    return (
        <section className="relative w-full bg-slate-950 py-24 font-sans overflow-hidden border-t border-white/5 select-none">
            
        
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                
              
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 font-bold uppercase tracking-[0.3em] text-xs mb-3 block animate-pulse">
                            Editorial
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif font-medium text-white leading-tight">
                            Shop The <span className="italic text-slate-500">Look</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
                        Curated ensembles styled by our creative directors. 
                        Navigate through the looks and tap points to discover pieces.
                    </p>
                </div>

                <div className="relative w-full h-[600px] md:h-[800px] rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-purple-900/10 border border-white/10 bg-slate-900">
                    
                    
                    <img 
                        key={currentSlideIndex}
                        src={currentLook.mainImage} 
                        alt={currentLook.title} 
                        className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 animate-fade-in"
                    />

                
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                 
                    {currentLook.hotspots.map((spot) => {
                        const isOpen = activeSpot === spot.id;

                        return (
                            <div 
                                key={spot.id}
                                className="absolute z-20 animate-fade-in-up" 
                                style={{ top: spot.top, left: spot.left }}
                            >
                            
                                <div 
                                    className="relative cursor-pointer group/spot"
                                    onClick={() => toggleSpot(spot.id)}
                                >
                                    {!isOpen && (
                                        <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-40 animate-ping pointer-events-none"></div>
                                    )}
                                    <div className={`relative w-8 h-8 md:w-10 md:h-10 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 ${isOpen ? 'bg-white text-black rotate-45' : 'bg-white/20 text-white hover:bg-white hover:text-black hover:scale-110'}`}>
                                        <FaPlus size={12} />
                                    </div>
                                </div>

                                <div 
                                    className={`
                                        absolute bottom-14 left-1/2 -translate-x-1/2 w-52 
                                        bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl 
                                        transition-all duration-300 ease-out shadow-2xl z-30
                                        ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none lg:group-hover/spot:opacity-100 lg:group-hover/spot:translate-y-0 lg:group-hover/spot:pointer-events-auto'}
                                    `}
                                >
                                    <button onClick={(e) => { e.stopPropagation(); setActiveSpot(null); }} className="absolute top-2 right-2 text-slate-400 hover:text-white md:hidden"><FaTimes size={10} /></button>
                                    <div className="flex gap-3 items-start mb-3">
                                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                                            <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white mb-1 leading-tight">{spot.name}</p>
                                            <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 font-bold">${spot.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button className="text-[10px] font-bold uppercase tracking-wider text-slate-300 hover:text-white py-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">View</button>
                                        <button onClick={(e) => handleQuickAdd(e, spot)} className="flex items-center justify-center gap-1 text-[10px] font-bold uppercase tracking-wider text-black bg-white py-2 rounded-lg hover:bg-pink-100 transition-colors"><FaShoppingBag size={10} /> Add</button>
                                    </div>
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-slate-900/90"></div>
                                </div>
                            </div>
                        );
                    })}

                    <button 
                        onClick={prevSlide}
                        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group/nav"
                    >
                        <FaChevronLeft className="group-hover/nav:-translate-x-1 transition-transform" />
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group/nav"
                    >
                        <FaChevronRight className="group-hover/nav:translate-x-1 transition-transform" />
                    </button>

                 
                    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10 pointer-events-none">
           
                        <div key={currentSlideIndex} className="animate-fade-in-up">
                            <span className="px-3 py-1 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
                                Look {currentSlideIndex + 1} / {lookbookSlides.length}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">
                                {currentLook.title} <br /> <span className="italic font-light opacity-80 text-purple-300">{currentLook.subtitle}</span>
                            </h3>
                        </div>
                    </div>

                    
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                        {lookbookSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => { setActiveSpot(null); setCurrentSlideIndex(index); }}
                                className={`h-2 rounded-full transition-all duration-500 ${index === currentSlideIndex ? 'w-8 bg-gradient-to-r from-pink-500 to-orange-500' : 'w-2 bg-white/30 hover:bg-white/70'}`}
                            />
                        ))}
                    </div>

                </div>

            </div>
         
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fadeIn 0.7s ease-in-out;
                }
                 @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.7s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Lookbook;