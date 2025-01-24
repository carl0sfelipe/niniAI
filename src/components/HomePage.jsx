import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import CTASection from './CTASection';
import Footer from './Footer';
import TreasuryDisclosure from './TreasuryDisclosure';
const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TreasuryDisclosure />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage; 