import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ResultsPage from './components/ResultsPage';

function HomePage({ isVisible, contractAddress, dexscreamLink, telegramLink, twitterLink }) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header dexscreamLink={dexscreamLink} telegramLink={telegramLink} twitterLink={twitterLink} />
      <HeroSection isVisible={isVisible} />
      <FeaturesSection />
      <CTASection contractAddress={contractAddress} dexscreamLink={dexscreamLink} />
      <Footer />
    </div>
  );
}

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const contractAddress = 'C9YVUuRuKSCBFghoF8gno9GZ7YuCpzGWiXTts7Q7pump';
  const dexscreamLink = 'https://dexscreener.com/solana/C9YVUuRuKSCBFghoF8gno9GZ7YuCpzGWiXTts7Q7pump';
  const telegramLink = 'https://t.me/niniai_portal';
  const twitterLink = 'https://x.com/NiniAiTrading';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              isVisible={isVisible}
              contractAddress={contractAddress}
              dexscreamLink={dexscreamLink}
              telegramLink={telegramLink}
              twitterLink={twitterLink}
            />
          } 
        />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
