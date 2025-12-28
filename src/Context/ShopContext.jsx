import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  // Initialize cart with product IDs set to 0
  const getDefaultCart = () => {
    const cart = {};
    all_product.forEach((product) => {
      cart[product.id] = 0;
    });
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Add 1 item to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Remove 1 item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  // Total number of items in cart
  const getTotalItems = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  // Subtotal amount
  const getSubtotal = () => {
    let subtotal = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) subtotal += itemInfo.new_price * cartItems[item];
      }
    }
    return subtotal;
  };

  // Shipping fee logic
  const getShippingFee = () => 0; // Free shipping

  // Total amount (subtotal + shipping)
  const getTotalCartAmount = () => {
    return getSubtotal() + getShippingFee();
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalItems,
    getSubtotal,
    getShippingFee,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
 