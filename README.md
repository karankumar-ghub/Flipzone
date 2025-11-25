FlipZone 🛒

  FlipZone is a high-fidelity, fully responsive e-commerce web application designed to replicate the core functionality of major retail platforms. Built with modern React     architecture, it features complex state management, real-time filtering, and a seamless checkout experience.
  
  🔗 View Live Demo
  
📸 Screenshots
  
  <!-- Tip: Replace these paths with actual screenshots of your app -->
  
  (public\Homepage.jpg)
  
  (\public\productdetails.jpg)
  
  (.\public\chekout.png)
  
  
  
  
  
  
  
✨ Key Features
  
🛍️ Browsing & Discovery
  
  Dynamic Product Grid: Browse products with advanced filtering (Category, Price, New Arrivals).
  
  Smart Search: Real-time search functionality that updates URL parameters for shareable search results.
  
  Sorting System: Sort products by Relevance, Price (Low/High), and Newest.
  
  Interactive Category Strip: Modern, gradient-styled navigation for quick category access.
  
📦 Product Experience
  
  Rich Product Details: Image gallery with thumbnail selection, specifications, and related products carousel.
  
  Reviews System: Users can read and submit ratings/reviews (persisted in local state).
  
  Wishlist: One-click "Heart" functionality to save items for later (persisted via Redux).
  
  🛒 Cart & Checkout
  
  Slide-out Cart: Seamless sidebar cart that doesn't disrupt the shopping experience.
  
  Order Management: Complete checkout flow with validation, payment simulation, and an Order History dashboard.
  
  Persistence: Cart, Wishlist, and Order History data are saved to localStorage, so data survives page refreshes.
  
🎨 UI/UX
  
  Responsive Design: Fully mobile-optimized layout with a custom hamburger menu and mobile filters.
  
  Animations: Smooth page transitions using GSAP and CSS keyframes.
  
  Localization: Prices formatted in Indian Rupees (₹) with locale-specific number formatting.
  
🛠️ Tech Stack
  
  Frontend: React (Vite)
  
  State Management: Redux Toolkit (Slices for Cart, Auth, Wishlist, Orders, Theme)
  
  Routing: React Router DOM (v6)
  
  Styling: Tailwind CSS
  
  Icons: Lucide React
  
  Animations: GSAP & Tailwind Animate
  
📂 Project Structure
  
  src/
  ├── components/        # Reusable UI components (Navbar, ProductCard, CartSidebar)
  ├── context/           # Context API (Legacy/Optional)
  ├── data/              # Mock data and constants
  ├── pages/             # Route views (Home, ProductDetails, Checkout, Orders)
  ├── store/             # Redux slices and store configuration
  │   ├── authSlice.js
  │   ├── cartSlice.js
  │   ├── orderSlice.js
  │   └── wishlistSlice.js
  ├── App.jsx            # Main app layout and routing
  └── main.jsx           # Entry point
  
  
🚀 Getting Started
  
  Follow these steps to run the project locally.
  
  Prerequisites
  
  Node.js (v16 or higher)
  
  npm or yarn
  
  Installation
  
  Clone the repository
  
  git clone [https://github.com/karankumar-ghub/Flipzone](https://github.com/karankumar-ghub/Flipzone)
  
  cd flipzone
  
  
  Install dependencies
  
  npm install
  
  
  Start the development server
  
  npm run dev
  
  
  Open in Browser
  Visit https://flipzonekk.vercel.app/ to view the app.
  
  🧠 Architectural Decisions
  
  Why Redux Toolkit?
  While React Context is great for simple themes, an e-commerce app has complex state requirements. I chose Redux Toolkit to separate concerns into slices (cart, wishlist, orders). This prevents unnecessary re-renders and makes the codebase scalable.
  
  Why URL-Based Filtering?
  I implemented search and filters using URL parameters (?search=phone&category=tech). This ensures that if a user shares a link, the recipient sees the exact same filtered view, improving UX and SEO.
  
  Mock Data & Persistence
  To simulate a real backend, I created a robust mock data generator and utilized localStorage within Redux reducers. This creates a persistent experience (saved cart, order history) without needing a database for this frontend demo.
  
  🤝 Contributing
  
  Contributions, https://www.google.com/search?q=issues, and feature requests are welcome! Feel free to check the issues page.
  
  📝 License
  
  This project is MIT licensed.
  
  Built with 💙 by Karan Kumar
