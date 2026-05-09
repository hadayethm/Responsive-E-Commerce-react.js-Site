import React from "react";
import { useNavigate } from "react-router-dom";
import new_img from "./img/new.webp";
import men_img from "./img/men.webp";
import woman_img from "./img/woman.webp";
import sale_img from "./img/sale.webp";

const categories = [
  { id: 1, title: "NEW", img: new_img },
  { id: 2, title: "MEN", img: men_img },
  { id: 3, title: "WOMEN", img: woman_img },
  { id: 4, title: "SALE", img: sale_img },
];

function PremiumGrid() {
  const navigate = useNavigate();

  function handleOnClick(tittle) {
    const path = tittle.toLowerCase().replace(/\s+/g, "-");
    navigate(`shop/${path}`);
  }

  return (
    <div className="w-full bg-[#F3F2EE] py-8 px-3 hidden md:block">
      <div className="max-w-[1440px] mx-auto">
        {/* Changed lg:flex-row to md:flex-row for earlier compression */}
        <div className="flex flex-col md:flex-row gap-4 h-full">
          {categories.map((item) => (
            <div
              key={item.id}
              // Removed min-w-[280px] so it can actually compress
              // Added flex-basis-0 to ensure all items start with equal width logic
              className="group relative flex-1 md:basis-0 h-[500px] lg:h-[500px] overflow-hidden rounded-[30px] cursor-pointer transition-all duration-500 ease-in-out md:hover:flex-[1.5]"
            >
              {/* Image Container */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/40 opacity-100 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Floating Button */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <button
                  onClick={() => handleOnClick(item.title)}
                  className=" cursor-pointer relative overflow-hidden rounded-full border border-white/60 bg-white/10 backdrop-blur-md px-4 py-3 lg:px-8 transition-all duration-300 group-hover:bg-white group-hover:scale-105 w-full max-w-[200px] flex justify-center"
                >
                  <span className="relative z-10 text-[10px] lg:text-[11px] font-bold tracking-[0.2em] text-white group-hover:text-black transition-colors duration-300 text-center">
                    {item.title}
                  </span>
                </button>
              </div>

              {/* Edge Light */}
              <div className="absolute inset-0 border-[1px] border-white/0 group-hover:border-white/20 rounded-[30px] transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PremiumGrid;
