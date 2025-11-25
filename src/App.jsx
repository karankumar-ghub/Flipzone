import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Products from './pages/Products';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans overflow-x-hidden transition-colors duration-500">
      
      <Navbar />

      <main className="flex-grow">
        {/* The PageTransition component handles the GSAP animations per route */}
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </PageTransition>
      </main>

      <Footer />
      
      {/* CartSidebar handles its own visibility state via Redux now */}
      <CartSidebar />
    </div>
  );
}