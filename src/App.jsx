import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ShoeStore from "./componenet-e/pages/ProductListing";
import ProductDetailPage from "./componenet-e/product-detail";
import CartPage from "./componenet-e/pages/cart";
import { CartProvider } from "./context-MyEcom";
import Home from "./componenet-e/pages/home/index";


export default function App() {
  return (
    
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* Use URL parameters to distinguish Men, Women, and Sale */}
            <Route path="/shop/:category" element={<ShoeStore />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </CartProvider>
 
  );
}
