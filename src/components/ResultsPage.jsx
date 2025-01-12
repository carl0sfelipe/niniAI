import React from 'react';
import { resultsData } from '../assets/results.js';
import Header from './Header';
import CTASection from './CTASection';
import Footer from './Footer';

const ResultsPage = () => {
  const contractAddress = 'C9YVUuRuKSCBFghoF8gno9GZ7YuCpzGWiXTts7Q7pump';
  const dexscreamLink = 'https://dexscreener.com/solana/C9YVUuRuKSCBFghoF8gno9GZ7YuCpzGWiXTts7Q7pump';
  const telegramLink = 'https://t.me/niniai_portal';
  const twitterLink = 'https://x.com/NiniAiTrading';

  const parseResults = (data) => {
    return data.split('\n').filter(Boolean).map(line => {
      const [action, coin, price, profitStr, aiType, datetime] = line.split(';');
      const profitValue = parseFloat(profitStr.split(': ')[1]);
      return {
        action,
        coin,
        price: parseFloat(price),
        profit: profitValue,
        isProfit: profitValue > 0,
        aiType: aiType.replace('% AI: ', ''),
        datetime: new Date(datetime).toLocaleString()
      };
    });
  };

  const results = parseResults(resultsData);
  const totalProfit = results.reduce((acc, curr) => acc + curr.profit, 0);
  const successRate = (results.filter(r => r.isProfit).length / results.length) * 100;
  const bestTrade = Math.max(...results.map(r => r.profit));
  const worstTrade = Math.min(...results.map(r => r.profit));

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header 
        dexscreamLink={dexscreamLink}
        telegramLink={telegramLink}
        twitterLink={twitterLink}
      />

      <main className="flex-1 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
              Latest Trading Results
            </span>
          </h1>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            <div className="bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-gray-400 mb-2">Total Trades</h3>
              <p className="text-3xl font-bold text-blue-400">{results.length}</p>
            </div>
            <div className="bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-gray-400 mb-2">Success Rate</h3>
              <p className="text-3xl font-bold text-purple-400">{successRate.toFixed(1)}%</p>
            </div>
            <div className="bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-gray-400 mb-2">Total Profit</h3>
              <p className={`text-3xl font-bold ${totalProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {totalProfit >= 0 ? '+' : ''}{totalProfit.toFixed(2)}%
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-gray-400 mb-2">Best Trade</h3>
              <p className="text-3xl font-bold text-green-400">+{bestTrade.toFixed(2)}%</p>
            </div>
            <div className="bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-gray-400 mb-2">Worst Trade</h3>
              <p className="text-3xl font-bold text-red-400">{worstTrade.toFixed(2)}%</p>
            </div>
          </div>

          {/* Results Table */}
          <div className="overflow-x-auto">
            <table className="w-full bg-black/40 backdrop-blur-xl rounded-xl border border-blue-500/20">
              <thead>
                <tr className="border-b border-blue-500/20">
                  <th className="px-6 py-4 text-left text-gray-400">Coin</th>
                  <th className="px-6 py-4 text-left text-gray-400">Price</th>
                  <th className="px-6 py-4 text-left text-gray-400">Profit</th>
                  <th className="px-6 py-4 text-left text-gray-400">AI Type</th>
                  <th className="px-6 py-4 text-left text-gray-400">Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr 
                    key={index}
                    className="border-b border-blue-500/10 hover:bg-blue-500/5 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <span className="font-semibold text-blue-400">{result.coin}</span>
                    </td>
                    <td className="px-6 py-4">${result.price.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className={`${result.isProfit ? 'text-green-400' : 'text-red-400'}`}>
                        {result.isProfit ? '+' : ''}{result.profit}%
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                        {result.aiType}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{result.datetime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <CTASection 
        contractAddress={contractAddress}
        dexscreamLink={dexscreamLink}
      />
      <Footer />
    </div>
  );
};

export default ResultsPage; 