import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../store/wishlistSlice';

const ProductCard = ({ product, onAddToCart }) => {
  const dispatch = useDispatch();
  
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const originalPrice = Math.round(product.price * 1.4);
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  const handleWishlistClick = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    dispatch(toggleWishlist(product));
  };

  // Helper for broken images
  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80"; // Fallback Image
  };

  // Use the first image from the array, fallback to the old 'image' property if needed
  const displayImage = product.images && product.images.length > 0 ? product.images[0] : product.image;

  return (
    <div className="group relative bg-(--bg-secondary) border border-(--card-border) rounded-[4px] hover:shadow-lg transition-all duration-200 flex flex-col h-full overflow-hidden">
      
      {/* Favorite Button (Absolute) */}
      <button 
        onClick={handleWishlistClick}
        className={`absolute top-3 right-3 z-10 transition-colors duration-200 ${
          isInWishlist ? 'text-red-500' : 'text-gray-300 hover:text-red-500'
        }`}
      >
        <Heart 
          size={18} 
          fill="currentColor" 
          className={`transition-opacity duration-200 ${
            isInWishlist ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`} 
        />
      </button>

      {/* Image Area */}
      <Link to={`/product/${product.id}`} className="relative h-56 p-6 flex items-center justify-center bg-white">
        <img 
          src={displayImage} 
          alt={product.name} 
          onError={handleImageError}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title */}
        <Link to={`/product/${product.id}`} className="text-sm text-(--text-primary) hover:text-(--accent-cyan) font-medium leading-snug mb-2 line-clamp-2 transition-colors">
          {product.name}
        </Link>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1 bg-green-600 text-white px-1.5 py-0.5 rounded-[2px] text-[10px] font-bold">
            <span>{product.rating}</span>
            <Star size={8} fill="currentColor" />
          </div>
          <span className="text-xs text-(--text-secondary) font-medium">({product.reviews.toLocaleString()})</span>
        </div>

        {/* Price Block */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-lg font-bold text-(--text-primary)">₹{Math.floor(product.price).toLocaleString('en-IN')}</span>
            <span className="text-sm text-(--text-secondary) line-through">₹{originalPrice.toLocaleString('en-IN')}</span>
            <span className="text-xs text-green-600 font-bold">{discount}% off</span>
          </div>
          
          {/* Badges */}
          <div className="text-[10px] font-medium text-(--text-primary) mt-1">
            Free delivery
          </div>
          
          {product.isBestSeller && (
             <div className="mt-2 text-[10px] font-bold text-(--accent-fuchsia) border border-(--accent-fuchsia) px-1.5 py-0.5 inline-block rounded-[2px] uppercase tracking-wider">
               Bestseller
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;