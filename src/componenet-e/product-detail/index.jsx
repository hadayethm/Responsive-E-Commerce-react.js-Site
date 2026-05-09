import { useContext, useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Truck, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Minus, 
  Plus, 
  Check,
  ArrowLeft,
  Heart,
  ShoppingBag,
  FolderOutput
} from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../../context-MyEcom';
import SecondNavBar from '../hero/nav/index';
import { useNavigate } from 'react-router-dom';
import ValuesSection from '../valueSection';
import Footer from "../allFooter/index"

// NOTE: If you want to use your actual Context, uncomment the import below
// import { CartContext } from '../../context-MyEcom';

// --- MOCK DATA (Fallback if Context is missing for testing) ---


// --- COMPONENT: IMAGE SLIDER ---
const ImageGallery = ({ images, isNew, discount }) => {

 
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="sticky top-8 space-y-5 px-3">
      {/* Main Image Stage */}
      <div className="relative aspect-square px-3 bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-neutral-200/60 group border border-white">
        
        {/* Badges */}
        <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
            {isNew && (
            <span className="bg-black text-white text-[10px] font-black px-3 py-1.5 uppercase tracking-widest rounded-full">
                New Arrival
            </span>
            )}
            
            {discount > 0 && (
            <span className="bg-red-500 text-white text-[10px] font-black px-3 py-1.5 uppercase tracking-widest rounded-full w-fit">
                -{discount}% OFF
            </span>
            )}
        </div>

       
        {/* <button className="absolute top-6 right-6 z-10 p-3 bg-white/50 backdrop-blur-md hover:bg-white rounded-full transition-all duration-300 group-hover:scale-110">
            <Heart size={20} className="text-neutral-900" />
        </button> */}

        {/* Image Animation */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className={`w-full h-full ${images[currentIndex]} flex items-center justify-center`}
          >
            {/* --- VISUAL PLACEHOLDER FOR IMAGE --- */}
            <div className="relative w-4/4 h-4/4 flex items-center justify-center">
                {/* Abstract decorative circles to make placeholder look good */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-2xl transform translate-y-4"></div>
                <div className=" w-full h-2/3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full transform -rotate-6 shadow-2xl flex items-center justify-center group-hover:-rotate-0 transition-transform duration-700 ease-out">
                          
                <img className='w-full h-full object-cover overflow-hidden m-auto' src={images[currentIndex]} alt="main" />
                    
                </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
            <button onClick={prevImage} className="pointer-events-auto bg-white/80 hover:bg-white p-3 rounded-full backdrop-blur shadow-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ChevronLeft size={20} />
            </button>
            <button onClick={nextImage} className="pointer-events-auto bg-white/80 hover:bg-white p-3 rounded-full backdrop-blur shadow-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <ChevronRight size={20} />
            </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`border-2 relative aspect-square rounded-2xl overflow-hidden  transition-all duration-300 ${currentIndex === idx ? 'ring-2 ring-black ring-offset-2 scale-95' : 'opacity-70 hover:opacity-100'}`}
          >
            <img className='w-fll h-full object-cover m-auto' src={img} alt="" />
            {currentIndex === idx && (
                <div className="absolute inset-0 bg-black/10"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const ProductDetailPage = () => {
  const { id } = useParams();

  
  const {ALL_PRODUCTS,addToCart} = useContext(CartContext);

  
  const MOCK_PRODUCTS = ALL_PRODUCTS.filter((item) => item.id === parseInt(id));

  
  const MOCK_PRODUCT = [
  {
    id: "101",
    name: "Tree Dasher 2.0",
    tagline: "Everyday Running Shoe",
    brand: "Allbirds",
    price: 135,
    originalPrice: 160,
    currency: "$",
    rating: 4.8,
    reviewCount: 1240,
    isNew: true,
    description: "Our most technical running shoe yet. Made with natural materials like eucalyptus tree fiber and sugarcane, it’s designed for smooth strides and soft landings. Breathable, flexible, and lighter on the planet.",
    colors: [
      { name: 'Natural Black', class: 'bg-neutral-900', ring: 'ring-neutral-900' },
      { name: 'Blizzard', class: 'bg-gray-200', ring: 'ring-gray-400' },
      { name: 'Hazy Cargo', class: 'bg-stone-600', ring: 'ring-stone-600' }
    ],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13],
    images: [
      "bg-neutral-800", // Using CSS classes as placeholders for images
      "bg-neutral-600", 
      "bg-neutral-500", 
      "bg-stone-700", 
    ],
    reviews: [
      { id: 1, user: "Alex M.", rating: 5, date: "2 days ago", text: "Incredible comfort straight out of the box." },
      { id: 2, user: "Sarah J.", rating: 4, date: "1 week ago", text: "Love the style! Fits a bit snug." },
    ]
  }
];
  // 1. CONTEXT INTEGRATION LOGIC
  // If you use context, uncomment the line below and remove the mock logic
  // const { ALL_PRODUCTS } = useContext(CartContext);
  
  // 2. FETCH LOGIC (Using Mock for demonstration to ensure code runs)
  // We use .find() because we want ONE object, not an array.
  // We default to MOCK_PRODUCTS[0] if ID isn't found just so the preview works for you.
  const productData = MOCK_PRODUCTS.find((item) => item.id === (id || "101")) || MOCK_PRODUCTS[0];

  // State
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(productData?.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const navigate = useNavigate()


  // Reset state when product changes
  useEffect(() => {
    if(productData) {
        setSelectedColor(productData.colors[0]);
        setSelectedSize(null);
        setQuantity(1);
        setIsAdded(false);
    }
  }, [productData]);

  // Guard Clause: If data is missing
  if (!productData) {
      return <div className="min-h-screen flex items-center justify-center text-xl font-bold">Product not found</div>;
  }

  // Calculate discount
  const discountPercentage = productData.originalPrice 
    ? Math.round(((productData.originalPrice - productData.price) / productData.originalPrice) * 100) 
    : 0;

  const handleAddToCart = () => {
    if (!selectedSize) {
        alert("Please select a size"); // Replace with toast in real app
        return;
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
    // Add logic to dispatch to CartContext here
     
    addToCart(productData,quantity,selectedSize);

    navigate("/cart");

  };

  return (
    <div className="min-h-screen pt-10 relative bg-[#F3F2EE] font-sans text-neutral-900 selection:bg-black selection:text-white">
     <SecondNavBar/>
      {/* Simple Header / Nav */}
      <nav className="px-6 py-6 max-w-7xl mx-auto flex items-center justify-between">
         {/* <Link to="/shop" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-neutral-500 transition-colors">
            <ArrowLeft size={18} /> Back to Shop
         </Link> */}
         {/* <div className="font-black text-xl tracking-tighter">MY.ECOM</div>
         <button className="relative p-2">
            <ShoppingBag size={24} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">2</span>
         </button> */}
      </nav>

      <main className="max-w-7xl mx-auto px-6 pb-15 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24">
          
          {/* LEFT: IMAGE GALLERY */}
          <div className="lg:col-span-7">
            <ImageGallery 
                images={productData.images} 
                isNew={productData.isNew} 
                discount={discountPercentage}
            />
          </div>

          {/* RIGHT: PRODUCT INFO */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            
            {/* Breadcrumb & Ratings */}
            <div className="flex items-center justify-between mb-6">
                
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-neutral-100">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-sm">{productData.rating}</span>
                    <span className="text-xs text-neutral-400">({productData.reviewCount})</span>
                </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2 leading-[0.9]">
              {productData.name}
            </h1>
            <p className="text-lg text-neutral-500 mb-8 font-medium">{productData.tagline}</p>

            {/* Price Block */}
            <div className="flex items-baseline gap-4 mb-8">
               <span className="text-4xl font-black">{productData.currency}{productData.price}</span>
               {productData.originalPrice && (
                   <span className="text-xl text-neutral-400 line-through decoration-2 decoration-red-400/50">{productData.currency}{productData.originalPrice}</span>
               )}
            </div>

            {/* Selectors Wrapper */}
            <div className="space-y-8 bg-white p-6 rounded-3xl shadow-sm border border-neutral-100 mb-8">
                
                {/* Color Selector */}
                {/* <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 block">
                        Select Color: <span className="text-black">{selectedColor?.name}</span>
                    </span>
                    <div className="flex flex-wrap gap-3">
                        {productData.colors.map(color => (
                            <button
                                key={color.name}
                                onClick={() => setSelectedColor(color)}
                                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 ${selectedColor?.name === color.name ? `ring-2 ring-offset-2 ${color.ring}` : 'hover:scale-110'}`}
                            >
                                <div className={`w-full h-full rounded-full ${color.class} border border-black/10`}></div>
                            </button>
                        ))}
                    </div>
                </div> */}

                {/* Size Selector */}
                <div>
                    <div className="flex justify-between items-end mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Select Size</span>
                        <button className="text-xs font-bold text-neutral-900 underline decoration-neutral-300 hover:decoration-black underline-offset-4">Size Guide</button>
                    </div>
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                        {productData.sizes.map(size => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`h-12 flex items-center justify-center rounded-xl text-sm font-bold border-2 transition-all duration-200
                                    ${selectedSize === size 
                                        ? 'bg-black text-white border-black shadow-lg shadow-black/30' 
                                        : 'bg-transparent border-neutral-100 text-neutral-600 hover:border-black'}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mt-auto">
                <div className="flex gap-4">
                    {/* Quantity */}
                    <div className="flex items-center bg-white border border-neutral-200 rounded-full px-2 h-16 w-32 justify-between">
                        <button onClick={() => setQuantity(Math.max(1, quantity-1))} className="w-10 h-10 flex items-center justify-center hover:bg-neutral-100 rounded-full transition-colors"><Minus size={16}/></button>
                        <span className="font-black text-lg">{quantity}</span>
                        <button onClick={() => setQuantity(quantity+1)} className="w-10 h-10 flex items-center justify-center hover:bg-neutral-100 rounded-full transition-colors"><Plus size={16}/></button>
                    </div>

                    {/* Add to Cart */}
                    <motion.button 
                        onClick={handleAddToCart}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 h-16 rounded-full font-bold uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-3 text-lg
                        ${isAdded ? "bg-green-600 text-white shadow-green-600/30" : "bg-black text-white shadow-black/30 hover:bg-neutral-800"}`}
                    >
                        {isAdded ? (
                            <><Check size={24} /> Added</>
                        ) : (
                            "Add To Cart"
                        )}
                    </motion.button>
                </div>
                
                <p className="text-[11px] font-bold text-neutral-400 text-center uppercase tracking-widest flex items-center justify-center gap-6 pt-4">
                    <span className="flex items-center gap-2"><Truck size={14} className="text-black"/> Free Shipping</span>
                    <span className="flex items-center gap-2"><RotateCcw size={14} className="text-black"/> 30 Day Returns</span>
                </p>
            </div>
            
            {/* Description */}
            <div className="mt-12 pt-10 border-t border-dashed border-neutral-300">
                <h3 className="font-black text-lg uppercase tracking-tight mb-4">Description</h3>
                <p className="text-neutral-600 leading-loose">
                    {productData.description}
                </p>
            </div>

          </div>
        </div>

        {/* --- REVIEWS SECTION --- */}
        <section className="mt-24 pt-16 border-t border-neutral-200">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-12">Customer Reviews</h2>
            
            <div className="grid md:grid-cols-12 gap-12">
                {/* Summary */}
                <div className="md:col-span-4 bg-white p-8 rounded-[2rem] border border-neutral-100 shadow-sm h-fit">
                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-6xl font-black">{productData.rating}</span>
                        <span className="text-neutral-400 font-bold">/ 5</span>
                    </div>
                    <div className="flex mb-6 text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                    </div>
                    
                    <div className="space-y-3 mb-8">
                        {[5,4,3,2,1].map(num => (
                            <div key={num} className="flex items-center gap-3 text-xs font-bold text-neutral-500">
                                <span className="w-3">{num}</span>
                                <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: num === 5 ? '70%' : num === 4 ? '20%' : '5%' }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="h-full bg-black rounded-full" 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full py-4 border-2 border-black rounded-xl font-bold uppercase hover:bg-black hover:text-white transition-all duration-300">
                        Write a Review
                    </button>
                </div>

                {/* List */}
                <div className="md:col-span-8 space-y-6">
                    {productData.reviews.map(review => (
                        <div key={review.id} className="bg-white p-8 rounded-[2rem] border border-neutral-100 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-neutral-800 to-black text-white rounded-full flex items-center justify-center font-bold">
                                        {review.user.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold">{review.user}</div>
                                        <div className="flex text-yellow-400 gap-0.5 mt-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} className={i >= review.rating ? "text-gray-200" : ""} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <span className="text-xs font-bold text-neutral-400 bg-neutral-100 px-3 py-1 rounded-full">{review.date}</span>
                            </div>
                            <p className="text-neutral-600 leading-relaxed">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <ValuesSection/>
      <Footer/>
    </div>
  );
};

export default ProductDetailPage;

