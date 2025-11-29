import React from 'react';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';


const Journal = () => {
 

    const articles = [
        {
            id: 1,
            category: "Style Guide",
            date: "Oct 12, 2024",
            title: "The Art of Layering: Transitioning Seasons",
            excerpt: "Discover the essential pieces needed to master the shift from summer warmth to autumn chill without sacrificing elegance.",
            image: "https://images.unsplash.com/photo-1485230946086-1d99d5297129?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            category: "Behind the Scenes",
            date: "Oct 05, 2024",
            title: "Inside the Atelier: Crafting the Midnight Collection",
            excerpt: "A look into the meticulous process of selecting fabrics and the artisan hands that bring our sketches to life.",
            image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            category: "Sustainability",
            date: "Sep 28, 2024",
            title: "Future Forward: Our Commitment to Zero Waste",
            excerpt: "How LuxeWear is pioneering new recycling technologies to ensure fashion leaves a legacy, not a footprint.",
            image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=800&auto=format&fit=crop"
        }
    ];

  
    const handleNavigation = (type, payload = null) => {
        if (type === 'view-all') {
            
            alert("Navigating to: /journal (All Articles Page)");
        } else if (type === 'read-article') {
           
            alert(`Opening article: "${payload}"`);
        }
    };

    return (
        <section className="relative w-full bg-slate-950 py-20 md:py-28 font-sans overflow-hidden border-t border-white/5">
            
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] bg-orange-900/10 blur-[100px] rounded-full pointer-events-none"></div>

          
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
                
            
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 font-bold uppercase tracking-[0.25em] text-xs mb-4 block">
                            The Journal
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.1]">
                            Stories from the <span className="italic text-slate-500">Atelier</span>
                        </h2>
                    </div>
                    
                 
                    <button 
                        onClick={() => handleNavigation('view-all')}
                        className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-md active:scale-95"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">View All</span>
                        <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
                            <FaArrowRight size={10} />
                        </div>
                    </button>
                </div>

            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                    {articles.map((article) => (
                        <article 
                            key={article.id} 
                          
                            className="group relative flex flex-col h-full bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/20 hover:bg-slate-900/60 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-pointer active:scale-[0.98]"
                            onClick={() => handleNavigation('read-article', article.title)}
                        >
                           
                            <div className="relative w-full aspect-[16/10] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10" />
                                <img 
                                    src={article.image} 
                                    alt={article.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                                />
                              
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                       
                            <div className="flex flex-col flex-grow p-6 md:p-8">
                            
                                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-4 tracking-wide">
                                    <FaCalendarAlt className="text-pink-400/70" />
                                    <time>{article.date}</time>
                                </div>

                            
                                <h3 className="text-xl md:text-2xl font-serif text-white mb-3 leading-snug group-hover:text-pink-100 transition-colors duration-300">
                                    {article.title}
                                </h3>

                           
                                <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                                    {article.excerpt}
                                </p>

                           
                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors duration-300">
                                        Read Article
                                    </span>
                                    <FaArrowRight className="text-slate-500 group-hover:text-pink-400 transform group-hover:translate-x-1 transition-all duration-300" size={12} />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journal;