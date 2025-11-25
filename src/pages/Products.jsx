import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
// 1. Remove useCart, Import Redux hooks
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Search, SlidersHorizontal } from 'lucide-react';

const Products = () => {
  // 2. Setup Dispatch
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = PRODUCTS.filter(product => {
    return activeCategory === "all" || product.category === activeCategory;
  });

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-[var(--card-border)] pb-8 gap-6">
        <div>
          <h1 className="text-4xl font-black text-[var(--text-primary)] mb-2">FULL <span className="text-[var(--accent-fuchsia)]">CATALOG</span></h1>
          <p className="text-[var(--text-secondary)]">Browsing all {PRODUCTS.length} futuristic artifacts</p>
        </div>
        
        {/* Simple Filter */}
        <div className="flex flex-wrap gap-2">
           {CATEGORIES.map((cat) => (
             <button
               key={cat.id}
               onClick={() => setActiveCategory(cat.id)}
               className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                 activeCategory === cat.id 
                 ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]' 
                 : 'bg-[var(--card-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
               }`}
             >
               {cat.name}
             </button>
           ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            // 3. Pass Redux action
            onAddToCart={(product) => dispatch(addToCart(product))} 
          />
        ))}
      </div>
    </div>
  );
};

export default Products;