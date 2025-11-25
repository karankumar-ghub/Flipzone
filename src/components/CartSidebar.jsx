import React, { useEffect, useRef } from 'react';
import { X, ShoppingCart, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, removeFromCart, updateQuantity } from '../store/cartSlice';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const CartSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // 1. Get Cart state from Redux
  const { items: cartItems, isOpen } = useSelector((state) => state.cart);
  
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // 2. GSAP Animation Logic
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        // Open: Fade overlay in, Slide sidebar to 0%
        gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: 'block' });
        gsap.to(sidebarRef.current, { x: '0%', duration: 0.4, ease: 'power3.out' });
      } else {
        // Close: Fade overlay out, Slide sidebar to 100% (off-screen)
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, display: 'none' });
        gsap.to(sidebarRef.current, { x: '100%', duration: 0.4, ease: 'power3.in' });
      }
    });
    return () => ctx.revert();
  }, [isOpen]);

  const handleCheckout = () => {
    dispatch(toggleCart());
    navigate('/checkout');
  }

  return (
    <div className="relative z-[60]">
      {/* Overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm hidden opacity-0" 
        onClick={() => dispatch(toggleCart())}
      />
      
      {/* Sidebar Panel */}
      <div 
        ref={sidebarRef}
        className="fixed inset-y-0 right-0 w-screen max-w-md bg-[var(--bg-secondary)] border-l border-[var(--card-border)] shadow-2xl flex flex-col h-full transform translate-x-full"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--card-border)]">
          <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-[var(--accent-cyan)]">Cart</span> 
            <span className="text-[var(--text-secondary)] text-sm font-normal">({cartItems.length} items)</span>
          </h2>
          <button 
            onClick={() => dispatch(toggleCart())}
            className="p-2 hover:bg-[var(--card-bg)] rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-[var(--card-bg)] rounded-full flex items-center justify-center text-[var(--text-secondary)]">
                <ShoppingCart size={32} />
              </div>
              <p className="text-[var(--text-secondary)] font-medium">Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.cartId} className="flex gap-4 bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--card-border)]">
                <img src={item.image} alt={item.name} className="w-20 h-24 rounded-lg object-cover bg-[var(--bg-primary)]" />
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] text-sm leading-tight mb-1">{item.name}</h3>
                    <p className="text-xs text-[var(--text-secondary)]">{item.category}</p>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="flex items-center gap-3 bg-[var(--bg-primary)] rounded-lg px-2 py-1 border border-[var(--card-border)]">
                      <button onClick={() => dispatch(updateQuantity({ cartId: item.cartId, quantity: item.quantity - 1 }))} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"><Minus size={14} /></button>
                      <span className="text-sm font-bold w-4 text-center text-[var(--text-primary)]">{item.quantity}</span>
                      <button onClick={() => dispatch(updateQuantity({ cartId: item.cartId, quantity: item.quantity + 1 }))} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"><Plus size={14} /></button>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[var(--accent-cyan)]">${(item.price * item.quantity).toFixed(2)}</div>
                      <button onClick={() => dispatch(removeFromCart(item.cartId))} className="text-[10px] text-red-400/70 hover:text-red-400 mt-1 flex items-center justify-end gap-1">
                        <Trash2 size={10} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-[var(--bg-secondary)] border-t border-[var(--card-border)] space-y-4">
            <div className="flex justify-between text-[var(--text-primary)] text-lg font-bold">
              <span>Total</span>
              <span className="text-[var(--accent-cyan)]">${subtotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full py-4 bg-gradient-to-r from-[var(--accent-cyan)] to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Checkout Now <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;