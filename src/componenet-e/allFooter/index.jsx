import React from 'react';
// Note: Use Lucide-react or similar for icons
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

function EndFooter(){
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1a1a1a] py-4 px-2">
        <hr  className='py-3'/>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-start gap-x-8 gap-y-4 text-[13px] font-medium tracking-wide text-white">
        
        {/* Copyright Section */}
        <span className="whitespace-nowrap">
          © {currentYear} Allbirds, Inc. All Rights Reserved
        </span>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <a href="#" className="hover:underline underline-offset-4 decoration-1">
            Refund policy
          </a>
          <a href="#" className="hover:underline underline-offset-4 decoration-1">
            Privacy policy
          </a>
          <a href="#" className="hover:underline underline-offset-4 decoration-1 ">
            Terms of service
          </a>
          <a href="#" className="hover:underline underline-offset-4 decoration-1">
            Do Not Sell My Personal Information
          </a>
          <a href="#" className="hover:underline underline-offset-4 decoration-1">
            California Transparency Act
          </a>
        </nav>
        
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-6">
    <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/90">
      {title}
    </h3>
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-sm font-medium text-white hover:underline underline-offset-4 decoration-1">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white py-16 px-6 md:px-12 pb-1">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Newsletter Section */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-mono text-[0.75rem] uppercase tracking-[0.2em]">
              Subscribe to our emails
            </h3>
            <div className="relative group max-w-md">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full rounded-full bg-white px-6 py-4 text-black outline-none placeholder:text-gray-500 text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 font-bold text-[0.7rem] uppercase tracking-widest text-black px-4 py-2 hover:opacity-70 transition-opacity">
                Sign Up
              </button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <FooterColumn title="Help" links={["Live Chat", "Call Us", "Text Us", "help@allbirds.com", "FAQ/Contact Us", "Returns/Exchanges"]} />
            <FooterColumn title="Shop" links={["Men's Shoes", "Women's Shoes", "Men's Apparel", "Women's Apparel", "Socks", "Gift Cards"]} />
            <FooterColumn title="Company" links={["Our Stores", "Our Story", "Our Materials", "Sustainability", "Investors", "Shoe Care"]} />
          </div>
        </div>

        {/* Social Section */}
        <div className="pt-12 border-t border-white/10">
          <h3 className="font-mono text-[0.75rem] uppercase tracking-[0.2em] mb-8">
            Follow the flock
          </h3>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <EndFooter/>
    </footer>
  );
}