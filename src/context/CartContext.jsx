import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage if available
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('neon-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('neon-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, cartId: Date.now(), quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, newQty) => {
    setCart(prev => prev.map(item => item.cartId === cartId ? { ...item, quantity: newQty } : item));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      isCartOpen, 
      setIsCartOpen,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};