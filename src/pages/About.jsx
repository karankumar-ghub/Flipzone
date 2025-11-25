import React from 'react';
import { Shield, Zap, Globe, Award, TrendingUp, Briefcase, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-(--bg-primary) font-sans text-(--text-primary)">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-(--nav-bg) text-white py-24 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Building the Future of Commerce
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            FlipZone is India's leading e-commerce marketplace, bridging the gap between 150M+ products and millions of happy customers. We innovate to democratize shopping for everyone.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        {/* --- STATS STRIP --- */}
        <div className="bg-(--bg-secondary) rounded-[4px] shadow-lg border border-(--card-border) p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="border-r border-gray-100 last:border-0">
            <div className="text-3xl md:text-4xl font-bold text-(--accent-cyan) mb-1">10M+</div>
            <div className="text-(--text-secondary) text-xs font-bold uppercase tracking-widest">Customers</div>
          </div>
          <div className="border-r border-gray-100 last:border-0">
            <div className="text-3xl md:text-4xl font-bold text-(--accent-fuchsia) mb-1">150k+</div>
            <div className="text-(--text-secondary) text-xs font-bold uppercase tracking-widest">Sellers</div>
          </div>
          <div className="border-r border-gray-100 last:border-0">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">100+</div>
            <div className="text-(--text-secondary) text-xs font-bold uppercase tracking-widest">Cities</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1">24/7</div>
            <div className="text-(--text-secondary) text-xs font-bold uppercase tracking-widest">Support</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* --- OUR STORY (Text + Image) --- */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-(--text-primary)">Our Journey</h2>
            <div className="w-12 h-1 bg-(--accent-cyan) rounded-full"></div>
            <p className="text-(--text-secondary) leading-relaxed text-lg">
              Launched in 2010, FlipZone started as a humble online book store. What began in a two-bedroom apartment has grown into a technological powerhouse that defines e-commerce in the region.
            </p>
            <p className="text-(--text-secondary) leading-relaxed text-lg">
              Today, we process millions of shipments monthly, support lakhs of sellers, and employ thousands of people. Our mission remains simple: to drive meaningful change through technology and innovation.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-gray-200 w-full h-80 rounded-[4px] flex items-center justify-center text-gray-400 font-bold text-xl">
               Office Photo Placeholder
            </div>
          </div>
        </div>

        {/* --- CORE VALUES --- */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-(--text-primary) mb-4">Our Core Values</h2>
            <p className="text-(--text-secondary) max-w-2xl mx-auto">The principles that guide every decision we make.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-(--bg-secondary) p-8 rounded-[4px] border border-(--card-border) hover:shadow-md transition-shadow text-center group">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-(--accent-cyan) mb-6 mx-auto group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-(--text-primary) mb-3">Trust & Safety</h3>
              <p className="text-(--text-secondary) text-sm leading-relaxed">
                We prioritize the safety of your data and transactions above all else. Trust is our currency.
              </p>
            </div>

            <div className="bg-(--bg-secondary) p-8 rounded-[4px] border border-(--card-border) hover:shadow-md transition-shadow text-center group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-(--accent-fuchsia) mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-(--text-primary) mb-3">Customer Obsession</h3>
              <p className="text-(--text-secondary) text-sm leading-relaxed">
                We start with the customer and work backward. We work vigorously to earn and keep customer trust.
              </p>
            </div>

            <div className="bg-(--bg-secondary) p-8 rounded-[4px] border border-(--card-border) hover:shadow-md transition-shadow text-center group">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6 mx-auto group-hover:scale-110 transition-transform">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-(--text-primary) mb-3">Ownership</h3>
              <p className="text-(--text-secondary) text-sm leading-relaxed">
                Leaders are owners. We think long term and don't sacrifice long-term value for short-term results.
              </p>
            </div>
          </div>
        </div>

        {/* --- LEADERSHIP TEAM (Mock) --- */}
        <div>
          <h2 className="text-3xl font-bold text-(--text-primary) mb-12 text-center">Meet Our Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Arjun Mehta", role: "CEO & Founder" },
              { name: "Sarah Jen", role: "CTO" },
              { name: "Vikram Singh", role: "Head of Operations" },
              { name: "Priya Sharma", role: "Chief Product Officer" }
            ].map((leader, i) => (
              <div key={i} className="bg-(--bg-secondary) border border-(--card-border) rounded-[4px] overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-100 flex items-center justify-center text-gray-400">
                   Leader Photo
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-(--text-primary)">{leader.name}</h3>
                  <p className="text-(--text-secondary) text-sm">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- CAREERS CTA --- */}
        <div className="bg-blue-50 border border-blue-100 rounded-[4px] p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Come Build with Us</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We are always looking for passionate individuals to join our team. If you want to solve complex problems at scale, we want to hear from you.
          </p>
          <button className="bg-(--accent-cyan) text-white px-8 py-3 rounded-[2px] font-bold hover:brightness-110 transition-all shadow-md inline-flex items-center gap-2">
            <Briefcase size={20} /> View Open Positions
          </button>
        </div>

      </div>
    </div>
  );
};

// Helper Icon
const ShieldCheck = ({ size }) => <Shield size={size} />;

export default About;