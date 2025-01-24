import { useState } from 'react'

const ChevronIcon = ({ className }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
)

const ExternalLinkIcon = ({ className }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)

const WalletCard = ({ title, address, description, shortAddress }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-700 rounded-lg">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center px-6 py-4 text-left bg-[#25262b] hover:bg-[#2c2d31] rounded-lg"
      >
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">{shortAddress}</p>
        </div>
        <ChevronIcon className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="px-6 py-4 border-t border-gray-700 bg-[#25262b]">
          <div className="space-y-4">
            <p className="text-gray-300">{description}</p>
            <a 
              href={`https://solscan.io/account/${address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1a1b1e] text-blue-400 hover:text-blue-300 px-4 py-3 rounded-lg border border-blue-500/20 transition-colors"
            >
              <span>View on Solscan</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

const TreasuryDisclosure = () => {
  const MARKETING_WALLET = "FRnH5sLWJTbEE9o2qxL6gGaPW4FHvBF9M6xtxrH7h1aW"
  const BUYBACK_WALLET = "73rwtBeNi3BgCYHj4aWEMipzqfu9sJWDfyyi876DDXN"

  return (
    <div className="max-w-3xl mx-auto bg-[#1a1b1e] rounded-xl shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
        NINI Treasury Management
      </h2>

      <WalletCard 
        title="Marketing Wallet"
        address={MARKETING_WALLET}
        shortAddress="FRnH5sLWJTb...H7h1aW"
        description="Allocation: Partnerships, KOLs & Exchange listings"
      />

      <WalletCard 
        title="Buyback Wallet"
        address={BUYBACK_WALLET}
        shortAddress="73rwtBeNi3B...6DDXN"
        description="Allocation: Contests, Giveaways, Operational Expenses & Marketing"
      />
    </div>
  )
}

export default TreasuryDisclosure