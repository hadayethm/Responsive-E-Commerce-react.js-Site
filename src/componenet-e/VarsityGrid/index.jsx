import React from 'react';

// Assuming your image imports remain the same
import Img_1 from './img/img-1.webp'
import Img_2 from './img/img-2.webp'
import Img_3 from './img/img-3.webp'

const CategoryCard = ({ image, title, subtitle, links }) => (
  <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] group cursor-pointer shadow-sm">
    {/* Image Container */}
    <div className="aspect-[4/5] w-full bg-gray-200">
      <img 
        src={image} 
        alt={title} 
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Overlay Gradient (Better legibility than a flat color) */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent p-6 flex flex-col justify-center items-center text-center">
      
      {/* Text: Scaled for tablet/mobile responsiveness */}
      <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
        {title}
        {subtitle && <span className="block">{subtitle}</span>}
      </h2>
      
      {/* Buttons Container: Improved for tablet spacing */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-wrap gap-2 px-4 justify-center">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="inline-flex items-center justify-center min-w-[100px] md:min-w-[120px] px-4 py-2.5 rounded-full border border-white/40 bg-white text-black text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default function VarsityGrid() {
  const categories = [
    {
      title: "Varsity",
      image: Img_1,
      links: [{ label: "Shop Men", href: "/shop/men" }, { label: "Shop Women", href: "/shop/women" }]
    },
    {
      title: "Varsity",
      subtitle: "Cruiser",
      image: Img_2,
      links: [{ label: "Shop Men", href: "/shop/men" }, { label: "Shop Women", href: "/shop/women" }]
    },
    {
      title: "Varsity Strap",
      image: Img_3,
      links: [{ label: "Shop Women", href: "/shop/women" }]
    }
  ];

  return (
    <section className="bg-[#F3F2EE] px-4 py-12 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Responsive Grid: 
            1 col on mobile, 
            2 cols on small tablets (sm), 
            3 cols on laptops (lg) 
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <CategoryCard key={index} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}