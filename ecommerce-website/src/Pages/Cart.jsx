// src/components/Cart.js
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './Cart.css'; 

const Cart = () => {
  const { cartItems, updateCartItem, removeFromCart } = useContext(ShopContext);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return; 
    updateCartItem(id, quantity);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.new_price * item.quantity, 0);

  return (
    <div className="cart-wrapper">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.new_price.toFixed(2)}</p>
                <div className="quantity-container">
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => handleRemoveItem(item.id)} className="remove-item-button">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
