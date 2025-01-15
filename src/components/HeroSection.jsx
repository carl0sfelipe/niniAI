import React, { useEffect } from 'react';
import { Code } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import niniLogo from '../assets/nini.webp';
import telegramLogo from '../assets/telegram.png';

const HeroSection = ({ isVisible }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <section className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 min-h-screen bg-black">
      <div className="w-full max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* Primeiro Slide */}
          <div className="!flex flex-col items-center justify-center px-4">
            <div className="text-center">
              <img 
                src={niniLogo} 
                alt="Nini AI Logo" 
                className="w-64 h-64 mx-auto rounded-full object-cover mb-8"
              />
              <h2 className="text-5xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
                  Next-Gen AI Trading Technology
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
                Powered by the world's smartest chihuahua, our AI trading bot has achieved:
                <span className="block mt-4 space-y-2">
                  <span className="block">
                    <span className="text-blue-400 font-bold">89% </span>
                    Success Rate
                  </span>
                  <span className="block">
                    <span className="text-purple-400 font-bold">580% </span>
                    ROI in 3 Months
                  </span>
                  <span className="block">
                    <span className="text-blue-400 font-bold">10,000+ </span>
                    Successful Trades
                  </span>
                </span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <a
                  href="https://t.me/niniai_portal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Join Telegram Group
                </a>
                <a
                  href="/results"
                  className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-bold rounded-lg transition-all duration-300"
                >
                  View Latest Results
                </a>
              </div>
            </div>
          </div>

          {/* Segundo Slide */}
          <div className="!flex flex-col items-center justify-center px-4">
            <div className="text-center">
              <img 
                src={telegramLogo} 
                alt="Telegram Logo" 
                className="w-24 h-24 mx-auto text-blue-400 mb-8"
              />
              <h2 className="text-5xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
                  Exclusive Signal Group
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-6">
                Hold 1M+ NiniAI tokens to access our premium signal group with:
                <span className="block mt-4 space-y-2">
                  <span className="block">
                    <span className="text-blue-400 font-bold">Real-time </span>
                    Trading Signals
                  </span>
                  <span className="block">
                    <span className="text-white"> Advanced AI </span> <span className="text-purple-400 font-bold"> Trading Opportunities</span>
                  </span>
                </span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <a
                  href="https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAyMzg0MzgyMTY4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Join Telegram Group
                </a>
                <a
                  href="/results"
                  className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-bold rounded-lg transition-all duration-300"
                >
                  View Latest Results
                </a>
              </div>
            </div>
          </div>

          {/* Terceiro Slide */}
          <div className="!flex flex-col items-center justify-center px-4">
            <div className="text-center">
              <Code className="w-24 h-24 mx-auto text-blue-400 animate-pulse mb-8" />
              <h2 className="text-5xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
                  AI Bot Integration
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-6">
                Hold 5M+ NiniAI tokens to access our advanced trading bot:
                <span className="block mt-4 space-y-2">
                  <span className="block">
                    <span className="text-white">Direct </span>
                    <span className="text-purple-400 font-bold">Binance API Integration</span>
                  </span>
                  <span className="block"></span>
                    <span className="text-white">Let your Trading on the</span> <span className="text-purple-400 font-bold">Auto Pilot </span>
                    
                    <span className="block">
                    <span className="text-purple-400 font-bold">Easy</span> to Use Documentation
                  </span>
                </span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <a
                  href="https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAyMzg3MTU2Nzc5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/results"
                  className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-bold rounded-lg transition-all duration-300"
                >
                  View Latest Results
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection; 