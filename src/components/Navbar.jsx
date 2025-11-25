import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Zap, Search, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../store/cartSlice';
import { toggleTheme, initializeTheme } from '../store/themeSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  
  // 1. Read data from Redux Store
  const cartItems = useSelector((state) => state.cart.items);
  const theme = useSelector((state) => state.theme.mode);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Calculate total items in cart
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // 2. Initialize theme and scroll listener
  useEffect(() => {
    dispatch(initializeTheme());
    
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  // Close mobile menu automatically when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--card-border)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
            <div className="bg-gradient-to-tr from-[var(--accent-cyan)] to-[var(--accent-fuchsia)] p-2 rounded-lg transition-all duration-300">
              <Zap className="text-white fill-white" size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
              NEON<span className="text-[var(--accent-cyan)]">SHOP</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Products', 'About'].map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-all"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Theme Toggle Button */}
            <button 
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] hover:border-[var(--accent-fuchsia)] transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Cart Button */}
            <button 
              onClick={() => dispatch(toggleCart())}
              className="relative p-2 text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors group"
            >
              <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[var(--accent-fuchsia)] to-purple-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[var(--text-secondary)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-secondary)] border-b border-[var(--card-border)] backdrop-blur-xl absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-3">
             {['Home', 'Products', 'About'].map((item) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="block px-4 py-3 text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--card-bg)] rounded-xl transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;