import React, { useEffect } from 'react';
import { Zap, Signal, Code, ChevronRight } from 'lucide-react';

const HeroSection = ({ isVisible }) => {
  return (
    <section className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 min-h-screen">
      <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Zap className="w-full h-full text-blue-500 animate-pulse-glow" />
        </div>
        
        <h2 className="text-5xl font-extrabold mb-8 text-center">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            Next-Gen AI Trading Technology
          </span>
        </h2>
        
        {/* Token Tiers */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {/* Signal Group Tier */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
            <div className="relative p-6 bg-black/60 backdrop-blur-xl rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Signal className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-blue-400">Signal Group Access</h3>
              </div>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                  Hold 1M+ Tokens
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                  Premium Trading Signals
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                  Community Analysis
                </li>
              </ul>
              <button className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Join Signal Group
              </button>
            </div>
          </div>

          {/* Bot Integration Tier */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
            <div className="relative p-6 bg-black/60 backdrop-blur-xl rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-purple-400">Bot Integration Access</h3>
              </div>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-400" />
                  Hold 5M+ Tokens
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-400" />
                  Direct Binance API Integration
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-400" />
                  Automated Trading
                </li>
              </ul>
              <button className="w-full py-3 px-6 bg-purple-500 hover:bg-purple-600 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Access Bot Integration
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 