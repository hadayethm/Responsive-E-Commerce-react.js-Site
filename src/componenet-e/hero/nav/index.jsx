import React, { useContext, useEffect, useState } from "react";
import { Search, User, CircleHelp, ShoppingBag, Menu, X } from "lucide-react";
import { CartContext } from "../../../context-MyEcom";
import { Link } from "react-router-dom";
// import new_img from "./img/new.webp";
import men_img from "./img/men.webp";
import woman_img from "./img/woman.webp";
import sale_img from "./img/sale.webp";

// --- Data ---
const MENU_ITEMS = [
  {
    id: 1,
    name: "MEN",
    href: "/shop/men",
    content: {
      heading: "Mens Collection",
      desc: "Sustainable styles for every step of his journey.",
      img: men_img,
    },
  },
  {
    id: 2,
    name: "WOMEN",
    href: "/shop/women",
    content: {
      heading: "Womens Collection",
      desc: "Comfort and style, engineered by nature.",
      img: woman_img,
    },
  },
  {
    id: 3,
    name: "SALE",
    href: "/shop/sale",
    content: {
      heading: "Limited Time Offers",
      desc: "Grab your favorites before they fly away.",
      img: sale_img,
    },
  },
];

const SECONDARY_LINKS = [
  { name: "About", href: "#" },
  { name: "ReRun", href: "#" },
];

export default function Navbar() {
  // --- State ---
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [activeTab, setActiveTab] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const {totalItems} = useContext(CartContext);

  // --- Scroll Logic ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos < lastScrollPos) {
        setShowNav(true);
      } else if (currentScrollPos > lastScrollPos && currentScrollPos > 50) {
        setShowNav(false);
        // Also close mobile menu if scrolling down
        setIsMobileMenuOpen(false); 
      }
      setLastScrollPos(currentScrollPos);
      setScrollPosition(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  // --- Handlers ---
  const handleMouseEnter = (itemId) => {
    // Only work on desktop
    if (window.innerWidth >= 1024) { 
        const selectedItem = MENU_ITEMS.find((item) => item.id === itemId);
        if (selectedItem) setActiveTab(selectedItem);
    }
  };

  const handleMouseLeave = () => {
    setActiveTab(null);
  };

  return (
    <>
      {/* Spacer */}
      

      <nav
        onMouseLeave={handleMouseLeave}
        className={`fixed left-1/2 transform -translate-x-1/2 w-[94%] max-w-[1440px] z-50 transition-all duration-300 ease-in-out ${
          showNav ? "top-[30px]" : "-top-[40px]"
        }`}
      >
        {/* Added overflow-visible so the mobile menu can hang out of the bottom */}
        <div className="bg-white rounded-[14px] shadow-sm relative overflow-visible">
          
          {/* --- Main Bar Content --- */}
          <div className="flex items-center justify-between px-5 py-2 relative z-20 bg-white rounded-[14px]">
            
            {/* 1. Left: Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold tracking-tight italic font-serif text-gray-900 select-none">
                allbirds
              </a>
            </div>

            {/* 2. Center: Desktop Links */}
            <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2 h-full">
              {MENU_ITEMS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onMouseEnter={() => handleMouseEnter(link.id)}
                  className={`text-[12px] font-bold tracking-wider transition-colors uppercase h-full flex items-center ${
                    activeTab?.id === link.id ? "text-gray-600 underline underline-offset-4" : "text-gray-900 hover:text-gray-600"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* 3. Right: Icons */}
            <div className="flex items-center gap-4">
               {/* Desktop Secondary Links */}
               <div className="hidden xl:flex items-center gap-3 text-sm font-semibold text-gray-900">
                {SECONDARY_LINKS.map((link) => (
                  <a key={link.name} href={link.href} className="hover:text-gray-600 transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3 text-gray-900">
                <button className="hover:text-gray-600"><Search strokeWidth={2} size={18} /></button>
                <button className="hidden md:block hover:text-gray-600"><User strokeWidth={2} size={18} /></button>
                <button className="hidden md:block hover:text-gray-600"><CircleHelp strokeWidth={2} size={18} /></button>
                <button className="relative hover:text-gray-600">
                  <Link to="/cart">
                  <ShoppingBag strokeWidth={2} size={18} />
                  </Link>
                  <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-[10px] font-bold h-3 w-3 flex items-center justify-center rounded-full">{totalItems}</span>
                </button>
                
                {/* Mobile Menu Toggle */}
                <button
                  className="lg:hidden ml-2 text-gray-900"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
                </button>
              </div>
            </div>
          </div>

          {/* --- MOBILE MENU (Absolute Overlay) --- */}
          <div
            className={`absolute top-full left-0 w-full bg-white shadow-lg rounded-b-[14px] overflow-hidden transition-all duration-300 ease-in-out z-10 lg:hidden ${
              isMobileMenuOpen ? "max-h-[500px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col p-6 space-y-4">
              {/* Mobile Main Links */}
              {MENU_ITEMS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-lg font-bold text-gray-900 uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="border-t border-gray-100 my-2"></div>
              
              {/* Mobile Secondary Links */}
              {SECONDARY_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex gap-4 pt-2">
                 <button className="text-sm font-medium text-gray-600 flex items-center gap-2"> <User size={16}/> Account</button>
                 <button className="text-sm font-medium text-gray-600 flex items-center gap-2"> <CircleHelp size={16}/> Help</button>
              </div>
            </div>
          </div>

          {/* --- Desktop Mega Menu (Existing) --- */}
          <div
            className={`hidden lg:block overflow-hidden transition-all duration-300 ease-in-out bg-[#F3F2EE] ${
              activeTab ? "max-h-[400px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
            }`}
          >
            {activeTab && (
              <div className="p-8 flex items-start justify-center gap-12">
                <div className="w-1/3 pt-4">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{activeTab.content.heading}</h3>
                  <p className="text-gray-600 mb-6">{activeTab.content.desc}</p>
                  <Link to={`/shop/${activeTab.name.toLowerCase()}`} className="px-6 py-2 bg-gray-900 text-white text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">Shop {activeTab.name}</Link>
                </div>
                <div className="w-1/3 h-64 rounded-lg overflow-hidden shadow-md">
                  <img src={activeTab.content.img} alt={activeTab.content.heading} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
              </div>
            )}
          </div>

        </div>
      </nav>
    </>
  );
}
