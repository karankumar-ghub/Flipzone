import React, { useState } from 'react';
// 1. Remove useCart, Import Redux hooks
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Shield, CreditCard, CheckCircle } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 2. Get state from Redux
  const cartItems = useSelector((state) => state.cart.items);
  
  // Calculate total manually since we don't have a selector for it yet
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const [loading, setLoading] = useState(false);

  if (cartItems.length === 0) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Your cart is empty</h2>
        <button onClick={() => navigate('/')} className="text-[var(--accent-cyan)] underline hover:text-[var(--accent-fuchsia)] transition-colors">Return Home</button>
      </div>
    );
  }

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // 3. Dispatch Redux action
      dispatch(clearCart());
      alert("Order placed successfully! Welcome to the future.");
      navigate('/');
    }, 2000);
  };

  return (
    <div className="pt-32 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black text-[var(--text-primary)] mb-8 flex items-center gap-3">
        SECURE <span className="text-[var(--accent-cyan)]">CHECKOUT</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping */}
          <section className="bg-[var(--bg-secondary)] border border-[var(--card-border)] p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-[var(--text-primary)]">
              <div className="bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] w-8 h-8 rounded-full flex items-center justify-center text-sm">1</div>
              Shipping Details
            </h2>
            <form id="checkout-form" onSubmit={handlePayment} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required type="text" placeholder="Full Name" className="bg-[var(--bg-primary)] border border-[var(--card-border)] rounded-lg p-3 text-[var(--text-primary)] focus:border-[var(--accent-cyan)] outline-none transition-colors" />
              <input required type="email" placeholder="Email Address" className="bg-[var(--bg-primary)] border border-[var(--card-border)] rounded-lg p-3 text-[var(--text-primary)] focus:border-[var(--accent-cyan)] outline-none transition-colors" />
              <input required type="text" placeholder="Street Address" className="md:col-span-2 bg-[var(--bg-primary)] border border-[var(--card-border)] rounded-lg p-3 text-[var(--text-primary)] focus:border-[var(--accent-cyan)] outline-none transition-colors" />
              <input required type="text" placeholder="City" className="bg-[var(--bg-primary)] border border-[var(--card-border)] rounded-lg p-3 text-[var(--text-primary)] focus:border-[var(--accent-cyan)] outline-none transition-colors" />
              <input required type="text" placeholder="Postal Code" className="bg-[var(--bg-primary)] border border-[var(--card-border)] rounded-lg p-3 text-[var(--text-primary)] focus:border-[var(--accent-cyan)] outline-none transition-colors" />
            </form>
          </section>

          {/* Payment */}
          <section className="bg-[var(--bg-secondary)] border border-[var(--card-border)] p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-[var(--text-primary)]">
              <div className="bg-[var(--accent-fuchsia)]/20 text-[var(--accent-fuchsia)] w-8 h-8 rounded-full flex items-center justify-center text-sm">2</div>
              Payment Method
            </h2>
            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)] text-[var(--accent-cyan)] p-4 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all hover:shadow-lg">
                <CreditCard size={24} className="mb-2" />
                <span className="font-bold text-sm">Credit Card</span>
              </div>
              <div className="flex-1 bg-[var(--bg-primary)] border border-[var(--card-border)] text-[var(--text-secondary)] p-4 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[var(--text-secondary)] transition-all">
                <span className="font-bold text-sm">Crypto</span>
              </div>
            </div>
            <div className="space-y-4">
              <input required form="checkout-form" type="text" placeholder="Card Number" className="w-full bg-[var(--bg-primary)] border border-[var(--card-border)] rounded-lg p-3 text-[var(--text-primary)] focus:border-[var(--accent-cyan)] outline-none transition-colors" />
              <div className="grid grid-cols-2 gap-4">
                <input required form="checkout-form" type="text" placeholder="MM/YY" className="bg-[var(--bg-primary)] border border-[var(--card-border)] rounded-lg p-3 text-[var(--text-primary)] focus:border-[var(--accent-cyan)] outline-none transition-colors" />
                <input required form="checkout-form" type="text" placeholder="CVC" className="bg-[var(--bg-primary)] border border-[var(--card-border)] rounded-lg p-3 text-[var(--text-primary)] focus:border-[var(--accent-cyan)] outline-none transition-colors" />
              </div>
            </div>
          </section>
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-1">
          <div className="bg-[var(--bg-secondary)] border border-[var(--card-border)] p-6 rounded-2xl sticky top-24">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 scrollbar-hide">
              {cartItems.map(item => (
                <div key={item.cartId} className="flex gap-4 items-center">
                  <img src={item.image} alt="" className="w-12 h-12 rounded bg-[var(--bg-primary)] object-cover" />
                  <div className="flex-1">
                    <div className="text-sm font-bold truncate text-[var(--text-primary)]">{item.name}</div>
                    <div className="text-xs text-[var(--text-secondary)]">Qty: {item.quantity}</div>
                  </div>
                  <div className="font-bold text-sm text-[var(--accent-cyan)]">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-[var(--card-border)] pt-4 space-y-2 mb-6">
              <div className="flex justify-between text-[var(--text-secondary)]">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[var(--text-secondary)]">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="flex justify-between text-[var(--text-primary)] text-xl font-bold pt-2">
                <span>Total</span>
                <span className="text-[var(--accent-cyan)]">${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <button 
              form="checkout-form"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-[var(--accent-cyan)] to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : (
                <>
                  Pay Securely <Shield size={18} />
                </>
              )}
            </button>
            <p className="text-center text-[var(--text-secondary)] text-xs mt-4 flex items-center justify-center gap-1">
              <Shield size={12} /> SSL Encrypted Transaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;