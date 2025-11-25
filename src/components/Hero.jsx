import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => (
  <div className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-6 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Next Gen Arrival
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
            DIGITAL
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500 animate-gradient-x drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
            LIFESTYLE
          </span>
        </h1>
        <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
          Upgrade your reality with high-fidelity tech. Premium gear designed for the digital nomad and the cyberpunk soul.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-1">
            Explore Shop
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1">
            View Showreel
          </button>
        </div>
      </div>
    </div>
    
    {/* Decorative Elements */}
    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform -translate-y-1/2 blur-sm"></div>
  </div>
);

export default Hero;