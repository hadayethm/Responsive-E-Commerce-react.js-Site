import p1_img_1 from "./img/p1-img-1.webp";
import p1_img_2 from "./img/p1-img-2.webp";
import p1_img_3 from "./img/p1-img-3.webp";
import p1_img_4 from "./img/p1-img-4.webp";
import p2_img_1 from "./img/p2-img-1.webp";
import p2_img_2 from "./img/p2-img-2.webp";
import p2_img_3 from "./img/p2-img-3.webp";
import p2_img_4 from "./img/p2-img-4.webp";
import p3_img_1 from "./img/p3-img-1.webp";
import p3_img_2 from "./img/p3-img-2.webp";
import p3_img_3 from "./img/p3-img-3.webp";
import p3_img_4 from "./img/p3-img-4.webp";
import p4_img_1 from "./img/p4-img-1.webp";
import p4_img_2 from "./img/p4-img-2.webp";
import p4_img_3 from "./img/p4-img-3.webp";
import p4_img_4 from "./img/p4-img-4.webp";
import p5_img_1 from "./img/p5-img-1.webp";
import p5_img_2 from "./img/p5-img-2.webp";
import p5_img_3 from "./img/p5-img-3.webp";
import p5_img_4 from "./img/p5-img-4.webp";
import p6_img_1 from "./img/p6-img-1.webp";
import p6_img_2 from "./img/p6-img-2.webp";
import p6_img_3 from "./img/p6-img-3.webp";
import p6_img_4 from "./img/p6-img-4.webp";
import p7_img_1 from "./img/p7-img-1.webp";
import p7_img_2 from "./img/p7-img-2.webp";
import p7_img_3 from "./img/p7-img-3.webp";
import p7_img_4 from "./img/p7-img-4.webp";
import p8_img_1 from "./img/p8-img-1.webp";
import p8_img_2 from "./img/p8-img-2.webp";
import p8_img_3 from "./img/p8-img-3.webp";
import p8_img_4 from "./img/p8-img-4.webp";
import p9_img_1 from "./img/p9-img-1.webp";
import p9_img_2 from "./img/p9-img-2.webp";
import p9_img_3 from "./img/p9-img-3.webp";
import p9_img_4 from "./img/p9-img-4.webp";
import p10_img_1 from "./img/p10-img-1.webp";
import p10_img_2 from "./img/p10-img-2.webp";
import p10_img_3 from "./img/p10-img-3.webp";
import p10_img_4 from "./img/p10-img-4.webp";
import p11_img_1 from "./img/p11-img-1.webp";
import p11_img_2 from "./img/p11-img-2.webp";
import p11_img_3 from "./img/p11-img-3.webp";
import p11_img_4 from "./img/p11-img-4.webp";
import p12_img_1 from "./img/p12-img-1.webp";
import p12_img_2 from "./img/p12-img-2.webp";
import p12_img_3 from "./img/p12-img-3.webp";
import p12_img_4 from "./img/p12-img-4.webp";
import p13_img_1 from "./img/p13-img-1.webp";
import p13_img_2 from "./img/p13-img-2.webp";
import p13_img_3 from "./img/p13-img-3.webp";
import p13_img_4 from "./img/p13-img-4.webp";
import p14_img_1 from "./img/p14-img-1.webp";
import p14_img_2 from "./img/p14-img-2.webp";
import p14_img_3 from "./img/p14-img-3.webp";
import p14_img_4 from "./img/p14-img-4.webp";
import p15_img_1 from "./img/p15-img-1.webp";
import p15_img_2 from "./img/p15-img-2.webp";
import p15_img_3 from "./img/p15-img-3.webp";
import p15_img_4 from "./img/p15-img-4.webp";
import p16_img_1 from "./img/p16-img-1.webp";
import p16_img_2 from "./img/p16-img-2.webp";
import p16_img_3 from "./img/p16-img-3.webp";
import p16_img_4 from "./img/p16-img-4.webp";
import p17_img_1 from "./img/p17-img-1.webp";
import p17_img_2 from "./img/p17-img-2.webp";
import p17_img_3 from "./img/p17-img-3.webp";
import p17_img_4 from "./img/p17-img-4.webp";
import p18_img_1 from "./img/p18-img-1.webp";
import p18_img_2 from "./img/p18-img-2.webp";
import p18_img_3 from "./img/p18-img-3.webp";
import p18_img_4 from "./img/p18-img-4.webp";



const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Swift-Step Trainer",
    tagline: "Lightweight daily driver",
    brand: "Velocitas",
    price: 95,
    originalPrice: 120,
    currency: "$",
    rating: 4.5,
    reviewCount: 310,
    onSale: true,
    badge: "sale",
    category : 'men',
    categories: ["man", "sale"],
    description:
      "A versatile trainer for the gym or the street, featuring high-rebound foam.",
     colors: [
     { name: 'Natural Black', class: 'bg-neutral-900', selectedClass: 'ring-neutral-900' },
    { name: 'Blizzard', class: 'bg-gray-100', selectedClass: 'ring-gray-400' },
    { name: 'Hazy Cargo', class: 'bg-stone-600', selectedClass: 'ring-stone-600' }
     ],
    sizes: [7, 8, 9, 10, 11, 12],
    images: [p1_img_1, p1_img_2,p1_img_3,p1_img_4],
    reviews: [
      {
        id: 1,
        user: "Jason D.",
        rating: 5,
        date: "4 days ago",
        text: "Great value for the price.",
      },
    ],
  },
  {
    id: 2,
    name: "Aura Runner",
    tagline: "Breathable mesh performance",
    brand: "SkyBound",
    price: 115,
    originalPrice: null,
    currency: "$",
    rating: 4.8,
    onNew : true,
    reviewCount: 520,
    badge: "new",
    category : 'women',
    categories: ["woman"],
    description:
      "Engineered mesh upper provides maximum airflow during long summer runs.",
    colors: [
      { name: "Pure White", class: "bg-white", selectedClass: "ring-gray-300" },
      {
        name: "Sky Blue",
        class: "bg-blue-400",
        selectedClass: "ring-blue-400",
      },
    ],
    sizes: [7, 8, 9, 10],
    images: [p2_img_1,p2_img_2,p2_img_3,p2_img_4],
    reviews: [
      {
        id: 1,
        user: "Mia L.",
        rating: 4,
        date: "1 week ago",
        text: "Very airy and light.",
      },
    ],
  },
  {
    id: 3,
    name: "Carbon Flux",
    tagline: "High-octane racing shoe",
    brand: "Nitro",
    price: 195,
    originalPrice: 250,
    currency: "$",
    rating: 4.9,
    category : 'men',
    onSale : true,
    reviewCount: 88,
    badge: "sale",
    categories: ["man", "woman", "sale"],
    description:
      "Integrated carbon plate for maximum energy return and propulsion.",
    colors: [
      {
        name: "Racing Red",
        class: "bg-red-600",
        selectedClass: "ring-red-600",
      },
      { name: "Onyx", class: "bg-black", selectedClass: "ring-black" },
    ],
    sizes: [8, 9, 10, 11, 12, 13],
    images: [p3_img_1,p3_img_2,p3_img_3,p3_img_4],
    reviews: [
      {
        id: 1,
        user: "Kevin S.",
        rating: 5,
        date: "2 days ago",
        text: "Shaved 30 seconds off my 5k.",
      },
    ],
  },
  {
    id: 4,
    name: "Trail Blazer X",
    tagline: "Rugged all-terrain grip",
    brand: "TerraPeak",
    price: 145,
    originalPrice: null,
    currency: "$",
    rating: 4.7,
    onNew: true,
    reviewCount: 312,
    badge: "new",
    category: 'men',
    categories: ["man", "outdoor"],
    description:
      "Deep-lugged Vibram outsole and reinforced toe cap for the toughest mountain trails.",
    colors: [
      { name: "Forest Green", class: "bg-green-800", selectedClass: "ring-green-800" },
      { name: "Slate Grey", class: "bg-gray-600", selectedClass: "ring-gray-600" },
    ],
    sizes: [8, 9, 10, 11, 12],
    images: [p4_img_1, p4_img_2, p4_img_3, p4_img_4],
    reviews: [
      {
        id: 1,
        user: "Mark D.",
        rating: 5,
        date: "3 days ago",
        text: "Incredible traction on wet rocks.",
      },
    ],
  },
  {
    id: 5,
    name: "Zenith Knit",
    tagline: "Seamless comfort for daily wear",
    brand: "SkyBound",
    price: 95,
    originalPrice: 130,
    currency: "$",
    rating: 4.6,
    onSale: true,
    reviewCount: 1240,
    badge: "sale",
    category: 'women',
    categories: ["woman", "sale"],
    description:
      "A sock-like fit with a responsive foam midsole for ultimate lifestyle comfort.",
    colors: [
      { name: "Blush Pink", class: "bg-pink-200", selectedClass: "ring-pink-200" },
      { name: "Charcoal", class: "bg-gray-800", selectedClass: "ring-gray-800" },
    ],
    sizes: [5, 6, 7, 8, 9],
    images: [p5_img_1, p5_img_2, p5_img_3, p5_img_4],
    reviews: [
      {
        id: 1,
        user: "Sarah J.",
        rating: 5,
        date: "2 weeks ago",
        text: "Feels like walking on clouds.",
      },
    ],
  },
  {
    id: 6,
    name: "Volt Court",
    tagline: "Lateral stability for the win",
    brand: "Nitro",
    price: 160,
    originalPrice: null,
    currency: "$",
    rating: 4.5,
    onNew: false,
    reviewCount: 45,
    badge: "",
    category: 'unisex',
    categories: ["man", "woman"],
    description:
      "Specific lateral support zones designed for high-intensity tennis and pickleball play.",
    colors: [
      { name: "Electric Yellow", class: "bg-yellow-300", selectedClass: "ring-yellow-300" },
      { name: "Deep Navy", class: "bg-blue-900", selectedClass: "ring-blue-900" },
    ],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    images: [p6_img_1, p6_img_2, p6_img_3, p6_img_4],
    reviews: [
      {
        id: 1,
        user: "Chris P.",
        rating: 4,
        date: "1 month ago",
        text: "Great support, a bit stiff at first.",
      },
    ],
  },
  {
    id: 7,
    name: "Lunar Glide",
    tagline: "Weightless recovery walking",
    brand: "Nova",
    price: 110,
    originalPrice: null,
    currency: "$",
    rating: 4.9,
    onNew: true,
    reviewCount: 89,
    badge: "new",
    category: 'women',
    categories: ["woman"],
    description:
      "Ultra-lightweight materials designed to reduce foot fatigue after long training sessions.",
    colors: [
      { name: "Lavender", class: "bg-purple-200", selectedClass: "ring-purple-200" },
      { name: "Mint", class: "bg-green-200", selectedClass: "ring-green-200" },
    ],
    sizes: [6, 7, 8, 9],
    images: [p7_img_1, p7_img_2, p7_img_3, p7_img_4],
    reviews: [
      {
        id: 1,
        user: "Elena R.",
        rating: 5,
        date: "4 days ago",
        text: "Perfect for my post-marathon recovery.",
      },
    ],
  },
  {
    id: 8,
    name: "Hydro Sprint",
    tagline: "Water-ready performance",
    brand: "AquaStep",
    price: 85,
    originalPrice: 110,
    currency: "$",
    rating: 4.4,
    onSale: true,
    reviewCount: 156,
    badge: "sale",
    category: 'men',
    categories: ["man", "sale"],
    description:
      "Quick-dry upper and drainage ports in the sole make this perfect for beach runs.",
    colors: [
      { name: "Ocean Teal", class: "bg-teal-500", selectedClass: "ring-teal-500" },
      { name: "Sand", class: "bg-yellow-100", selectedClass: "ring-yellow-100" },
    ],
    sizes: [8, 9, 10, 11, 12],
    images: [p8_img_1, p8_img_2, p8_img_3, p8_img_4],
    reviews: [
      {
        id: 1,
        user: "Jason T.",
        rating: 4,
        date: "6 days ago",
        text: "Dries incredibly fast.",
      },
    ],
  },
  {
    id: 9,
    name: "Apex Trainer",
    tagline: "Stability for heavy lifts",
    brand: "Nitro",
    price: 130,
    originalPrice: null,
    currency: "$",
    rating: 4.7,
    onNew: false,
    reviewCount: 215,
    badge: "",
    category: 'men',
    categories: ["man", "training"],
    description:
      "A flat, stable base and high-density foam midsole designed for weightlifting and HIIT sessions.",
    colors: [
      { name: "Iron Ore", class: "bg-gray-700", selectedClass: "ring-gray-700" },
      { name: "Crimson", class: "bg-red-700", selectedClass: "ring-red-700" },
    ],
    sizes: [8, 9, 10, 11, 12, 13],
    images: [p9_img_1, p9_img_2, p9_img_3, p9_img_4],
    reviews: [
      {
        id: 1,
        user: "David B.",
        rating: 5,
        date: "3 days ago",
        text: "Perfect for squats and deadlifts.",
      },
    ],
  },
  {
    id: 10,
    name: "Cloud Aura",
    tagline: "Featherlight urban walking",
    brand: "SkyBound",
    price: 105,
    originalPrice: null,
    currency: "$",
    rating: 4.8,
    onNew: false,
    reviewCount: 412,
    badge: "",
    category: 'women',
    categories: ["woman", "lifestyle"],
    description:
      "Minimalist design meets premium cushioning for all-day comfort on city pavement.",
    colors: [
      { name: "Soft Lilac", class: "bg-purple-200", selectedClass: "ring-purple-200" },
      { name: "Cream", class: "bg-orange-50", selectedClass: "ring-orange-100" },
    ],
    sizes: [6, 7, 8, 9, 10],
    images: [p10_img_1, p10_img_2, p10_img_3, p10_img_4],
    reviews: [
      {
        id: 1,
        user: "Sophie T.",
        rating: 5,
        date: "1 week ago",
        text: "I wear these to work every day. No more sore feet!",
      },
    ],
  },
  {
    id: 11,
    name: "Storm Chase",
    tagline: "Water-resistant road runner",
    brand: "Nova",
    price: 155,
    originalPrice: null,
    currency: "$",
    rating: 4.6,
    onNew: false,
    reviewCount: 98,
    badge: "",
    category: 'women',
    categories: ["women", "running"],
    description:
      "Treated upper repels light rain while maintaining breathability for wet-weather training.",
    colors: [
      { name: "Midnight", class: "bg-blue-950", selectedClass: "ring-blue-950" },
      { name: "Sulfur", class: "bg-yellow-400", selectedClass: "ring-yellow-400" },
    ],
    sizes: [9, 10, 11, 12],
    images: [p11_img_1, p11_img_2, p11_img_3, p11_img_4],
    reviews: [
      {
        id: 1,
        user: "Ryan G.",
        rating: 4,
        date: "5 days ago",
        text: "Keeps my socks dry during light drizzles.",
      },
    ],
  },
  {
    id: 12,
    name: "Silk Glide 2.0",
    tagline: "Smooth transitions for long miles",
    brand: "SkyBound",
    price: 140,
    originalPrice: null,
    currency: "$",
    rating: 4.9,
    onNew: false,
    reviewCount: 630,
    badge: "",
    category: 'men',
    categories: ["men", "running"],
    description:
      "Plush heel collar and updated rocker geometry for an effortless heel-to-toe transition.",
    colors: [
      { name: "Coral", class: "bg-red-400", selectedClass: "ring-red-400" },
      { name: "White Pearl", class: "bg-slate-50", selectedClass: "ring-slate-200" },
    ],
    sizes: [5, 6, 7, 8, 9],
    images: [p12_img_1, p12_img_2, p12_img_3, p12_img_4],
    reviews: [
      {
        id: 1,
        user: "Monica L.",
        rating: 5,
        date: "2 days ago",
        text: "Best long-distance shoe I have ever owned.",
      },
    ],
  },
  {
    id: 13,
    name: "Vantage Mid",
    tagline: "Supportive ankle protection",
    brand: "TerraPeak",
    price: 170,
    originalPrice: null,
    currency: "$",
    rating: 4.5,
    onNew: false,
    reviewCount: 74,
    badge: "",
    category: 'men',
    categories: ["man", "hiking"],
    description:
      "Mid-cut silhouette providing superior ankle support for technical hikes and rocky descents.",
    colors: [
      { name: "Earth Brown", class: "bg-amber-900", selectedClass: "ring-amber-900" },
      { name: "Shadow", class: "bg-zinc-800", selectedClass: "ring-zinc-800" },
    ],
    sizes: [8, 9, 10, 11, 12, 13],
    images: [p13_img_1, p13_img_2, p13_img_3, p13_img_4],
    reviews: [
      {
        id: 1,
        user: "Alex K.",
        rating: 4,
        date: "6 days ago",
        text: "A bit heavy, but the support is world-class.",
      },
    ],
  },
  {
    id: 14,
    name: "Nebula Flow",
    tagline: "Adaptive cushioning technology",
    brand: "SkyBound",
    price: 135,
    originalPrice: 180, // Discounted
    currency: "$",
    rating: 4.7,
    onSale: true,
    reviewCount: 210,
    badge: "sale",
    category: 'women',
    categories: ["woman", "sale"],
    description:
      "Features a liquid-foam midsole that adapts to your unique footstrike for personalized comfort.",
    colors: [
      { name: "Cosmic Purple", class: "bg-purple-600", selectedClass: "ring-purple-600" },
      { name: "Stellar Gray", class: "bg-gray-400", selectedClass: "ring-gray-400" },
    ],
    sizes: [6, 7, 8, 9],
    images: [p14_img_1, p14_img_2, p14_img_3, p14_img_4],
    reviews: [
      {
        id: 1,
        user: "Laura V.",
        rating: 5,
        date: "3 days ago",
        text: "The foam feels different, in a very good way!",
      },
    ],
  },
  {
    id: 15,
    name: "Titan Grip",
    tagline: "Unmatched indoor court control",
    brand: "Nitro",
    price: 90,
    originalPrice: 125, // Discounted
    currency: "$",
    rating: 4.4,
    onSale: true,
    reviewCount: 185,
    badge: "sale",
    category: 'men',
    categories: ["men", "sale"],
    description:
      "Non-marking rubber outsole with a multidirectional pattern for lightning-fast pivots.",
    colors: [
      { name: "Electric Blue", class: "bg-blue-500", selectedClass: "ring-blue-500" },
      { name: "Volt Green", class: "bg-lime-400", selectedClass: "ring-lime-400" },
    ],
    sizes: [8, 9, 10, 11, 12],
    images: [p15_img_1, p15_img_2, p15_img_3, p15_img_4],
    reviews: [
      {
        id: 1,
        user: "Mike T.",
        rating: 4,
        date: "1 week ago",
        text: "Solid grip for volleyball and squash.",
      },
    ],
  },
  {
    id: 16,
    name: "Aero Swift",
    tagline: "The speed of light",
    brand: "Nitro",
    price: 210,
    originalPrice: null,
    currency: "$",
    rating: 4.9,
    onNew: true,
    reviewCount: 32,
    badge: "new", // Badge 1
    category: 'men',
    categories: ["man", "running"],
    description:
      "Ultra-thin translucent upper paired with a high-rebound Pebax plate for elite racing.",
    colors: [
      { name: "Neon Orange", class: "bg-orange-500", selectedClass: "ring-orange-500" },
      { name: "Sonic White", class: "bg-slate-50", selectedClass: "ring-slate-300" },
    ],
    sizes: [8, 9, 10, 11, 12],
    images: [p16_img_1, p16_img_2, p16_img_3, p16_img_4],
    reviews: [
      {
        id: 1,
        user: "Jordan P.",
        rating: 5,
        date: "2 days ago",
        text: "The lightest shoe I've ever put on.",
      },
    ],
  },
  {
    id: 17,
    name: "Velvet Strider",
    tagline: "Luxury in every step",
    brand: "Nova",
    price: 150,
    originalPrice: null,
    currency: "$",
    rating: 4.8,
    onSale: true,
    onNew: false,
    reviewCount: 154,
    badge: "sale", // Badge 2
    category: 'women',
    categories: ["woman"],
    description:
      "Premium suede overlays and a memory foam footbed for the ultimate walking experience.",
    colors: [
      { name: "Mocha", class: "bg-yellow-900", selectedClass: "ring-yellow-900" },
      { name: "Rose Quartz", class: "bg-pink-100", selectedClass: "ring-pink-100" },
    ],
    sizes: [5, 6, 7, 8, 9, 10],
    images: [p17_img_1, p17_img_2, p17_img_3, p17_img_4],
    reviews: [
      {
        id: 1,
        user: "Grace E.",
        rating: 5,
        date: "4 days ago",
        text: "Stylish enough for brunch, comfortable enough for a 5-mile walk.",
      },
    ],
  },
  {
    id: 18,
    name: "Zenith Core",
    tagline: "Essential everyday performance",
    brand: "SkyBound",
    price: 85,
    originalPrice: null,
    currency: "$",
    rating: 4.5,
    onNew: true,
    reviewCount: 890,
    badge: "new",
    category: 'men',
    categories: ["man", "woman"],
    description:
      "A versatile, durable trainer that handles the gym and the street with equal ease.",
    colors: [
      { name: "All Black", class: "bg-black", selectedClass: "ring-black" },
      { name: "Pure Grey", class: "bg-gray-300", selectedClass: "ring-gray-300" },
    ],
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    images: [p18_img_1, p18_img_2, p18_img_3, p18_img_4],
    reviews: [
      {
        id: 1,
        user: "Sam L.",
        rating: 4,
        date: "2 weeks ago",
        text: "Great value for the price.",
      },
    ],
  }
  
];
  export default ALL_PRODUCTS;

