import React, { useState } from 'react';
import { resultsData } from '../assets/results.js';
import Header from './Header';
import CTASection from './CTASection';
import Footer from './Footer';

const ResultsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const formatDateTime = (dateStr) => {
    try {
      if (!dateStr) return 'Invalid Date';
      
      const [date, time, period] = dateStr.trim().split(' ');
      const [month, day, year] = date.split('/');
      const [hours, minutes] = time.split(':');
      
      return `${month}/${day}/${year} ${hours}:${minutes} ${period}`;
    } catch (e) {
      console.error('Error parsing date:', e, dateStr);
      return dateStr;
    }
  };

  const parseResults = (data) => {
    const lines = data.split('\n').filter(Boolean);
    const parsedResults = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const parts = line.split(';');
      
      if (parts[0].startsWith('OPEN')) {
        const [action, coin, price, targetPrice, datetime] = parts;
        parsedResults.push({
          action,
          coin,
          price: parseFloat(price),
          targetPrice: targetPrice.split('$')[1],
          datetime: formatDateTime(datetime),
          type: action.includes('CALL') ? 'call' : 'put'
        });
      } else {
        const [action, coin, price, profitStr, aiType = '', datetime] = parts;
        const profitValue = parseFloat(profitStr.split(': ')[1]);
        parsedResults.push({
          action,
          coin,
          price: parseFloat(price),
          profit: profitValue,
          isProfit: profitValue > 0,
          aiType: aiType.replace('% AI: ', ''),
          datetime: formatDateTime(datetime),
          type: 'close'
        });
      }
    }
    
    return parsedResults.sort((a, b) => {
      const dateA = new Date(a.datetime);
      const dateB = new Date(b.datetime);
      return dateA - dateB;
    });
  };

  const results = parseResults(resultsData);
  const closedTrades = results.filter(r => r.type === 'close');
  const totalProfit = closedTrades.reduce((acc, curr) => acc + curr.profit, 0);
  const successRate = (closedTrades.filter(r => r.isProfit).length / closedTrades.length) * 100;
  const bestTrade = Math.max(...closedTrades.map(r => r.profit));
  const worstTrade = Math.min(...closedTrades.map(r => r.profit));

  const totalPages = Math.ceil(results.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
              Latest Trading Results
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            <div className="bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-blue-500/20 text-center">
              <h3 className="text-gray-400 mb-2 text-center">Total Trades</h3>
              <p className="text-3xl font-bold text-blue-400 text-center">{results.length}</p>
            </div>
            <div className="bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-blue-500/20 text-center">
              <h3 className="text-gray-400 mb-2 text-center">Success Rate</h3>
              <p className="text-3xl font-bold text-purple-400 text-center">{successRate.toFixed(1)}%</p>
            </div>
            <div className="bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-blue-500/20 text-center">
              <h3 className="text-gray-400 mb-2 text-center">Total Profit</h3>
              <p className={`text-3xl font-bold text-center ${totalProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {totalProfit >= 0 ? '+' : ''}{totalProfit.toFixed(2)}%
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-blue-500/20 text-center">
              <h3 className="text-gray-400 mb-2 text-center">Best Trade</h3>
              <p className="text-3xl font-bold text-green-400 text-center">+{bestTrade.toFixed(2)}%</p>
            </div>
            <div className="bg-black/40 backdrop-blur-xl p-6 rounded-xl border border-blue-500/20 text-center">
              <h3 className="text-gray-400 mb-2 text-center">Worst Trade</h3>
              <p className="text-3xl font-bold text-red-400 text-center">{worstTrade.toFixed(2)}%</p>
            </div>
          </div>

          <div className="overflow-x-auto mb-8">
            <div className="min-w-full inline-block align-middle text-center">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-blue-500/20 bg-black/40 backdrop-blur-xl rounded-xl border border-blue-500/20">
                  <thead>
                    <tr className="border-b border-blue-500/20">
                      <th className="px-4 py-3 text-center text-sm text-gray-400">Type</th>
                      <th className="px-4 py-3 text-center text-sm text-gray-400">Coin</th>
                      <th className="px-4 py-3 text-center text-sm text-gray-400">Price</th>
                      <th className="px-4 py-3 text-center text-sm text-gray-400">Target/Profit</th>
                      <th className="px-4 py-3 text-center text-sm text-gray-400">AI Type</th>
                      <th className="px-4 py-3 text-center text-sm text-gray-400">Date & Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((result, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-blue-500/10 hover:bg-blue-500/5 transition-colors ${
                          result.type === 'close' ? '' : 'bg-blue-900/20'
                        }`}
                      >
                        <td className="px-4 py-3 text-center whitespace-nowrap">
                          {result.type === 'close' ? (
                            <span className={`px-3 py-1 rounded-full text-sm ${
                              result.isProfit ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                            }`}>
                              CLOSE
                            </span>
                          ) : result.type === 'call' ? (
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                              CALL
                            </span>
                          ) : (
                            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                              PUT
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-center whitespace-nowrap">
                          <span className="font-semibold text-blue-400">{result.coin}</span>
                        </td>
                        <td className="px-4 py-3 text-center whitespace-nowrap">${result.price.toLocaleString()}</td>
                        <td className="px-4 py-3 text-center whitespace-nowrap">
                          {result.type === 'close' ? (
                            <span className={`font-medium ${result.isProfit ? 'text-green-400' : 'text-red-400'}`}>
                              {result.isProfit ? '+' : ''}{result.profit}%
                            </span>
                          ) : (
                            <span className="text-gray-400">${result.targetPrice}</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-center whitespace-nowrap">
                          {result.type === 'close' && (
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                              {result.aiType}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-center whitespace-nowrap text-gray-400">{result.datetime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 flex-wrap">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500/30 transition-colors"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`w-10 h-10 rounded-lg ${
                  currentPage === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                } transition-colors`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500/30 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ResultsPage; 