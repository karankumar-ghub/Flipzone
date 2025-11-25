import { Monitor, Headphones, Camera, Watch } from 'lucide-react';

// Robust Image Fallback
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80";

// Curated Image Sets for Gallery
const PRODUCT_IMAGES = {
  "Audio": [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
    "https://images.unsplash.com/photo-1524678606372-987d780461d4?w=800&q=80"
  ],
  "Gaming": [
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    "https://images.unsplash.com/photo-1612287230217-969b698c8d13?w=800&q=80",
    "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=800&q=80"
  ],
  "Photography": [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=800&q=80",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
    "https://images.unsplash.com/photo-1554516829-a3fce6dded6e?w=800&q=80"
  ],
  "Wearables": [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80",
    "https://images.unsplash.com/photo-1544117519-31a4b71922b9?w=800&q=80",
    "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80"
  ],
  "Peripherals": [
    "https://images.unsplash.com/photo-1587829741301-dc798b91a91e?w=800&q=80",
    "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80",
    "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
    "https://images.unsplash.com/photo-1626218174397-ad8048a28771?w=800&q=80"
  ],
  "Mobile": [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    "https://images.unsplash.com/photo-1598327105666-5b89351aff23?w=800&q=80",
    "https://images.unsplash.com/photo-1556656793-02715d8dd660?w=800&q=80",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
  ]
};

// Original Handcrafted Items
const BASE_PRODUCTS = [
  {
    id: 1,
    name: "Cyberpunk Headset v2",
    price: 199.99,
    category: "Audio",
    rating: 4.8,
    reviews: 128,
    images: PRODUCT_IMAGES["Audio"], // New Array
    image: PRODUCT_IMAGES["Audio"][0], // Backward compatibility
    description: "Immersive 3D audio with active noise cancellation and neon LED accents.",
    isNew: true,
    isBestSeller: true,
    onSale: false
  },
  {
    id: 2,
    name: "Neon Mech Key K7",
    price: 149.50,
    category: "Peripherals",
    rating: 4.9,
    reviews: 85,
    images: PRODUCT_IMAGES["Peripherals"],
    image: PRODUCT_IMAGES["Peripherals"][0],
    description: "Tactile switches with programmable RGB lighting per key.",
    isNew: false,
    isBestSeller: true,
    onSale: true
  },
  {
    id: 3,
    name: "HoloWatch Series 5",
    price: 299.00,
    category: "Wearables",
    rating: 4.7,
    reviews: 210,
    images: PRODUCT_IMAGES["Wearables"],
    image: PRODUCT_IMAGES["Wearables"][0],
    description: "Projects holographic notifications directly onto your wrist.",
    isNew: true,
    isBestSeller: false,
    onSale: false
  },
  {
    id: 4,
    name: "Flux Capacitor Cam",
    price: 899.99,
    category: "Photography",
    rating: 5.0,
    reviews: 42,
    images: PRODUCT_IMAGES["Photography"],
    image: PRODUCT_IMAGES["Photography"][0],
    description: "Capture moments from the future with 8K resolution.",
    isNew: false,
    isBestSeller: false,
    onSale: true
  },
  {
    id: 5,
    name: "Quantum Speaker",
    price: 129.99,
    category: "Audio",
    rating: 4.6,
    reviews: 156,
    images: [...PRODUCT_IMAGES["Audio"]].reverse(), // Rotate images for variety
    image: PRODUCT_IMAGES["Audio"][3],
    description: "Levitating speaker unit with 360-degree sound projection.",
    isNew: false,
    isBestSeller: true,
    onSale: false
  },
  {
    id: 6,
    name: "Plasma Phone X",
    price: 999.00,
    category: "Mobile",
    rating: 4.9,
    reviews: 340,
    images: PRODUCT_IMAGES["Mobile"],
    image: PRODUCT_IMAGES["Mobile"][0],
    description: "Bezel-less display with transparent glass interface.",
    isNew: true,
    isBestSeller: true,
    onSale: false
  }
];

const CATEGORY_NAMES = ["Gaming", "Audio", "Photography", "Wearables", "Peripherals", "Mobile"];
const ADJECTIVES = ["Cyber", "Neon", "Quantum", "Flux", "Plasma", "Holo", "Void", "Nexus", "Synapse", "Aether", "Titan", "Omega", "Zenith", "Nova", "Pulse", "Sonic", "Hyper", "Mech", "Omni", "Stellar", "Astro", "Cryptic"];
const NOUNS = ["Headset", "Keypad", "Watch", "Cam", "Speaker", "Phone", "Mouse", "Monitor", "Drone", "Console", "Pad", "Hub", "Lens", "Visor", "Implant", "Chip", "Drive", "Link", "Bot", "Core"];

const generateProducts = (startId, count) => {
  return Array.from({ length: count }, (_, i) => {
    const category = CATEGORY_NAMES[Math.floor(Math.random() * CATEGORY_NAMES.length)];
    const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
    const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
    const version = Math.floor(Math.random() * 20) + 1;
    
    // Assign a set of images based on category
    const categoryImages = PRODUCT_IMAGES[category] || [FALLBACK_IMAGE];
    // Rotate images based on index to create variety
    const rotatedImages = [
        ...categoryImages.slice(i % categoryImages.length),
        ...categoryImages.slice(0, i % categoryImages.length)
    ];

    const priceBase = 50 + (i * 3) % 950; 
    const priceDecimal = Math.random() > 0.5 ? 0.99 : 0.00;
    
    return {
      id: startId + i,
      name: `${adj} ${noun} ${version}.0`,
      price: priceBase + priceDecimal,
      category: category,
      rating: parseFloat((Math.random() * 1.5 + 3.5).toFixed(1)),
      reviews: Math.floor(Math.random() * 800) + 20,
      images: rotatedImages,
      image: rotatedImages[0], // Keep for backward compatibility
      description: `Next-generation ${category.toLowerCase()} device featuring proprietary ${adj.toLowerCase()} technology. Engineered for the ultimate experience in high-fidelity environments.`,
      isNew: Math.random() > 0.7, 
      isBestSeller: Math.random() > 0.8,
      onSale: Math.random() > 0.75 
    };
  });
};

export const PRODUCTS = [
  ...BASE_PRODUCTS,
  ...generateProducts(7, 100) 
];

export const CATEGORIES = [
  { id: 'all', name: "All", icon: null },
  { id: 'Gaming', name: "Gaming", icon: <Monitor size={18} /> },
  { id: 'Audio', name: "Audio", icon: <Headphones size={18} /> },
  { id: 'Photography', name: "Cameras", icon: <Camera size={18} /> },
  { id: 'Wearables', name: "Wearables", icon: <Watch size={18} /> }
];