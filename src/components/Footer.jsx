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
    <footer className="relative z-10 p-4 bg-black/80 text-center text-sm border-t border-blue-500/20">
      <div>
        © {new Date().getFullYear()} Created with ❤️ by a passionate community member. 
        <a 
          href="https://www.linkedin.com/in/carl0sfelipe" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:text-blue-300"
        >
          {' '}@carl0sfelipe
        </a>
        <br />
        Your feedback is welcome on our Telegram group, and if you’d like to support, feel free to send donations to
        <span 
          className="text-blue-400 cursor-copy hover:text-blue-300"
          onClick={handleCopyToClipboard}
        >
          {' '}{donationAddress}
        </span>
        {copied && (
          <div className="text-green-400">
            Address copied to clipboard!
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer; 