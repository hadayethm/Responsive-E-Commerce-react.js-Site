/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Trash2,
  Minus,
  Plus,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  ChevronLeft,
} from "lucide-react";
import { CartContext } from "../../../context-MyEcom/index";

const CartPage = () => {
  // Use cart directly. Do NOT use useState(cart).
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  // --- CALCULATIONS ---
  // Fix: Calculate (price * quantity) dynamically. Don't rely on a stored "totalPrice".
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  const shippingThreshold = 250;
  const shippingCost = subtotal > shippingThreshold || subtotal === 0 ? 0 : 20;
  const total = subtotal + shippingCost;
  const progressPercent = Math.min(100, (subtotal / shippingThreshold) * 100);

  return (
    <div className="min-h-screen bg-[#F3F0EB] font-sans text-neutral-900  pb-20">
      {/* HEADER */}



      <nav className="flex items-center justify-between px-6 py-8 lg:px-12">
        <div className="flex items-center gap-4">
          
          <h1 className="text-2xl font-black italic tracking-tighter">
            MY BAG
          </h1>
        </div>
        <span className="text-sm font-bold text-neutral-400">
          {cart.length} ITEMS
        </span>
      </nav>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT: CART ITEMS */}
        <div className="lg:col-span-8 space-y-6">
          {/* FREE SHIPPING TRACKER */}
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-neutral-100">
            <div className="flex justify-between items-end mb-3">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                {subtotal >= shippingThreshold
                  ? "🎉 You've earned Free Shipping!"
                  : `Add $${(shippingThreshold - subtotal).toFixed(2)} more for free shipping`}
              </p>
              <span className="text-xs font-black">
                {Math.round(progressPercent)}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                className="h-full bg-black"
              />
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            {cart.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <ShoppingBag
                  size={48}
                  className="mx-auto mb-4 text-neutral-300"
                />
                <p className="font-bold text-neutral-400">
                  Your bag is currently empty.
                </p>
              </motion.div>
            ) : (
              // Use cart directly here
              cart.map((item) => (
                <motion.div
                  // FIX: Ensure key is unique using ID + Size
                  key={`${item.id}-${item.size}`} 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="bg-white p-6 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 shadow-sm group"
                >
                  {/* Image Placeholder */}
                  <div
                    className={`w-32 h-32 rounded-[1.5rem] relative flex-shrink-0 flex items-center justify-center overflow-hidden`}
                  >
                    <img
                      className="w-full h-full object-cover m-auto"
                      // FIX: Ensure 'images' exists in your product object, otherwise use placeholder
                      src={item.image || item.images?.[0]} 
                      alt=""
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="font-bold text-lg uppercase tracking-tight">
                          {item.name}
                        </h3>
                        <p className="text-xs font-bold text-neutral-400 uppercase">
                          {item.brand} • {item.color}
                        </p>
                      </div>
                      {/* FIX: Calculate individual total price here */}
                      <p className="font-black text-xl">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Quantity UI */}
                        <div className="flex items-center bg-[#F3F0EB] rounded-full px-2 py-1">
                          <button
                            // FIX: Use context function
                            onClick={() => updateQuantity(item.id, item.size, -1)}
                            className="p-2 hover:bg-white rounded-full transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-bold text-sm">
                            {item.quantity}
                          </span>
                          <button
                            // FIX: Use context function
                            onClick={() => updateQuantity(item.id, item.size, 1)}
                            className="p-2 hover:bg-white rounded-full transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-xs font-bold text-neutral-400">
                          {/* FIX: Use item.size (variable set in context), not selectedSize */}
                          Size: {item.size}
                        </span>
                      </div>

                      <button
                        // FIX: Remove works now because we are using global state
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="p-3 text-neutral-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="lg:col-span-4">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-neutral-200/50 sticky top-10">
            <h2 className="text-xl font-black uppercase tracking-tighter mb-8">
              Summary
            </h2>

            <div className="space-y-4 text-sm font-medium">
              <div className="flex justify-between">
                <span className="text-neutral-400">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Estimated Shipping</span>
                <span
                  className={
                    shippingCost === 0 ? "text-green-600 font-bold" : ""
                  }
                >
                  {shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="h-px bg-neutral-100 my-4" />
              <div className="flex justify-between text-lg font-black italic tracking-tighter">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-8 bg-black text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-neutral-800 transition-all group active:scale-95">
              Checkout Now
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <Link to={'/shop/sale'} className="w-full mt-8 bg-black text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-neutral-800 transition-all group active:scale-95">
              Continue Shoping
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            

            <div className="mt-8 pt-8 border-t border-neutral-50 space-y-4">
              <div className="flex items-center gap-3 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                <ShieldCheck size={16} className="text-neutral-900" />
                Secure Checkout Guaranteed
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;



