import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import LoginModal from './components/LoginModal'; 
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Products from './pages/Products';
import Wishlist from './pages/Wishlist';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Orders from './pages/Orders'; // 1. Import Orders Page

export default function App() {
  return (
    <div className="min-h-screen bg-(--bg-primary) text-(--text-primary) font-sans overflow-x-hidden transition-colors duration-500">
      
      <Navbar />
      
      {/* Global Modals */}
      <LoginModal /> 
      <CartSidebar />

      <main className="flex-grow">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            
            {/* Standard Products Page */}
            <Route path="/products" element={<Products />} />
            
            {/* Filtered Product Pages */}
            <Route path="/shop/:filterType" element={<Products />} />

            {/* Wishlist Page */}
            <Route path="/wishlist" element={<Wishlist />} />

            {/* FAQ Page */}
            <Route path="/faq" element={<FAQ />} />

            {/* Terms Page */}
            <Route path="/terms" element={<Terms />} />

            {/* Orders Page */}
            <Route path="/orders" element={<Orders />} /> 
          </Routes>
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}