import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => (
  <footer className="bg-black/90 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[128px] pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="text-cyan-400" size={24} />
            <span className="text-xl font-bold text-white">NEON<span className="text-cyan-400">SHOP</span></span>
          </div>
          <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
            The premiere destination for futuristic tech and cyberpunk aesthetics. We curate the finest gear from tomorrow, available today.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg flex-1 focus:border-cyan-500 outline-none transition-colors"
            />
            <button className="bg-fuchsia-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-fuchsia-500 transition-colors shadow-[0_0_15px_rgba(192,38,211,0.3)]">
              Join
            </button>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Shop</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {['New Arrivals', 'Best Sellers', 'Accessories', 'Sale'].map(item => (
              <li key={item} className="hover:text-cyan-400 cursor-pointer transition-colors w-fit">{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {['FAQ', 'Shipping & Returns', 'Warranty', 'Contact Us'].map(item => (
              <li key={item} className="hover:text-cyan-400 cursor-pointer transition-colors w-fit">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-sm">© 2024 NeonShop. Built for the future.</p>
        <div className="flex gap-6">
           <div className="text-gray-500 hover:text-white cursor-pointer transition-colors font-mono text-xs">PRIVACY</div>
           <div className="text-gray-500 hover:text-white cursor-pointer transition-colors font-mono text-xs">TERMS</div>
           <div className="text-gray-500 hover:text-white cursor-pointer transition-colors font-mono text-xs">COOKIES</div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;