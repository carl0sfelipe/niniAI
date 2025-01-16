import React, { useState } from 'react';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const donationAddress = '3jpWxRuC2j4r8dNeb19a5LjVWCZHkfBKRuoWe6kt72mQ';

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(donationAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative z-10 p-4 bg-black/80 text-center text-sm border-t border-blue-500/20 max-w-full">
      <div className="overflow-wrap break-words">
        © {new Date().getFullYear()} Created with ❤️ by a passionate community member. 
        <a 
          href="https://www.linkedin.com/in/carl0sfelipe" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:text-blue-300"
        >
          {' '}@carl0sfelipe
        </a>
      </div>
    </footer>
  );
};

export default Footer; 