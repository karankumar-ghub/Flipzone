import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { addToCart } from '../store/cartSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <div className="pt-24 pb-12 bg-(--bg-primary) min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
          <Heart className="text-red-500 fill-red-500" size={28} />
          <h1 className="text-2xl font-bold text-(--text-primary)">My Wishlist <span className="text-gray-500 text-lg font-normal">({wishlistItems.length})</span></h1>
        </div>

        {wishlistItems.length === 0 ? (
          // Empty State
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[2px] shadow-sm border border-(--card-border)">
            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <Heart size={48} className="text-red-300" />
            </div>
            <h2 className="text-xl font-bold text-(--text-primary) mb-2">Your wishlist is empty</h2>
            <p className="text-(--text-secondary) mb-8 max-w-sm text-center">
              Save items you want to buy later. Heart icons on products will save them here.
            </p>
            <Link 
              to="/products" 
              className="px-8 py-3 bg-(--accent-cyan) text-white font-bold rounded-[2px] hover:shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
            >
              Start Shopping <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          // Wishlist Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={(p) => dispatch(addToCart(p))} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;