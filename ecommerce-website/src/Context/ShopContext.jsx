// src/Context/ShopContext.js
import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';
import '../Context/ShopContext.css';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...existingItem, quantity: existingItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateCartItem = (id, quantity) => {
    setCartItems(cartItems.map(cartItem => 
      cartItem.id === id ? { ...cartItem, quantity } : cartItem
    ));
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== id));
  };

  const contextValue = { all_product, cartItems, addToCart, updateCartItem, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
