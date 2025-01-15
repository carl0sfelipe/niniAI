import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import niniLogo from '../../public/nini.svg';
import dexScreenerLogo from '../assets/dexscreener.png';
import telegramLogo from '../assets/telegram.png';
import twitterLogo from '../assets/twitter.png';
import niniWhiteLogo from '../../public/nini-white.svg';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative z-10 p-6 bg-black/40 backdrop-blur-lg border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={niniWhiteLogo}
            alt="Nini AI White Logo" 
            className="w-8 h-8 object-cover"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            NiniAI
          </span>
        </Link>
        <button onClick={toggleMenu} className="text-white md:hidden">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <nav className={`flex-col md:flex-row md:flex ${menuOpen ? 'flex' : 'hidden'} space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}>
          <a
            href='https://dexscreener.com/solana/C9YVUuRuKSCBFghoF8gno9GZ7YuCpzGWiXTts7Q7pump'
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <img src={dexScreenerLogo} alt="Dexscreener" className="w-4 h-4 mr-1" />
            Dex Screener
          </a>
          <a
            href='https://t.me/niniai_portal'
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <img src={telegramLogo} alt="Telegram" className="w-4 h-4 mr-1" />
            Telegram
          </a>
          <a
            href='https://x.com/NiniAiTrading'
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <img src={twitterLogo} alt="Twitter" className="w-4 h-4 mr-1" />
            X
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 