import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
// 1. Remove useCart, Import Redux hooks
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Star, Shield, Truck, ArrowLeft, ShoppingCart, Zap } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // 2. Setup Dispatch
  const dispatch = useDispatch();
  
  const product = PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) return <div className="p-20 text-center text-[var(--text-secondary)]">Product not found</div>;

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] mb-8 transition-colors"
      >
        <ArrowLeft size={20} /> Back to Shop
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)] group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-cyan)]/10 to-[var(--accent-fuchsia)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-[var(--accent-cyan)]">
              PREMIUM GEAR
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col h-full">
          <div className="mb-2 text-[var(--accent-fuchsia)] font-bold tracking-wider text-sm uppercase">{product.category}</div>
          <h1 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-4 leading-tight">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className={i >= Math.floor(product.rating) ? "text-gray-600" : ""} />
              ))}
            </div>
            <span className="text-[var(--text-secondary)] text-sm">({product.reviews} verified reviews)</span>
          </div>

          <div className="text-3xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
            ${product.price}
            <span className="text-lg text-[var(--text-secondary)] font-normal line-through">${(product.price * 1.2).toFixed(2)}</span>
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/30">SAVE 20%</span>
          </div>

          <p className="text-[var(--text-secondary)] leading-relaxed mb-8 text-lg">
            {product.description} Experience the pinnacle of {product.category.toLowerCase()} technology with active feedback loops and quantum-ready architecture.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--card-border)] flex items-center gap-3">
              <Truck className="text-[var(--accent-cyan)]" />
              <div>
                <div className="font-bold text-sm text-[var(--text-primary)]">Free Shipping</div>
                <div className="text-xs text-[var(--text-secondary)]">Global delivery</div>
              </div>
            </div>
            <div className="bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--card-border)] flex items-center gap-3">
              <Shield className="text-[var(--accent-fuchsia)]" />
              <div>
                <div className="font-bold text-sm text-[var(--text-primary)]">2 Year Warranty</div>
                <div className="text-xs text-[var(--text-secondary)]">Full coverage</div>
              </div>
            </div>
          </div>

          <div className="mt-auto flex gap-4">
            {/* 3. Use dispatch(addToCart) */}
            <button 
              onClick={() => dispatch(addToCart(product))}
              className="flex-1 bg-[var(--accent-cyan)] text-black font-bold py-4 rounded-xl hover:brightness-110 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              Add to Cart
              <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
            </button>
            <button className="p-4 rounded-xl border border-[var(--card-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--card-bg)] transition-colors">
              <Zap size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;