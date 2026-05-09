import  { useState, useMemo, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Eye, X, Filter, ChevronDown, Check } from 'lucide-react';
import {Link,useParams} from 'react-router-dom'


import { CartContext } from '../../../context-MyEcom';
import Navbar from '../../hero/nav/index';

const ShoeStore = () => {
 
  

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  // Filter States
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [maxPrice, setMaxPrice] = useState(300);

  const {ALL_PRODUCTS} = useContext(CartContext);
  const {category} = useParams();
 
  


  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    if (category === "sale") return product.onSale === true;
    if (category === "new") return product.onNew === true;

    return product.category === category;
  });

    
    const SHOE_DATA = filteredProducts

  

  const availableSizes = [7, 8, 9, 10, 11, 12, 13];
  
  // Adjusted colors to match the screenshot swatch style
  const availableColors = [
    { name: 'Black', class: 'bg-neutral-900' },
    { name: 'White', class: 'bg-white border-gray-300' },
    { name: 'Red', class: 'bg-red-900' },
    { name: 'Blue', class: 'bg-blue-900' },
    { name: 'Grey', class: 'bg-gray-500' },
  ];

  // Combined Filtering & Sorting Logic
  const processedProducts = useMemo(() => {
    let result = SHOE_DATA.filter((product) => {
      const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
      const priceMatch = product.price <= maxPrice;
      const sizeMatch = selectedSizes.length === 0 || product.sizes.some(s => selectedSizes.includes(s));
      return colorMatch && priceMatch && sizeMatch;
    });

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    // (Mocking newest sort by ID for this example)
    if (sortBy === 'newest') result.sort((a, b) => b.id - a.id);

    return result;
  }, [selectedColors, maxPrice, selectedSizes, sortBy]);

  const toggleFilter = (item, state, setState) => {
    setState(state.includes(item) ? state.filter(i => i !== item) : [...state, item]);
  };

  const FilterContent = () => (
    <div className="space-y-8 pr-4 mt-10">
      <section>
        <div>
            <h1 className="text-2xl font-bold uppercase tracking-tight text-neutral-800  lg:py-4">{category} Shoes</h1>
          </div>


        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Size</h3>
        <div className="grid grid-cols-3 gap-2">
          {availableSizes.map(size => (
            <button 
              key={size} 
              onClick={() => toggleFilter(size, selectedSizes, setSelectedSizes)} 
              className={`border py-2.5 text-xs font-semibold rounded transition-all duration-200 
                ${selectedSizes.includes(size) 
                  ? 'bg-neutral-900 text-white border-neutral-900' 
                  : 'border-gray-200 text-gray-600 hover:border-gray-400'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">Max Price</h3>
            <span className="text-xs font-bold text-gray-900">${maxPrice}</span>
        </div>
        <input 
          type="range" min="50" max="300" step="10" 
          value={maxPrice} 
          onChange={(e) => setMaxPrice(parseInt(e.target.value))} 
          className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-neutral-900"
        />
      </section>

      <section>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Color</h3>
        <div className="flex flex-wrap gap-3">
          {availableColors.map(color => (
            <button 
              key={color.name} 
              onClick={() => toggleFilter(color.name, selectedColors, setSelectedColors)} 
              className={`w-8 h-8 rounded-full border transition-all duration-200 flex items-center justify-center
                ${color.class} 
                ${selectedColors.includes(color.name) ? 'ring-2 ring-offset-2 ring-neutral-900 border-transparent' : 'border-transparent hover:scale-110'}`}
            >
                 {selectedColors.includes(color.name) && <Check size={12} className={color.name === 'White' ? 'text-black' : 'text-white'} />}
            </button>
          ))}
        </div>
      </section>

      <button 
        onClick={() => {setSelectedColors([]); setSelectedSizes([]); setMaxPrice(300)}} 
        className="w-full py-3 text-xs font-bold uppercase tracking-wider text-gray-500 underline decoration-gray-300 hover:text-black hover:decoration-black transition-all"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    // THEME: Warm beige background matching screenshot
    
    <div className="flex min-h-screen bg-[#F3F0EB] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
    
       <Navbar/>
    
      {/* LEFT SIDEBAR (Desktop) */}
      <aside className="hidden lg:block w-72 sticky top-0 h-screen transition duration-800 ease-in-out px-8 py-10 ">
        
        <FilterContent />
      </aside>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div 
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 w-80 h-full bg-white p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold uppercase">Filters</h2>
                <button onClick={() => setIsMobileMenuOpen(false)}><X size={24}/></button>
              </div>
              <FilterContent />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 pt-23  lg:p-10 lg:pl-0">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          
          
          <div className="flex items-center gap-3">
            <div className="relative group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-transparent px-5 py-2.5 pr-10 rounded-full text-xs font-bold uppercase tracking-widest cursor-pointer hover:shadow-md transition-shadow focus:outline-none"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low-High</option>
                <option value="price-high">Price: High-Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"/>
            </div>

            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2.5 bg-white rounded-full shadow-sm">
              <Filter size={18} />
            </button>
          </div>
        </header>

        {/* GRID LAYOUT - Matches 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:px-3">
          {processedProducts && processedProducts.length > 0 ? processedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          )) : <h2 className='text-3xl text-center text-gray-600 w-full'>Product Not Founded</h2>}
        </div>
      </main>
    </div>
  );
};

// --- PRODUCT CARD COMPONENT ---
const ProductCard = ({ product }) => {
  return (
    
    <div className="group flex flex-col bg-white rounded-[2rem] p-4 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-200/50">
      
      {/* IMAGE CONTAINER WITH FRAMER MOTION OVERLAY */}
      <motion.div 
        className="relative aspect-[4/3] rounded-[1.5rem] bg-[#f0f0f0] overflow-hidden mb-5 isolate "
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-20 bg-[#E8E6E1] text-[#555] text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
            {product.badge}
          </span>
        )}

        {/* Product Image Placeholder (Using CSS shapes to mimic shoe) */}
        <div className="w-full h-full flex items-center justify-center p-6">
           {/* This simulates the shoe image */}
           <img className='m-auto w-full h-full object-cover' src={product.images[0]} alt="" />
        </div>

        {/* HOVER OVERLAY WITH BUTTONS */}
        <motion.div 
            
            variants={{
                rest: { opacity: 0, backdropFilter: "blur(0px)" },
                hover: { opacity: 1, backdropFilter: "blur(2px)" }
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-white/20 z-30 flex flex-col items-center justify-center gap-3"
        >
            
            <Link to={`/product/${product.id}`}>
            <motion.button
                variants={{
                    rest: { y: 20, opacity: 0 },
                    hover: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-black/80 cursor-pointer text-white font-bold text-xs uppercase tracking-wider py-3 px-8 rounded-full shadow-lg hover:bg-black transition-colors flex items-center gap-2"
            > 
                <Eye size={14} /> Details
               
            </motion.button> </Link>
        </motion.div>
      </motion.div>

      {/* TEXT CONTENT */}
      <div className="px-2 pb-2">
        <h3 className="font-bold text-base text-neutral-900 uppercase tracking-tight mb-1">{product.name}</h3>
        <div className='flex justify-between'>
 <p className="text-sm text-gray-500 mb-4">{product.brand}</p>
 <Link to={`/product/${product.id}`}>
            <motion.button
                variants={{
                    rest: { y: 20, opacity: 0 },
                    hover: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-black/80 cursor-pointer text-white font-bold text-xs uppercase tracking-wider py-1 px-4 rounded-full shadow-lg hover:bg-black transition-colors flex items-center gap-2"
            > 
                <Eye size={14} /> Details
               
            </motion.button> </Link>
        </div>
       
        
        <div className="flex items-end justify-between border-t border-gray-100 pt-4">
            {/* Color Swatches (Visual only for card) */}
            <div className="flex -space-x-1">
                 {[1,2,3].map((_, i) => (
                     <div key={i} className={`w-5 h-5 rounded-full border-2 border-white ${i===0 ? 'bg-neutral-800' : i===1 ? 'bg-gray-400' : 'bg-[#d6d3cd]'}`}></div>
                 ))}
            </div>

            {/* Price */}
            <div className="text-right">
                {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through mr-2 font-medium">${product.originalPrice}</span>
                )}
                <span className={`font-bold ${product.originalPrice ? 'text-red-700' : 'text-neutral-900'}`}>
                    ${product.price}
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeStore;

