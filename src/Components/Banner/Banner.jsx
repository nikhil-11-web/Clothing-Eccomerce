import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Banner = () => {
  // --- Timer Logic (Unchanged) ---
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 2); 

    const interval = setInterval(() => {
      const now = new Date();
      const difference = deadline - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center group">
      <div className="relative w-16 h-20 md:w-20 md:h-24 flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl shadow-black/50 overflow-hidden group-hover:border-pink-500/30 transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <span className="text-3xl md:text-4xl font-bold text-white font-mono z-10">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-3 font-medium group-hover:text-pink-400 transition-colors">
        {label}
      </span>
    </div>
  );

  return (
    // FIX 1: Increased pt-40 (mobile) and lg:pt-48 (desktop)
    // FIX 2: Removed 'items-center' on mobile (only 'lg:items-center') to prevent top clipping
    <section className="relative w-full min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col lg:flex-row lg:items-center pt-40 lg:pt-20 pb-12">
      
      {/* --- Ambient Background Lighting --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
        
        {/* Added mt-10 for extra safety on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-4 md:mt-10">
          
          {/* --- LEFT CONTENT (Text) --- */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-8 animate-fade-in-up">
              <span className="px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                <Sparkles size={12} /> Summer Collection
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight mb-6">
              <span className="block text-white">Unlock Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 font-serif italic">
                Inner Style
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
              Exclusive items up to <span className="text-white font-semibold">50% OFF</span>. 
              Refined elegance meets modern streetwear. Offer expires soon.
            </p>

            {/* Timer */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-12">
              <TimeUnit value={timeLeft.days} label="Days" />
              <div className="text-2xl text-gray-700 font-light mt-6 hidden md:block">:</div>
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <div className="text-2xl text-gray-700 font-light mt-6 hidden md:block">:</div>
              <TimeUnit value={timeLeft.minutes} label="Mins" />
              <div className="text-2xl text-gray-700 font-light mt-6 hidden md:block">:</div>
              <TimeUnit value={timeLeft.seconds} label="Secs" />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <span className="relative z-10 flex items-center gap-2">
                  Shop Now <ArrowRight size={16} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="px-8 py-4 bg-transparent border border-white/20 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white/5 transition-colors duration-300">
                View Lookbook
              </button>
            </div>
          </div>

          {/* --- RIGHT CONTENT (Image) --- */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 group">
              <img 
                className="w-full h-full object-cover transform transition-transform duration-[1.5s] group-hover:scale-110" 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2240&auto=format&fit=crop" 
                alt="Fashion Model" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 lg:opacity-40"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center justify-between shadow-lg">
                <div>
                  <p className="text-xs text-pink-200 uppercase tracking-widest mb-1">Flash Deal</p>
                  <p className="text-white font-serif text-2xl italic">Summer Jacket</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 line-through">$120</p>
                  <p className="text-xl font-bold text-white">$59</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-12 -right-12 w-24 h-24 border border-white/10 rounded-full animate-spin-slow hidden lg:block"></div>
            <div className="absolute top-1/2 -right-4 w-2 h-24 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full blur-[2px]"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Banner;
