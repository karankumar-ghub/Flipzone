import { Monitor, Headphones, Camera, Watch } from 'lucide-react';

export const PRODUCTS = [
  {
    id: 1,
    name: "Cyberpunk Headset v2",
    price: 199.99,
    category: "Audio",
    rating: 4.8,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    description: "Immersive 3D audio with active noise cancellation and neon LED accents."
  },
  {
    id: 2,
    name: "Neon Mech Key K7",
    price: 149.50,
    category: "Peripherals",
    rating: 4.9,
    reviews: 85,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b91a91e?w=800&q=80",
    description: "Tactile switches with programmable RGB lighting per key."
  },
  {
    id: 3,
    name: "HoloWatch Series 5",
    price: 299.00,
    category: "Wearables",
    rating: 4.7,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    description: "Projects holographic notifications directly onto your wrist."
  },
  {
    id: 4,
    name: "Flux Capacitor Cam",
    price: 899.99,
    category: "Photography",
    rating: 5.0,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    description: "Capture moments from the future with 8K resolution."
  },
  {
    id: 5,
    name: "Quantum Speaker",
    price: 129.99,
    category: "Audio",
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&q=80",
    description: "Levitating speaker unit with 360-degree sound projection."
  },
  {
    id: 6,
    name: "Plasma Phone X",
    price: 999.00,
    category: "Mobile",
    rating: 4.9,
    reviews: 340,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    description: "Bezel-less display with transparent glass interface."
  }
];

export const CATEGORIES = [
  { id: 'all', name: "All", icon: null },
  { id: 'Gaming', name: "Gaming", icon: <Monitor size={18} /> },
  { id: 'Audio', name: "Audio", icon: <Headphones size={18} /> },
  { id: 'Photography', name: "Cameras", icon: <Camera size={18} /> },
  { id: 'Wearables', name: "Wearables", icon: <Watch size={18} /> }
];