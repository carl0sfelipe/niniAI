import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 p-4 bg-black/80 text-center text-sm border-t border-blue-500/20">
      © {new Date().getFullYear()} NiniAI. All Rights Reserved.
    </footer>
  );
};

export default Footer; 