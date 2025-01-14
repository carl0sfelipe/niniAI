import React, { useState } from 'react';
import { FaClipboard } from 'react-icons/fa';

const CTASection = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = 'C9YVUuRuKSCBFghoF8gno9GZ7YuCpzGWiXTts7Q7pump';

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative z-10 p-4 md:p-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Start Trading with NiniAI
        </h3>
        <div 
          className="mb-4 md:mb-8 p-3 bg-black/40 backdrop-blur-xl rounded-lg border border-blue-500/20 inline-block cursor-copy max-w-full relative"
          onClick={handleCopyToClipboard}
        >
          <span className="font-semibold text-blue-400 text-sm md:text-base">Contract Address: </span>
          <br />
          <code className="bg-black/60 text-blue-300 px-2 py-1 rounded text-[10px] sm:text-xs md:text-base break-all">
            {contractAddress}
          </code>
          <div className="absolute top-1 right-1 flex items-center">
            <FaClipboard className="text-blue-400 text-lg" />
            <span className="ml-1 text-xs text-gray-300">Click to Copy</span>
          </div>
        </div>
        {copied && (
          <div className="text-green-400 mb-4 text-sm">
            Contract address copied to clipboard!
          </div>
        )}
        <div className="flex justify-center">
          <a
            href='https://dexscreener.com/solana/C9YVUuRuKSCBFghoF8gno9GZ7YuCpzGWiXTts7Q7pump'
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Buy NiniAI Tokens
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 