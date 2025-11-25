import React, { useState } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
// 1. Remove useCart, Import Redux hooks
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Search } from 'lucide-react';

const Home = () => {
  // 2. Setup Dispatch
  const dispatch = useDispatch();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          
          {/* Category Pills */}
          <div className="overflow-x-auto pb-2 scrollbar-hide w-full md:w-auto">
            <div className="flex space-x-3 min-w-max">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm transition-all duration-300 ${
                    activeCategory === cat.id 
                      ? 'bg-[var(--accent-cyan)] text-black border-[var(--accent-cyan)] font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
                      : 'bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-secondary)] hover:border-white/30 hover:text-[var(--text-primary)]'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Search Input */}
          <div className="relative group w-full md:w-72">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] rounded-full py-2.5 px-4 pl-10 focus:outline-none focus:border-[var(--accent-cyan)] focus:bg-[var(--bg-secondary)] transition-all placeholder:text-gray-600"
            />
            <Search className="absolute left-3 top-3 text-gray-500 group-focus-within:text-[var(--accent-cyan)] transition-colors" size={18} />
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8 border-b border-[var(--card-border)] pb-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
            {activeCategory === 'all' ? 'Featured' : activeCategory} <span className="text-[var(--accent-fuchsia)]">Collection</span>
          </h2>
          <span className="text-[var(--text-secondary)] text-sm font-mono">{filteredProducts.length} ITEMS</span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                // 3. Pass the Redux action to the card
                onAddToCart={(product) => dispatch(addToCart(product))} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[var(--card-bg)] rounded-3xl border border-[var(--card-border)]">
            <Search className="mx-auto h-12 w-12 text-gray-600 mb-4" />
            <h3 className="text-xl font-bold text-[var(--text-secondary)]">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;