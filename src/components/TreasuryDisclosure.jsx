import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const TreasuryDisclosure = () => {
  // Endereços das carteiras
  const MARKETING_WALLET = "FRnH5sLWJTbEE9o2qxL6gGaPW4FHvBF9M6xtxrH7h1aW"
  const BUYBACK_WALLET = "73rwtBeNi3BgCYHj4aWEMipzqfu9sJWDfyyi876DDXN"

  return (
    <div className="max-w-3xl mx-auto bg-[#1a1b1e] rounded-xl shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
        NINI Treasury Management
      </h2>

      <Disclosure as="div" className="border border-gray-700 rounded-lg">
        {({ open }) => (
          <>
            <DisclosureButton className="flex w-full justify-between items-center px-6 py-4 text-left bg-[#25262b] hover:bg-[#2c2d31] rounded-lg">
              <div>
                <h3 className="font-semibold text-white">Dev Wallet</h3>
                <p className="text-sm text-gray-400 mt-1">
                  FRnH5sLWJTb...H7h1aW
                </p>
              </div>
              <ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
            </DisclosureButton>

            <DisclosurePanel className="px-6 py-4 border-t border-gray-700 bg-[#25262b]">
              <div className="space-y-4">
                <p className="text-gray-300">
                  Allocation: Partnerships, KOLs & Exchange listings
                </p>
                <a 
                  href={`https://solscan.io/account/${MARKETING_WALLET}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1a1b1e] text-blue-400 hover:text-blue-300 px-4 py-3 rounded-lg border border-blue-500/20 transition-colors"
                >
                  <span>View on Solscan</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </a>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      <Disclosure as="div" className="border border-gray-700 rounded-lg">
        {({ open }) => (
          <>
            <DisclosureButton className="flex w-full justify-between items-center px-6 py-4 text-left bg-[#25262b] hover:bg-[#2c2d31] rounded-lg">
              <div>
                <h3 className="font-semibold text-white">Buyback Wallet</h3>
                <p className="text-sm text-gray-400 mt-1">
                  73rwtBeNi3B...6DDXN
                </p>
              </div>
              <ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
            </DisclosureButton>

            <DisclosurePanel className="px-6 py-4 border-t border-gray-700 bg-[#25262b]">
              <div className="space-y-4">
                <p className="text-gray-300">
                  Allocation: Contests, Giveaways, Operational Expenses & Marketing
                </p>
                <a 
                  href={`https://solscan.io/account/${BUYBACK_WALLET}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1a1b1e] text-purple-400 hover:text-purple-300 px-4 py-3 rounded-lg border border-purple-500/20 transition-colors"
                >
                  <span>View on Solscan</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </a>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default TreasuryDisclosure