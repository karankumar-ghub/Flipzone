import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { toggleWishlist } from '../store/wishlistSlice';
import ProductCard from '../components/ProductCard'; 
import { Star, ShoppingCart, Zap, Tag, ShieldCheck, Truck, Heart, User, ThumbsUp } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // 1. Scroll to top when product ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = PRODUCTS.find(p => p.id === parseInt(id));

  // --- NEW: Image Gallery State ---
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image when product changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [id]);

  // 2. Related Products Logic 
  const relatedProducts = product ? PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4) : [];

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = product ? wishlistItems.some(item => item.id === product.id) : false;

  const [reviews, setReviews] = useState([
    { id: 1, user: "Alex Johnson", rating: 5, date: "Oct 12, 2024", comment: "Absolutely incredible device. The battery life exceeds my expectations!", helpful: 12 },
    { id: 2, user: "Sam Rivera", rating: 4, date: "Sep 28, 2024", comment: "Great build quality, though the shipping took a day longer than promised.", helpful: 5 },
    { id: 3, user: "Jordan Lee", rating: 5, date: "Sep 15, 2024", comment: "Worth every penny. The futuristic design is a head-turner.", helpful: 8 }
  ]);

  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

  if (!product) return <div className="pt-32 text-center">Product not found</div>;

  const originalPrice = Math.round(product.price * 1.4);
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  const handleBuyNow = () => {
    dispatch(addToCart(product));
    navigate('/checkout');
  };

  const handleWishlistToggle = () => {
    dispatch(toggleWishlist(product));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.comment.trim()) return;

    const review = {
      id: Date.now(),
      user: "Guest User",
      rating: newReview.rating,
      date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
      comment: newReview.comment,
      helpful: 0
    };

    setReviews([review, ...reviews]);
    setNewReview({ rating: 5, comment: '' });
    setIsReviewFormOpen(false);
  };

  // Helper for broken images
  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80"; // Fallback
  };

  return (
    <div className="pt-20 pb-12 bg-(--bg-primary) min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- MAIN PRODUCT SECTION --- */}
        <div className="bg-(--bg-secondary) p-4 sm:p-6 lg:p-8 shadow-sm border border-(--card-border) rounded-[2px] flex flex-col lg:flex-row gap-8 mb-8">
          
          {/* Left Column: Gallery & Actions */}
          <div className="lg:w-5/12 flex flex-col sticky top-24 self-start">
            
            {/* Main Image */}
            <div className="border border-gray-100 p-4 relative flex items-center justify-center mb-4 min-h-[400px] bg-white rounded-[2px]">
              <div className="absolute top-4 right-4 z-10">
                <button 
                  onClick={handleWishlistToggle}
                  className={`p-2 rounded-full border shadow-sm transition-all ${
                    isInWishlist 
                      ? 'bg-red-50 border-red-200 text-red-500' 
                      : 'bg-white border-gray-200 text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart size={24} fill={isInWishlist ? "currentColor" : "none"} />
                </button>
              </div>

              <img 
                src={product.images ? (product.images[activeImageIndex] || product.image) : product.image} 
                alt={product.name} 
                onError={handleImageError}
                className="max-w-full max-h-[350px] object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide justify-center">
                {product.images && product.images.map((img, idx) => (
                    <div 
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`w-16 h-16 border rounded-[2px] p-1 cursor-pointer flex-shrink-0 bg-white transition-all ${
                            activeImageIndex === idx ? 'border-(--accent-cyan) ring-1 ring-(--accent-cyan)' : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                        <img 
                            src={img} 
                            alt={`Thumbnail ${idx}`} 
                            onError={handleImageError}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
            
            <div className="flex gap-3 font-bold text-sm uppercase">
              <button 
                onClick={() => dispatch(addToCart(product))}
                className="flex-1 py-3.5 bg-[#ff9f00] hover:bg-[#f39400] text-white rounded-[2px] shadow-sm flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} /> Add to Cart
              </button>
              <button 
                onClick={handleBuyNow}
                className="flex-1 py-3.5 bg-[#fb641b] hover:bg-[#e85d19] text-white rounded-[2px] shadow-sm flex items-center justify-center gap-2"
              >
                <Zap size={18} /> Buy Now
              </button>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:w-7/12 flex flex-col">
            <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
              Home › {product.category} › <span className="text-gray-700 truncate max-w-[200px]">{product.name}</span>
            </div>

            <h1 className="text-xl sm:text-2xl font-medium text-(--text-primary) mb-2 leading-snug">
              {product.name} - {product.description.substring(0, 50)}...
            </h1>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded-[2px] text-xs font-bold">
                <span>{product.rating}</span>
                <Star size={10} fill="currentColor" />
              </div>
              <span className="text-sm text-gray-500 font-medium">{product.reviews.toLocaleString()} Ratings & {Math.floor(product.reviews / 5)} Reviews</span>
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="Assured" className="h-5 ml-2" />
            </div>

            {/* Price with Rupee */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-medium text-(--text-primary)">₹{Math.floor(product.price).toLocaleString('en-IN')}</span>
              <span className="text-base text-gray-500 line-through">₹{originalPrice.toLocaleString('en-IN')}</span>
              <span className="text-base text-green-600 font-bold">{discount}% off</span>
            </div>
            
             {/* Available Offers */}
             <div className="mb-6">
              <h3 className="text-sm font-bold text-(--text-primary) mb-2">Available offers</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Tag size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-(--text-primary)"><span className="font-bold">Bank Offer</span> 5% Unlimited Cashback on Axis Bank Credit Card <span className="text-blue-600 font-medium cursor-pointer">T&C</span></p>
                </div>
                <div className="flex items-start gap-2">
                  <Tag size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-(--text-primary)"><span className="font-bold">Bank Offer</span> 10% Off on SBI Credit Card EMI Transactions, up to ₹2000 <span className="text-blue-600 font-medium cursor-pointer">T&C</span></p>
                </div>
                <div className="flex items-start gap-2">
                  <Tag size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-(--text-primary)"><span className="font-bold">Partner Offer</span> Sign up for Pay Later and get free gift card worth ₹1000 <span className="text-blue-600 font-medium cursor-pointer">Know More</span></p>
                </div>
              </div>
            </div>

            {/* ... (Services, Specs - No changes needed here) ... */}
            <div className="flex flex-wrap gap-6 border-t border-gray-100 py-4 mb-4">
               <div className="flex items-center gap-2 text-sm text-gray-600">
                 <div className="bg-gray-100 p-2 rounded-full"><Truck size={16} /></div>
                 Free Delivery
               </div>
               <div className="flex items-center gap-2 text-sm text-gray-600">
                 <div className="bg-gray-100 p-2 rounded-full"><ShieldCheck size={16} /></div>
                 1 Year Warranty
               </div>
            </div>

            <div className="border border-gray-200 rounded-[2px] mb-8">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h3 className="text-lg font-medium text-(--text-primary)">Specifications</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-y-4 text-sm">
                  <div className="grid grid-cols-3">
                    <div className="text-gray-500">In The Box</div>
                    <div className="col-span-2 text-(--text-primary)">1 {product.category} Device, Manual</div>
                  </div>
                  <div className="grid grid-cols-3">
                    <div className="text-gray-500">Model Name</div>
                    <div className="col-span-2 text-(--text-primary)">{product.name}</div>
                  </div>
                  <div className="grid grid-cols-3">
                    <div className="text-gray-500">Description</div>
                    <div className="col-span-2 text-(--text-primary)">{product.description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- REVIEWS SECTION --- */}
        <div className="bg-(--bg-secondary) border border-(--card-border) rounded-[2px] p-6 sm:p-8 mb-8">
            <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-(--text-primary)">Ratings & Reviews</h2>
            <button 
                onClick={() => setIsReviewFormOpen(!isReviewFormOpen)}
                className="bg-white border border-gray-300 text-(--text-primary) px-4 py-2 rounded-[2px] font-bold shadow-sm hover:shadow-md transition-shadow"
            >
                Rate Product
            </button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 mb-8 pb-8 border-b border-gray-200">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                <span className="text-4xl font-bold text-(--text-primary)">{product.rating}</span>
                <Star size={28} fill="#388e3c" className="text-green-600" />
              </div>
              <p className="text-gray-500 text-sm">{product.reviews.toLocaleString()} Ratings & {reviews.length} Reviews</p>
            </div>
            
             <div className="flex-1 space-y-2 max-w-sm">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-3 text-sm">
                  <span className="font-bold w-3">{stars}</span> 
                  <Star size={12} className="text-gray-400" />
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${stars >= 4 ? 'bg-green-500' : stars === 3 ? 'bg-yellow-400' : 'bg-red-500'}`} 
                      style={{ width: stars === 5 ? '70%' : stars === 4 ? '20%' : '10%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

           {/* Review Form */}
           {isReviewFormOpen && (
            <form onSubmit={handleSubmitReview} className="mb-8 bg-gray-50 p-6 rounded-[4px] border border-gray-200 animate-fade-in">
              <h3 className="font-bold text-lg mb-4">Write a Review</h3>
              <div className="mb-4">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star 
                        size={24} 
                        fill={star <= newReview.rating ? "#fb641b" : "none"} 
                        className={star <= newReview.rating ? "text-[#fb641b]" : "text-gray-300"} 
                      />
                    </button>
                  ))}
                </div>
              </div>
               <div className="mb-4">
                <textarea 
                  required
                  rows="4"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder="Share your thoughts..."
                  className="w-full p-3 border border-gray-300 rounded-[2px] focus:border-(--accent-cyan) outline-none text-sm"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setIsReviewFormOpen(false)} className="px-6 py-2 font-bold text-gray-600 hover:text-gray-800">Cancel</button>
                <button type="submit" className="px-8 py-2 bg-(--accent-fuchsia) text-white font-bold rounded-[2px] shadow-sm hover:brightness-110">Submit</button>
              </div>
            </form>
          )}

          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                 <div className="flex items-center gap-2 mb-2">
                  <div className={`text-white text-xs font-bold px-2 py-0.5 rounded-[2px] flex items-center gap-1 ${review.rating >= 4 ? 'bg-green-600' : 'bg-orange-500'}`}>
                    {review.rating} <Star size={10} fill="currentColor" />
                  </div>
                  <span className="font-bold text-(--text-primary) text-sm">{review.comment.substring(0, 50)}...</span>
                </div>
                 <p className="text-(--text-primary) text-sm mb-3 leading-relaxed">{review.comment}</p>
                 <div className="flex justify-between items-center text-xs text-gray-500">
                  <span className="font-bold text-gray-600">{review.user}</span>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 hover:text-blue-600 transition-colors"><ThumbsUp size={14} /> {review.helpful}</button>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RELATED PRODUCTS --- */}
        {relatedProducts.length > 0 && (
          <div className="bg-(--bg-secondary) border border-(--card-border) rounded-[2px] p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-(--text-primary) mb-6">Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <ProductCard 
                  key={item.id} 
                  product={item} 
                  onAddToCart={(p) => dispatch(addToCart(p))} 
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetails;