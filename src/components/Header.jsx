import React from 'react';
import { Link } from 'react-router-dom';
import dexScreenerLogo from '../assets/dexscreener.png';
import telegramLogo from '../assets/telegram.png';
import twitterLogo from '../assets/twitter.png';
import niniLogo from '../assets/nini.jpg';

const Header = ({ dexscreamLink, telegramLink, twitterLink }) => {
  return (
    <header className="relative z-10 p-6 bg-black/40 backdrop-blur-lg border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={niniLogo} 
            alt="Nini AI" 
            className="w-8 h-8 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            NiniAI Trading Bot
          </span>
        </Link>
        <nav className="flex space-x-6">
          <a
            href={dexscreamLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group py-2 flex items-center gap-1"
          >
            <img src={dexScreenerLogo} alt="Dexscreener" className="w-4 h-4 inline" />
            <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Dexscreener</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group py-2 flex items-center gap-1"
          >
            <img src={telegramLogo} alt="Telegram" className="w-4 h-4 inline" />
            <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Telegram</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group py-2 flex items-center gap-1"
          >
            <img src={twitterLogo} alt="Twitter" className="w-4 h-4 inline" />
            <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">X</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 