import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => { /* ... */ };
  const removeFromCart = (id) => { /* ... */ };
  const updateQuantity = (id, quantity) => { /* ... */ };
  const clearCart = () => setCart([]);
  const getTotal = () => cart.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};