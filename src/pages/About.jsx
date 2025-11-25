import React from 'react';
import { Shield, Zap, Globe, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-20 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="text-white">OUR</span> <span className="text-cyan-400">MISSION</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We don't just sell tech. We curate the artifacts of the future. 
          Born in the neon-lit alleyways of the digital frontier, NeonShop is dedicated to 
          bringing high-fidelity gear to the modern cyberpunk.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-white/10 py-12">
        <div className="text-center">
          <div className="text-4xl font-black text-white mb-2">24k+</div>
          <div className="text-fuchsia-500 font-bold text-sm tracking-wider uppercase">Active Users</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black text-white mb-2">150+</div>
          <div className="text-cyan-500 font-bold text-sm tracking-wider uppercase">Products</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black text-white mb-2">99%</div>
          <div className="text-fuchsia-500 font-bold text-sm tracking-wider uppercase">Satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black text-white mb-2">24/7</div>
          <div className="text-cyan-500 font-bold text-sm tracking-wider uppercase">Support</div>
        </div>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-900/50 p-8 rounded-3xl border border-white/5 hover:border-cyan-500/50 transition-colors">
          <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
            <Shield size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Future Proof</h3>
          <p className="text-gray-400 leading-relaxed">
            Every product we stock is vetted for longevity and forward-compatibility. We hate planned obsolescence.
          </p>
        </div>
        <div className="bg-gray-900/50 p-8 rounded-3xl border border-white/5 hover:border-fuchsia-500/50 transition-colors">
          <div className="w-12 h-12 bg-fuchsia-500/20 rounded-xl flex items-center justify-center text-fuchsia-400 mb-6">
            <Zap size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">High Voltage</h3>
          <p className="text-gray-400 leading-relaxed">
            Performance is our priority. If it doesn't push the boundaries of what's possible, we don't sell it.
          </p>
        </div>
        <div className="bg-gray-900/50 p-8 rounded-3xl border border-white/5 hover:border-cyan-500/50 transition-colors">
          <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 mb-6">
            <Globe size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Global Net</h3>
          <p className="text-gray-400 leading-relaxed">
            Shipping from the hub to the edge. No matter where you jack in from, we'll get the gear to your drop point.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;