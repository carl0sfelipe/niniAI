import React from 'react';

const CTASection = ({ contractAddress, dexscreamLink }) => {
  return (
    <section className="relative z-10 p-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Start Trading with NiniAI
        </h3>
        <div className="mb-8 p-4 bg-black/40 backdrop-blur-xl rounded-lg border border-blue-500/20 inline-block">
          <span className="font-semibold text-blue-400">Contract Address: </span>
          <code className="bg-black/60 text-blue-300 px-3 py-1 rounded">
            {contractAddress}
          </code>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={dexscreamLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Buy NiniAI Tokens
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 