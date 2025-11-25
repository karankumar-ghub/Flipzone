import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Smartphone, Shirt, Monitor, Home as HomeIcon, Zap } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const Home = () => {
  const dispatch = useDispatch();

  // 1. UPDATED: Increased limits for rows
  // Electronics: 3 columns x 5 rows = 15 items
  const electronics = PRODUCTS.filter(p => p.category === 'Electronics' || p.category === 'Audio' || p.category === 'Gaming').slice(0, 15);
  
  // Best Sellers: 4 columns x 2 rows = 8 items
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 8);

  // Enhanced Categories with Gradients
  const topCategories = [
    { 
      name: 'Top Offers', 
      icon: <Zap size={24} className="text-white" />, 
      gradient: "from-orange-400 to-red-500",
      shadow: "shadow-orange-200"
    },
    { 
      name: 'Mobiles', 
      icon: <Smartphone size={24} className="text-white" />, 
      gradient: "from-blue-400 to-cyan-500",
      shadow: "shadow-blue-200"
    },
    { 
      name: 'Electronics', 
      icon: <Monitor size={24} className="text-white" />, 
      gradient: "from-purple-500 to-indigo-600",
      shadow: "shadow-purple-200"
    },
    { 
      name: 'Fashion', 
      icon: <Shirt size={24} className="text-white" />, 
      gradient: "from-pink-400 to-rose-500",
      shadow: "shadow-pink-200"
    },
    { 
      name: 'Home', 
      icon: <HomeIcon size={24} className="text-white" />, 
      gradient: "from-emerald-400 to-teal-500",
      shadow: "shadow-emerald-200"
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-(--bg-primary) pb-12">
      
      {/* --- 1. CATEGORY STRIP --- */}
      <div className="bg-white shadow-sm border-b border-gray-100 mb-6 overflow-x-auto scrollbar-hide py-2">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex justify-between md:justify-around min-w-max gap-6 py-4">
            {topCategories.map((cat) => (
              <Link 
                to="/products" 
                key={cat.name} 
                className="flex flex-col items-center gap-3 group cursor-pointer min-w-[80px]"
              >
                {/* Icon Circle with Gradient & Animation */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-br ${cat.gradient} flex items-center justify-center transform transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110 shadow-lg ${cat.shadow} group-hover:shadow-xl`}>
                  {cat.icon}
                </div>
                
                {/* Text Label */}
                <span className="text-xs md:text-sm font-bold text-gray-700 group-hover:text-(--accent-cyan) transition-colors tracking-wide">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6 space-y-4">
        
        {/* --- 2. HERO BANNER --- */}
        <div className="relative bg-white p-2 shadow-sm rounded-[2px] overflow-hidden h-48 md:h-72 lg:h-80 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center px-8 md:px-16 overflow-hidden">
            {/* Animated Background Element */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="text-white space-y-4 max-w-lg z-10 relative animate-fade-in-up">
              <div className="bg-yellow-400 text-black text-xs font-black px-3 py-1 inline-block rounded-[2px] tracking-wider uppercase shadow-md transform -rotate-2">
                BIG SAVINGS DAYS
              </div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight drop-shadow-md">
                The Future of <br/>Tech is Here
              </h1>
              <p className="text-blue-100 font-medium text-lg">Up to 70% off on Premium Electronics</p>
              <Link to="/products" className="inline-block bg-white text-blue-600 px-8 py-3 font-bold rounded-[2px] hover:bg-gray-50 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transform hover:translate-x-1">
                Shop Now
              </Link>
            </div>
            
            {/* Abstract decoration */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-linear-to-t from-black/20 to-transparent skew-x-12 translate-x-20"></div>
          </div>
        </div>

        {/* --- 3. DEAL OF THE DAY (Row) --- */}
        <div className="bg-white p-4 shadow-sm rounded-[2px] border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 border-b border-gray-100 pb-4 gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-800">Deals of the Day</h2>
              <div className="hidden sm:flex items-center gap-2 bg-red-50 text-red-600 border border-red-100 px-3 py-1 rounded-[4px] text-xs font-bold animate-pulse">
                <Clock size={14} />
                <span>14h : 22m Remaining</span>
              </div>
            </div>
            <Link to="/products" className="bg-(--accent-cyan) text-white px-6 py-2 rounded-[2px] text-sm font-bold shadow-md hover:shadow-lg hover:brightness-110 transition-all flex items-center gap-1">
              VIEW ALL <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={(product) => dispatch(addToCart(product))}
              />
            ))}
          </div>
        </div>

        {/* --- 4. BEST OF ELECTRONICS (Row) --- */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar Ad */}
          <div className="hidden md:flex w-72 bg-white p-6 shadow-sm rounded-[2px] text-center self-start flex-shrink-0 flex-col justify-center items-center border-t-4 border-(--accent-cyan) relative overflow-hidden group">
             <div className="absolute inset-0 bg-linear-to-b from-blue-50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10">
               <h3 className="text-3xl font-black text-gray-800 mb-2 tracking-tight">Audio<br/><span className="text-(--accent-cyan)">Sale</span></h3>
               <p className="text-gray-500 mb-6 font-medium">Grab the best deals on premium audio gear.</p>
               <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80" alt="Headphones" className="w-32 h-32 object-contain mx-auto mb-6 drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500" />
               <Link to="/shop/accessories" className="bg-(--accent-fuchsia) text-white px-8 py-3 rounded-[2px] font-bold shadow-lg hover:shadow-orange-200 hover:-translate-y-1 transition-all inline-block">
                 Explore
               </Link>
             </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1 bg-white p-6 shadow-sm rounded-[2px] border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Best of Electronics</h2>
              <Link to="/shop/accessories" className="flex items-center gap-1 text-sm font-bold text-(--accent-cyan) hover:underline">
                See All <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {electronics.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={(product) => dispatch(addToCart(product))}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;