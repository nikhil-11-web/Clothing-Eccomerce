
import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowRight, FaCheck } from 'react-icons/fa';
import { RiVisaLine, RiMastercardFill, RiPaypalFill } from 'react-icons/ri';

const Footer = () => {
   
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

  
    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) return;
        
       
        setTimeout(() => {
            setSubscribed(true);
            setEmail('');
          
            setTimeout(() => setSubscribed(false), 5000);
        }, 800);
    };

    
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

   
    const handleNavClick = (e, sectionName) => {
        e.preventDefault();
        alert(`Navigating to ${sectionName} page...`); 
 
    };

    return (
        <footer className="relative w-full bg-slate-950 text-white pt-20 pb-10 overflow-hidden border-t border-white/5 font-sans">

         
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-600/10 blur-[100px] rounded-full pointer-events-none"></div>
            
          
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
                
            
                <div className="grid lg:grid-cols-2 gap-12 items-center border-b border-white/10 pb-16 mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
                            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Inner Circle</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-light">
                            Receive exclusive access to new drops, secret sales, and style inspiration.
                        </p>
                    </div>
                    
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full opacity-30 blur group-hover:opacity-70 transition duration-500"></div>
                        
                        {subscribed ? (
                             <div className="relative flex items-center justify-center bg-slate-950 rounded-full p-4 border border-green-500/50 text-green-400 font-bold uppercase tracking-widest gap-2">
                                <FaCheck /> You are subscribed!
                             </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="relative flex bg-slate-950 rounded-full p-1.5">
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address" 
                                    className="w-full bg-transparent text-white placeholder-slate-500 px-6 py-3 outline-none rounded-full"
                                    required
                                />
                                <button 
                                    type="submit" 
                                    className="bg-white text-slate-950 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-colors flex items-center gap-2"
                                >
                                    Subscribe <FaArrowRight />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

     
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    
               
                    <div className="lg:col-span-4 space-y-6">
                        <a href="/" onClick={scrollToTop} className="inline-block cursor-pointer">
                            <span className="text-3xl font-serif font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400">
                                LuxeWear
                            </span>
                        </a>
                        <p className="text-slate-400 leading-relaxed font-light max-w-xs">
                            Redefining modern luxury with bold aesthetics and premium materials. Designed for those who dare to stand out.
                        </p>
                        
                        <div className="flex gap-4">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500 transition-all duration-300">
                                <FaInstagram size={18} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-600 transition-all duration-300">
                                <FaTwitter size={18} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-600 transition-all duration-300">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 transition-all duration-300">
                                <FaLinkedinIn size={18} />
                            </a>
                        </div>
                    </div>

                  
                    <div className="lg:col-span-2 md:col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Shop</h4>
                        <ul className="space-y-4 text-slate-400 font-medium">
                            {['New Arrivals', 'Best Sellers', 'Men', 'Women', 'Accessories'].map(item => (
                                <li key={item}>
                                    <button 
                                        onClick={(e) => handleNavClick(e, item)}
                                        className="hover:text-pink-400 transition-colors flex items-center gap-2 group text-left"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-pink-400 transition-all duration-300"></span>
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                   
                    <div className="lg:col-span-2 md:col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Company</h4>
                        <ul className="space-y-4 text-slate-400 font-medium">
                            {['About Us', 'Sustainability', 'Careers', 'Press', 'Stores'].map(item => (
                                <li key={item}>
                                    <button 
                                        onClick={(e) => handleNavClick(e, item)}
                                        className="hover:text-purple-400 transition-colors flex items-center gap-2 group text-left"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-purple-400 transition-all duration-300"></span>
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                   
                    <div className="lg:col-span-4 md:col-span-2">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Customer Care</h4>
                        <div className="space-y-4 text-slate-400 font-light">
                            <p>Need help? We are available 24/7.</p>
                            
                      
                            <a href="tel:+15551234567" className="block text-xl text-white font-serif hover:text-pink-400 transition-colors">
                                +1 (555) 123-4567
                            </a>
                            
                          
                            <a href="mailto:support@luxewear.com" className="block hover:text-purple-400 transition-colors">
                                support@luxewear.com
                            </a>

                            <div className="pt-4">
                                <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Accepted Payments</span>
                                <div className="flex gap-4 text-slate-300">
                                    <RiVisaLine size={32} className="opacity-70 hover:opacity-100 transition-opacity" />
                                    <RiMastercardFill size={32} className="opacity-70 hover:opacity-100 transition-opacity" />
                                    <RiPaypalFill size={32} className="opacity-70 hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-slate-500 uppercase tracking-wider font-medium">
                    <p>&copy; 2024 LuxeWear Inc. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <button onClick={(e) => handleNavClick(e, 'Privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
                        <button onClick={(e) => handleNavClick(e, 'Terms')} className="hover:text-white transition-colors">Terms of Service</button>
                        <button onClick={(e) => handleNavClick(e, 'Cookies')} className="hover:text-white transition-colors">Cookies</button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;