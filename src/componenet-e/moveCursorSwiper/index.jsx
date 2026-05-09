import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Img_1 from './img/p-1.webp'
import Img_2 from './img/p-2.webp'
import Img_3 from './img/p-3.webp'
import NewArrivalsHeader from "../newarielHeader";

const shoes = [
  { 
    id: 1, 
    name: "Varsity Cruiser", 
    desc: "Crimson Red (White Sole)", 
    price: "$125",
    url: Img_1
  },
  { 
    id: 2, 
    name: "Varsity Cruiser", 
    desc: "Light Burnt Olive (Light Gum Sole)", 
    price: "$115",
    url: Img_2
  },
  { 
    id: 3, 
    name: "Varsity Cruiser", 
    desc: "Forest Walker (Gum Sole)", 
    price: "$130",
    url: Img_3
  },
];

export default function MobileFriendlySwiper() {
  const [index, setIndex] = useState(1);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, side: 'right' });
  const [isHovering, setIsHovering] = useState(false);

  const nextStep = () => setIndex((prev) => (prev === shoes.length - 1 ? 0 : prev + 1));
  const prevStep = () => setIndex((prev) => (prev === 0 ? shoes.length - 1 : prev - 1));

  // Handle Swipe logic for mobile
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextStep();
    } else if (info.offset.x > swipeThreshold) {
      prevStep();
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setCursorPos({ 
      x, 
      y: e.clientY - rect.top, 
      side: x < rect.width / 2 ? 'left' : 'right' 
    });
  };

  return (
    
    
    <div className=" bg-[#F2F0EB] relative flex flex-col items-center pt-16 md:pt-16 pb-4 overflow-hidden">
      {/* 1. Background Grid */}
      <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 0)`, backgroundSize: '30px 30px' }} />

      {/* 2. Top Header */}
    <NewArrivalsHeader/>

      {/* 3. The Swiper Stage */}
      <motion.div 
        className="relative w-full max-w-6xl h-[350px] md:h-[400px] flex items-center justify-center sm:cursor-none touch-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        // Dragging logic
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        onClick={() => {
          // Only click-to-navigate on non-touch devices (desktop)
          if (window.innerWidth >= 640) {
            cursorPos.side === 'left' ? prevStep() : nextStep();
          }
        }}
      >
        <AnimatePresence mode="popLayout">
          {shoes.map((shoe, i) => {
            const isCenter = i === index;
            const isLeft = i === (index - 1 + shoes.length) % shoes.length;
            const isRight = i === (index + 1) % shoes.length;

            if (!isCenter && !isLeft && !isRight) return null;

            return (
              <motion.div
                key={shoe.id}
                initial={false}
                animate={{
                  x: isCenter ? 0 : isLeft ? -300 : 300,
                  scale: isCenter ? 1 : 0.5,
                  opacity: isCenter ? 1 : 0.2,
                  zIndex: isCenter ? 20 : 10,
                  rotate: isCenter ? 0 : isLeft ? -10 : 10 // Subtle tilt for neighbors
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="absolute pointer-events-none"
              >
                <img 
                  src={shoe.url} 
                  alt={shoe.name} 
                  className="w-[300px] md:w-[500px] drop-shadow-2xl object-contain" 
                />
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Custom Desktop Cursor (Hidden on mobile) */}
        <div
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, transform: "translate(-50%, -50%)" }}
          className={`hidden sm:flex fixed pointer-events-none z-50 rounded-full h-30 w-30 border border-black/20 items-center justify-center text-[10px] tracking-widest uppercase font-bold bg-white/30 backdrop-blur-md  ${isHovering ? 'opacity-100' : 'opacity-0'}`}
        >
          {cursorPos.side == "left" ? <ArrowLeft size={34}/> : <ArrowRight size={34}/>}
        </div>
      </motion.div>

      {/* 4. Product Info Section */}
      <div className="relative z-10 text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-2 md:mb-4">{shoes[index].name}</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 mb-6 md:mb-10 text-xs md:text-sm font-medium">
              <span className="uppercase tracking-wider">{shoes[index].desc}</span>
              <span className="hidden md:inline text-gray-400">—</span>
              <span className="font-bold">{shoes[index].price}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  
  );
}

