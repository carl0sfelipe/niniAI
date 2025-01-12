import React from 'react';
import { BarChart3, Cpu, Lock } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="relative z-10 bg-black/60 backdrop-blur-xl p-12">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Advanced Trading Features
          </span>
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: "Real-time Analytics",
              desc: "Live performance tracking with advanced metrics"
            },
            {
              icon: <Cpu className="w-8 h-8" />,
              title: "AI-Powered Trading",
              desc: "Sophisticated algorithms for optimal entry/exit points"
            },
            {
              icon: <Lock className="w-8 h-8" />,
              title: "Secure Integration",
              desc: "Safe API connection with your Binance account"
            }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl blur-lg transition-all duration-300 group-hover:blur-xl"></div>
              <div className="relative p-6 bg-black/40 backdrop-blur-xl rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 