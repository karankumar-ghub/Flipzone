import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="group relative bg-gray-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col h-full backdrop-blur-sm">
    {/* Image Area - Clickable via Link */}
    <Link to={`/product/${product.id}`} className="block relative h-72 overflow-hidden bg-gray-800/50 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-60"></div>
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      
      {/* Quick Actions (Heart) */}
      <button 
        onClick={(e) => {
          e.preventDefault(); // Prevent navigation when clicking heart
          e.stopPropagation();
        }}
        className="absolute top-4 right-4 z-20 p-2 bg-black/40 backdrop-blur-md rounded-full text-gray-400 hover:text-fuchsia-500 hover:bg-white/10 transition-all border border-white/5"
      >
        <Heart size={18} />
      </button>
      
      <div className="absolute bottom-4 left-4 z-20 flex gap-1">
        {[1,2,3].map(i => (
          <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-cyan-500' : 'bg-gray-600'}`}></div>
        ))}
      </div>
    </Link>

    {/* Content Area */}
    <div className="p-6 flex-1 flex flex-col relative z-20">
      <div className="mb-2 flex justify-between items-start">
        <div className="bg-gray-800/50 px-2 py-1 rounded text-[10px] font-bold text-cyan-400 uppercase tracking-wider border border-white/5">
          {product.category}
        </div>
        <div className="flex items-center gap-1 text-yellow-400 text-xs font-bold">
          <Star size={12} fill="currentColor" />
          <span>{product.rating}</span>
          <span className="text-gray-600 font-normal">({product.reviews})</span>
        </div>
      </div>

      {/* Title - Clickable via Link */}
      <Link to={`/product/${product.id}`}>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-tight cursor-pointer">
          {product.name}
        </h3>
      </Link>
      
      <p className="text-sm text-gray-500 mb-6 line-clamp-2">
        {product.description}
      </p>
      
      <div className="mt-auto flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-gray-600 text-xs font-mono mb-0.5">PRICE</span>
          <span className="text-2xl font-bold text-white">${product.price}</span>
        </div>
        <button 
          onClick={(e) => {
            e.preventDefault(); // Important: Stop link navigation when clicking "Add"
            onAddToCart(product);
          }}
          className="px-5 py-2.5 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 flex items-center gap-2 active:scale-95 group/btn"
        >
          Add
          <ShoppingCart size={16} className="group-hover/btn:rotate-12 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;