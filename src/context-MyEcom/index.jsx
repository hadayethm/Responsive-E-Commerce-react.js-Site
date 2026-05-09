/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useMemo } from 'react';
import ALL_PRODUCTS from '../product'; 

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('my_ecom_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Calculate total items (Memoized for performance)
  const totalItems = useMemo(() => 
    cart.reduce((acc, item) => acc + item.quantity, 0), 
  [cart]);

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem('my_ecom_cart', JSON.stringify(cart));
  }, [cart]);

  // 1. Add To Cart (Fixed mutation)
  const addToCart = (product, quantity, selectedSize) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.size === selectedSize
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { ...product, quantity, size: selectedSize }];
    });
  };

  // 2. Remove From Cart
  const removeFromCart = (productId, size) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === productId && item.size === size))
    );
  };

  // 3. Update Quantity
  const updateQuantity = (productId, size, change) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId && item.size === size) {
          return { ...item, quantity: Math.max(1, item.quantity + change) };
        }
        return item;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, updateQuantity, totalItems, ALL_PRODUCTS }}
    >
      {children}
    </CartContext.Provider>
  );
};