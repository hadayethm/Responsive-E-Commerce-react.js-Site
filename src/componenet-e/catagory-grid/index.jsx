import React from "react";



const categories = [
  { id: 1, title: 'NEW ARRIVALS', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600' },
  { id: 2, title: 'MENS', img: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=600' },
  { id: 3, title: 'WOMENS', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600' },
  { id: 4, title: 'BESTSELLERS', img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600' },
];

function PremiumGrid () {
  return (
    <div className="w-full bg-[#E5E2D8] md:py-9 md:px-4 hidden md:block ">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 h-full">
          {categories.map((item) => (
            <div 
              key={item.id} 
              className="group relative flex-1 h-[600px] min-w-[280px] overflow-hidden rounded-[30px] cursor-pointer transition-all duration-500 ease-in-out lg:hover:flex-[1.2]"
            >
              {/* Image with high-performance transition */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20 opacity-100 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Floating Button centered exactly like the screenshot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative overflow-hidden rounded-full border border-white/60 bg-white/5 backdrop-blur-md px-8 py-3 transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                  <span className="relative z-10 text-[11px] font-bold tracking-[0.25em] text-white group-hover:text-black transition-colors duration-300">
                    {item.title}
                  </span>
                </div>
              </div>

              {/* Active Slide "Edge Light" Effect (Extra Property) */}
              <div className="absolute inset-0 border-[1px] border-white/0 group-hover:border-white/20 rounded-[50px] transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumGrid;