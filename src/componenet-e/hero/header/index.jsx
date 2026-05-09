/* eslint-disable no-unused-vars */

import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
// Ensure these paths are correct in your project
import MD_img from "../img/md-img.gif";
import LG_img from "../img/26Q1_Varsity_Site_Homepage_Hero_Womens_Desktop_16x9_01 (1).jpg";
import Navbar from "../nav/index";
import { Link } from "react-router-dom";

export default function Header() {
  // FIX 1: Initialize as null (nothing open)
  const [activeTab, setActiveTab] = useState(null);

  // We don't strictly need curId if activeTab holds the data,
  // but we can keep it if you need it for the Navbar styling.

  const NAV_ITEMS = [
    {
      id: 1,
      title: "Products",
      content: {
        heading: "Revolutionary Software",
        desc: "Our suite includes everything from AI analytics to cloud infrastructure.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      },
    },
    {
      id: 2,
      title: "Solutions",
      content: {
        heading: "Enterprise Scale",
        desc: "We help Fortune 500 companies migrate to the edge securely.",
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      },
    },
    {
      id: 3,
      title: "Pricing",
      content: {
        heading: "Transparent Plans",
        desc: "No hidden fees. Scale from $0 to $1M+ with our flexible tiers.",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      },
    },
  ];

  return (
    <>
      <header className=" bg-[#F3F2EE] relative py-2 px-3">
        {/* Pass handlers to your navbar */}

        <Navbar />

        <div className=" min-h-[300px] relative rounded-3xl overflow-hidden">
          <AnimatePresence>
            {/* FIX 4: Check if activeTab exists (is not null) before rendering */}
            {activeTab && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "50vh" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                onMouseEnter={() => handleCur(activeTab.id)} // Optional: Keep open if hovering the dropdown itself
                onMouseLeave={handleLeave} // Close if mouse leaves the dropdown
                className="absolute left-0 top-17 w-screen bg-slate-50 border-b border-slate-200 overflow-hidden z-50"
              >
                <div className="max-w-7xl mx-auto px-6 py-12 h-full flex gap-12">
                  <AnimatePresence>
                    {/* Text Content */}
                    <motion.div
                      key={`text-${activeTab.id}`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-1/2 flex flex-col justify-center"
                    >
                      <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">
                        Featured
                      </span>
                      <h2 className="text-5xl font-bold text-slate-900 mb-6">
                        {activeTab.content.heading}
                      </h2>
                      <p className="text-xl text-slate-600 mb-8 max-w-md">
                        {activeTab.content.desc}
                      </p>
                      <div className="flex gap-4">
                        <button className="text-blue-600 font-semibold hover:underline">
                          View All Features →
                        </button>
                      </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                      key={`img-${activeTab.id}`}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-1/2 h-full rounded-3xl overflow-hidden bg-slate-200 shadow-2xl"
                    >
                      <img
                        src={activeTab.content.img}
                        className="w-full h-full object-cover"
                        alt="preview"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <span className="max-md:block block md:hidden w-full h-full object-cover">
            <img
              className="block md:hidden w-full h-full object-cover"
              src={MD_img}
              alt="md-image"
            />
          </span>

          {/* for lg */}
          <div className="relative w-full min-h-0 lg:h-[480px]">
            <img
              className="hidden md:block w-full h-full object-cover"
              src={LG_img}
              alt="lg-img"
            />
          </div>

          <div className="w-full gap-3 flex justify-center absolute inset-x-1 bottom-4 lg:justify-end lg:gap-5 lg:pr-7 lg:mb-5">
            <button className="cursor-pointer group relative rounded-xl  bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:shadow-lg hover:bg-black hover:text-white active:scale-95 shadow-sm shadow-white">
              <span className="relative z-10 inline-flex items-center gap-2">
                <Link to={"/shop/men"} className="font-[sans-serif]">
                  SHOP MEN
                </Link>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </span>
            </button>

            <button className="cursor-pointer group relative rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:shadow-lg hover:bg-black hover:text-white active:scale-95 shadow-sm shadow-white">
              <span className="relative z-10 inline-flex items-center gap-2">
                <Link to={"/shop/women"} className="font-[sans-serif]">
                  SHOP WOMEN
                </Link>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
