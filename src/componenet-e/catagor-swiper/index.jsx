
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import ProductDetailPage from '../product-detail';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import new_img from './img/new.webp'
import men_img from './img/men.webp'
import woman_img from './img/woman.webp'
import sale_img from './img/sale.webp'

const slides = [
  {
    id: 1,
    title: 'NEW',
    image: new_img, // Olive/Tan shoes
    linkText: 'EXPLORE NOW',
  },
  {
    id: 2,
    title: 'MEN',
    image:men_img, // Minimalist male fashion
    linkText: 'SHOP COLLECTION',
  },
  {
    id: 3,
    title: 'WOMEN',
    image: woman_img, // Minimalist female fashion
    linkText: 'DISCOVER MORE',
  },
   {
    id: 4,
    title: 'SALE',
    image: sale_img, // Minimalist female fashion
    linkText: 'DISCOVER MORE',
  },
];

 export default function FashionSwiperMd() {
  return (
    <div className="w-full bg-[#F3F2EE] py-8 px-1 block md:hidden">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={1.1} // Show peek of next slide
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          1024: { slidesPerView: 2.2, spaceBetween: 25 },
        }}
        className="max-w-6xl !pb-9"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div
                className={`relative h-[550px] w-full rounded-[30px] overflow-hidden transition-all duration-1000 ease-out
                ${isActive ? 'scale-100 shadow-2xl' : 'scale-90 opacity-60'}
              `}
              >
                {/* Image Overlay/Darkener */}
                <div className="absolute inset-0 bg-black/5 z-10" />
                
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[2000ms]"
                  style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
                />

                {/* Content Container */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                  <div className={`transition-all duration-700 delay-300 transform 
                    ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  >
                    <Link to={`shop/${slide.title.toLowerCase()}`} className="px-10 py-3 border-2 border-white rounded-full text-white font-bold tracking-[0.2em] bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-300">
                      {slide.title}
                    </Link>
                    
                    {/* Extra active property: Subtitle appearing below */}
                    <p className="mt-4 text-white/90 text-sm font-medium tracking-widest opacity-0 animate-pulse active-subtitle">
                      {slide.linkText}
                    </p>
                  </div>
                </div>

                {/* Bottom decorative bar (only visible when active) */}
                <div className={`absolute bottom-0 left-0 h-1 bg-white transition-all duration-[4000ms] ease-linear
                  ${isActive ? 'w-full' : 'w-0'}`} 
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #7E836D !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </div>
  );
}