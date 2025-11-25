import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search, ChevronDown, User, LogOut, Heart, Bell, HelpCircle, TrendingUp, Package } from 'lucide-react'; // Added Package icon
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openLoginModal, logout } from '../store/authSlice.js';

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get data from Redux
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist?.items || []); 
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
    setIsMoreMenuOpen(false);
  }, [location]);

  // Handle Search Submit
  const handleSearch = (e) => {
    if ((e.key === 'Enter' || e.type === 'click') && searchQuery.trim()) {
      e.preventDefault();
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-(--nav-bg) text-(--nav-text) shadow-md h-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full gap-4">
          
          {/* 1. Logo Area */}
          <Link to="/" className="flex items-center flex-shrink-0 gap-1 group min-w-max">
            <span className="text-xl font-bold italic tracking-wide flex flex-col leading-none text-white">
              <span>FlipZone</span>
              <span className="text-[10px] font-normal opacity-80 not-italic hover:underline text-gray-200">Explore Plus</span>
            </span>
            <div className="text-yellow-400 pb-2">
               <span className="text-xs">✦</span>
            </div>
          </Link>

          {/* 2. Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <input 
              type="text" 
              placeholder="Search for products, brands and more" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="w-full bg-white text-black rounded-[2px] py-2 px-4 pr-10 focus:outline-none shadow-sm text-sm"
            />
            <button onClick={handleSearch} className="absolute right-3 top-2.5 text-(--accent-cyan) hover:scale-110 transition-transform">
              <Search size={20} />
            </button>
          </div>

          {/* 3. Right Actions */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-sm text-white">
            
            {/* Login / User Menu */}
            {isLoggedIn ? (
              <div className="relative">
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 font-semibold hover:text-gray-200"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs border border-white/30">
                    {user?.name.charAt(0).toUpperCase()}
                  </div>
                  <span>{user?.name}</span>
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white text-gray-800 rounded-[2px] shadow-xl border border-gray-100 py-1 z-50 animate-fade-in">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-xs text-gray-500">Signed in as</p>
                      <p className="font-bold truncate">{user?.email}</p>
                    </div>
                    
                    {/* NEW: My Orders Link */}
                    <Link to="/orders" className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm flex items-center gap-2 text-gray-700">
                      <Package size={16} /> My Orders
                    </Link>

                    <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm flex items-center gap-2 text-gray-700">
                      <User size={16} /> My Profile
                    </button>
                    <button 
                      onClick={() => dispatch(logout())}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm flex items-center gap-2 text-red-600"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={() => dispatch(openLoginModal())}
                className="bg-white text-(--accent-cyan) px-8 py-1 font-semibold border border-white hover:bg-transparent hover:text-white transition-colors rounded-[2px]"
              >
                Login
              </button>
            )}

            {/* "More" Dropdown */}
            <div 
              className="relative cursor-pointer h-full flex items-center"
              onMouseEnter={() => setIsMoreMenuOpen(true)}
              onMouseLeave={() => setIsMoreMenuOpen(false)}
            >
              <div className="flex items-center gap-1 hover:text-gray-200 p-2">
                <span>More</span>
                <ChevronDown size={16} className={`transform transition-transform ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Dropdown Content */}
              {isMoreMenuOpen && (
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-56 bg-white text-gray-800 rounded-[2px] shadow-xl border border-gray-100 py-1 z-50 animate-fade-in">
                  <div className="py-1">
                    <Link to="/faq" className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm flex items-center gap-3 border-b border-gray-50">
                      <HelpCircle size={16} className="text-(--accent-cyan)" />
                      24x7 Customer Care
                    </Link>
                    <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm flex items-center gap-3 border-b border-gray-50">
                      <Bell size={16} className="text-(--accent-cyan)" />
                      Notification Preferences
                    </button>
                    <Link to="/about" className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm flex items-center gap-3">
                      <TrendingUp size={16} className="text-(--accent-cyan)" />
                      Advertise
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist Link */}
            <Link to="/wishlist" className="flex items-center gap-2 hover:text-gray-200 font-semibold text-white relative group">
               <div className="relative">
                  <Heart size={20} className="group-hover:scale-110 transition-transform" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-(--accent-fuchsia) text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-(--nav-bg)">
                      {wishlistCount}
                    </span>
                  )}
               </div>
               <span>Wishlist</span>
            </Link>

            {/* Cart Link */}
            <Link to="/checkout" className="flex items-center gap-2 hover:text-gray-200 font-semibold text-white group">
              <div className="relative">
                <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-(--accent-fuchsia) text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-(--nav-bg)">
                    {cartCount}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <Link to="/checkout" className="relative text-white">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-(--accent-fuchsia) text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
             </Link>
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
               {isMobileMenuOpen ? <X color="white" /> : <Menu color="white" />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black border-t border-gray-200 absolute w-full shadow-xl z-50">
          <div className="p-3 bg-(--nav-bg)">
             <div className="relative">
              <input 
                type="text" 
                placeholder="Search for products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="w-full bg-white text-black rounded-[2px] py-2 px-4 focus:outline-none shadow-sm text-sm"
              />
              <button onClick={handleSearch} className="absolute right-3 top-2.5 text-gray-500">
                <Search size={18} />
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            {isLoggedIn ? (
               <div className="px-4 py-4 bg-blue-50 border-b border-blue-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-(--accent-cyan) text-white flex items-center justify-center font-bold">
                    {user?.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Hello, {user?.name}</p>
                    {/* NEW: Mobile My Orders */}
                    <Link to="/orders" onClick={() => setIsMobileMenuOpen(false)} className="text-xs text-(--accent-cyan) font-bold hover:underline block mb-1">My Orders</Link>
                    <button onClick={() => dispatch(logout())} className="text-xs text-red-600 font-medium">Logout</button>
                  </div>
               </div>
            ) : (
              <div className="px-4 py-4 bg-gray-50">
                 <button 
                   onClick={() => { dispatch(openLoginModal()); setIsMobileMenuOpen(false); }}
                   className="w-full bg-(--accent-cyan) text-white py-2 rounded font-semibold shadow-sm"
                 >
                   Login / Signup
                 </button>
              </div>
            )}
             
             {/* Mobile Wishlist Link */}
             <Link 
               to="/wishlist" 
               className="px-4 py-3 text-sm font-medium border-b border-gray-100 hover:bg-gray-50 flex justify-between items-center text-(--text-primary)"
               onClick={() => setIsMobileMenuOpen(false)}
             >
                <div className="flex items-center gap-3">
                   <Heart size={18} className="text-(--text-secondary)" />
                   My Wishlist
                   {wishlistCount > 0 && <span className="bg-(--accent-fuchsia) text-white text-[10px] px-1.5 py-0.5 rounded-full">{wishlistCount}</span>}
                </div>
                <span className="text-gray-400">›</span>
             </Link>

             {/* Mobile Extra Links */}
             <Link to="/faq" className="px-4 py-3 text-sm font-medium border-b border-gray-100 hover:bg-gray-50 flex items-center gap-3 text-gray-600">
                <HelpCircle size={18} /> 24x7 Customer Care
             </Link>

             {['Home', 'Mobiles', 'Fashion', 'Electronics', 'Home & Furniture', 'Appliances'].map((item) => (
              <Link 
                key={item}
                to="/"
                className="px-4 py-3 text-sm font-medium border-b border-gray-100 hover:bg-gray-50 flex justify-between items-center"
              >
                {item}
                <span className="text-gray-400">›</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;