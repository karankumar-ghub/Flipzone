import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { useParams, useSearchParams } from 'react-router-dom'; 
import { ChevronLeft, ChevronRight, Filter, X, Search, ChevronDown, SlidersHorizontal } from 'lucide-react'; 

const Products = () => {
  const dispatch = useDispatch();
  const { filterType } = useParams(); 
  const [searchParams, setSearchParams] = useSearchParams(); 
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance"); // New sorting state
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 40; 

  useEffect(() => {
    setCurrentPage(1);
  }, [filterType, activeCategory, searchQuery, sortBy]);

  // 1. Filter Logic
  let processedProducts = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    
    let matchesType = true;
    if (filterType === 'new-arrivals') matchesType = product.isNew;
    if (filterType === 'best-sellers') matchesType = product.isBestSeller;
    if (filterType === 'sale') matchesType = product.onSale;
    if (filterType === 'accessories') matchesType = ['Peripherals', 'Audio', 'Wearables'].includes(product.category);

    let matchesSearch = true;
    if (searchQuery) {
      matchesSearch = 
        product.name.toLowerCase().includes(searchQuery) || 
        product.description.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery);
    }

    return matchesCategory && matchesType && matchesSearch;
  });

  // 2. Sort Logic
  processedProducts.sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'newest') return b.isNew ? 1 : -1; 
    return 0; // relevance
  });

  // Pagination
  const totalPages = Math.ceil(processedProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = processedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const clearAllFilters = () => {
    setActiveCategory('all');
    setSortBy('relevance');
    setSearchParams({}); // Clear URL search params
  };

  return (
    <div className="pt-20 pb-12 bg-(--bg-primary) min-h-screen font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
        
        {/* --- SIDEBAR (Desktop) --- */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-(--bg-secondary) p-5 shadow-sm rounded-lg border border-(--card-border) sticky top-24">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
              <h3 className="font-bold text-lg text-(--text-primary) flex items-center gap-2">
                <SlidersHorizontal size={20} /> Filters
              </h3>
              <button onClick={clearAllFilters} className="text-xs text-(--accent-cyan) font-bold uppercase tracking-wide hover:text-(--accent-fuchsia) transition-colors">
                Clear All
              </button>
            </div>
            
            {/* Category Filter */}
            <div className="mb-8">
              <h4 className="text-xs font-bold text-(--text-secondary) uppercase tracking-wider mb-4">Categories</h4>
              <div className="space-y-3">
                <label className="flex items-center group cursor-pointer">
                   <input 
                      type="radio" 
                      name="category" 
                      checked={activeCategory === 'all'}
                      onChange={() => setActiveCategory('all')}
                      className="w-4 h-4 text-(--accent-cyan) border-gray-300 focus:ring-(--accent-cyan)"
                    />
                    <span className={`ml-3 text-sm transition-colors ${activeCategory === 'all' ? 'text-(--text-primary) font-bold' : 'text-gray-600 group-hover:text-(--accent-cyan)'}`}>All Products</span>
                </label>
                {CATEGORIES.map(cat => (
                  <label key={cat.id} className="flex items-center group cursor-pointer">
                    <input 
                      type="radio" 
                      name="category" 
                      checked={activeCategory === cat.id}
                      onChange={() => setActiveCategory(cat.id)}
                      className="w-4 h-4 text-(--accent-cyan) border-gray-300 focus:ring-(--accent-cyan)"
                    />
                    <span className={`ml-3 text-sm transition-colors ${activeCategory === cat.id ? 'text-(--text-primary) font-bold' : 'text-gray-600 group-hover:text-(--accent-cyan)'}`}>
                      {cat.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Price Filter Mock (Visual Only) */}
            <div>
               <h4 className="text-xs font-bold text-(--text-secondary) uppercase tracking-wider mb-4">Price Range</h4>
               <div className="px-1">
                 <div className="h-1 bg-gray-200 rounded-full relative">
                    <div className="absolute left-0 w-2/3 h-full bg-(--accent-cyan) rounded-full"></div>
                    <div className="absolute left-2/3 w-4 h-4 bg-white border-2 border-(--accent-cyan) rounded-full -top-1.5 shadow-md cursor-pointer hover:scale-110 transition-transform"></div>
                 </div>
                 <div className="flex justify-between text-xs text-(--text-secondary) mt-3 font-medium">
                    <span>$0</span>
                    <span>$1000+</span>
                 </div>
               </div>
            </div>
          </div>
        </aside>

        {/* --- MOBILE SIDEBAR OVERLAY --- */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-[60] flex lg:hidden">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSidebarOpen(false)}></div>
            <div className="relative w-72 bg-white h-full shadow-2xl p-6 overflow-y-auto animate-fade-in-right">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-xl text-(--text-primary)">Filter & Sort</h3>
                <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-full"><X size={24} /></button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Sort By</h4>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-[4px] bg-white text-sm"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Category</h4>
                  {CATEGORIES.map(cat => (
                    <div key={cat.id} onClick={() => { setActiveCategory(cat.id); setSidebarOpen(false); }} className={`py-2 px-3 mb-1 rounded-[4px] cursor-pointer ${activeCategory === cat.id ? 'bg-(--accent-cyan)/10 text-(--accent-cyan) font-bold' : 'text-gray-600 hover:bg-gray-50'}`}>
                      {cat.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- MAIN CONTENT --- */}
        <div className="flex-1 w-full">
          
          {/* Active Search/Filters Banner */}
          {searchQuery && (
            <div className="mb-6 bg-white p-4 border border-(--card-border) rounded-lg shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-(--accent-cyan)/10 flex items-center justify-center text-(--accent-cyan)">
                  <Search size={20} />
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Search results for</span>
                  <h1 className="font-bold text-xl text-(--text-primary) leading-none">"{searchQuery}"</h1>
                </div>
              </div>
              <button 
                onClick={() => setSearchParams({})}
                className="text-sm font-bold text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-[4px] transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Controls Header (Mobile/Desktop) */}
          <div className="bg-(--bg-secondary) p-4 shadow-sm rounded-lg border border-(--card-border) mb-6 sticky top-20 z-30 lg:static lg:z-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
               
               {/* Results Count */}
               <div className="text-(--text-primary) font-medium">
                  <span className="font-bold">{processedProducts.length}</span> Products Found
               </div>

               <div className="flex items-center gap-4 w-full sm:w-auto">
                 {/* Mobile Filter Trigger */}
                 <button 
                   onClick={() => setSidebarOpen(true)} 
                   className="lg:hidden flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-(--text-primary) rounded-[4px] font-bold text-sm hover:bg-gray-200"
                 >
                   <Filter size={16} /> Filters
                 </button>

                 {/* Desktop Sort Dropdown */}
                 <div className="hidden lg:flex items-center gap-2">
                   <span className="text-sm text-(--text-secondary)">Sort By:</span>
                   <div className="relative group">
                     <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="appearance-none bg-transparent font-bold text-(--text-primary) pr-8 pl-2 py-1 cursor-pointer focus:outline-none"
                     >
                       <option value="relevance">Relevance</option>
                       <option value="price-low">Price: Low to High</option>
                       <option value="price-high">Price: High to Low</option>
                       <option value="newest">Newest First</option>
                     </select>
                     <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="min-h-[400px]">
             {currentProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={(product) => dispatch(addToCart(product))} 
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 bg-white rounded-lg border border-dashed border-gray-300">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-300">
                  <Search size={48} />
                </div>
                <h3 className="text-xl font-bold text-(--text-primary) mb-2">No Matches Found</h3>
                <p className="text-(--text-secondary) mb-8 max-w-md text-center">
                  We couldn't find any products matching your current filters. Try adjusting your search or categories.
                </p>
                <button 
                  onClick={clearAllFilters}
                  className="px-8 py-3 bg-(--accent-cyan) text-white font-bold rounded-[4px] hover:shadow-lg hover:brightness-110 transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-[4px] border border-gray-200 bg-white text-gray-600 hover:border-(--accent-cyan) hover:text-(--accent-cyan) disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-10 h-10 flex items-center justify-center rounded-[4px] font-bold text-sm transition-all ${
                      currentPage === i + 1
                        ? 'bg-(--accent-cyan) text-white shadow-md'
                        : 'bg-white border border-gray-200 text-gray-600 hover:border-(--accent-cyan) hover:text-(--accent-cyan)'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-[4px] border border-gray-200 bg-white text-gray-600 hover:border-(--accent-cyan) hover:text-(--accent-cyan) disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;