import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const contractAddress = 'C9YVUuRuKSCBFghoF8gno9GZ7YuCpzGWiXTts7Q7pump';
  const dexscreamLink = 'https://dexscreener.com/solana/C9YVUuRuKSCBFghoF8gno9GZ7YuCpzGWiXTts7Q7pump';
  const telegramLink = 'https://t.me/niniai_portal';
  const twitterLink = 'https://x.com/NiniAiTrading';

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      const elements = document.querySelectorAll('.animate-pulse-glow');
      elements.forEach(el => el.classList.toggle('opacity-50'));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <Header dexscreamLink={dexscreamLink} telegramLink={telegramLink} twitterLink={twitterLink} />
      <HeroSection isVisible={isVisible} />
      <FeaturesSection />
      <CTASection contractAddress={contractAddress} dexscreamLink={dexscreamLink} />
      <Footer />
    </div>
  );
}

export default App;
