import React from 'react';
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-(--nav-bg) border-t border-white/10 pt-16 pb-8 relative overflow-hidden text-white">
    {/* Decorative Blur */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px] pointer-events-none"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Zap className="text-yellow-400" size={24} />
            <span className="text-xl font-bold text-white">Flip<span className="text-yellow-400">Zone</span></span>
          </Link>
          <p className="text-gray-200 mb-6 max-w-sm leading-relaxed text-sm">
            The premiere destination for futuristic tech and cyberpunk aesthetics. We curate the finest gear from tomorrow, available today.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border border-white/20 text-white placeholder-gray-300 px-4 py-3 rounded-[2px] flex-1 focus:border-yellow-400 outline-none transition-colors text-sm"
            />
            <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-[2px] font-bold hover:bg-white transition-colors shadow-lg">
              Join
            </button>
          </div>
        </div>
        
        {/* Shop Column */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Explore</h4>
          <ul className="space-y-4 text-gray-200 text-sm font-medium">
            <li><Link to="/products" className="hover:text-yellow-400 transition-colors">All Products</Link></li>
            <li><Link to="/shop/new-arrivals" className="hover:text-yellow-400 transition-colors">New Arrivals</Link></li>
            <li><Link to="/shop/best-sellers" className="hover:text-yellow-400 transition-colors">Best Sellers</Link></li>
            <li><Link to="/shop/accessories" className="hover:text-yellow-400 transition-colors">Accessories</Link></li>
            <li><Link to="/shop/sale" className="hover:text-yellow-400 transition-colors text-yellow-300 font-bold">Sale</Link></li>
          </ul>
        </div>
        
        {/* Support Column */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Help</h4>
          <ul className="space-y-4 text-gray-200 text-sm font-medium">
            <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
            {/* Updated FAQ Link */}
            <li><Link to="/faq" className="hover:text-yellow-400 transition-colors">FAQ</Link></li>
            <li><Link to="/terms" className="hover:text-yellow-400 transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/wishlist" className="hover:text-yellow-400 transition-colors">My Wishlist</Link></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-300 text-xs">© 2024 FlipZone. All rights reserved.</p>
        <div className="flex gap-6">
           <Link to="/about" className="text-gray-300 hover:text-white cursor-pointer transition-colors font-mono text-xs">PRIVACY</Link>
           <Link to="/terms" className="text-gray-300 hover:text-white cursor-pointer transition-colors font-mono text-xs">TERMS</Link>
           <Link to="/about" className="text-gray-300 hover:text-white cursor-pointer transition-colors font-mono text-xs">SITEMAP</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;