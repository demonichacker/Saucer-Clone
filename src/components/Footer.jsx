import React from 'react';
import { FaDiscord, FaTwitter, FaReddit, FaTelegram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-bold text-gray-400">SaucerSwap</h1>
            <div className="border border-gray-600 p-4 mt-4 flex space-x-4">
              <a href="https://discord.com/invite/SaucerSwap" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="h-4 w-4 text-gray-400 hover:text-saucer-primary transition-colors" />
              </a>
              <a href="https://twitter.com/SaucerSwap" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-4 w-4 text-gray-400 hover:text-saucer-primary transition-colors" />
              </a>
              <a href="https://www.reddit.com/r/SaucerSwap" target="_blank" rel="noopener noreferrer">
                <FaReddit className="h-4 w-4 text-gray-400 hover:text-saucer-primary transition-colors" />
              </a>
              <a href="https://t.me/SaucerSwap" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="h-4 w-4 text-gray-400 hover:text-saucer-primary transition-colors" />
              </a>
              <a href="https://www.youtube.com/SaucerSwap" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="h-4 w-4 text-gray-400 hover:text-saucer-primary transition-colors" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 md:mb-0 text-sm">
            <div>
              <h4 className="text-base font-bold mb-2">Community</h4>
              <ul className="space-y-2">
                <li><a href="https://discord.com/invite/SaucerSwap" className="text-gray-400 hover:text-saucer-primary">Discord</a></li>
                <li><a href="https://twitter.com/SaucerSwap" className="text-gray-400 hover:text-saucer-primary">Twitter</a></li>
                <li><a href="https://www.reddit.com/r/SaucerSwap" className="text-gray-400 hover:text-saucer-primary">Reddit</a></li>
                <li><a href="https://t.me/SaucerSwap" className="text-gray-400 hover:text-saucer-primary">Telegram</a></li>
                <li><a href="https://www.youtube.com/SaucerSwap" className="text-gray-400 hover:text-saucer-primary">YouTube</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold mb-2">Tools</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">SDKs & APIs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">HashScan</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">Hedera Status</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">ChainList</a></li>
                <li><a href="https://github.com/SaucerSwap" className="text-gray-400 hover:text-saucer-primary">Github</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">Trading View Charts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold mb-2">Info</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">Docs & Help</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">DEX Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">Brand Assets</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold mb-2">Market</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">MEXC Global</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">CoinMarketCap</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">CoinGecko</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">GeckoTerminal</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">DexScreener</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">DefiLlama</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">DappRadar</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">Bitget</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold mb-2">Participate</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">Partnership</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">Apply for Listing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">Apply for Farm</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">Apply for LARI</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">Bug Bounty</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">Governance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-saucer-primary">Merch</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-left">
          <p className="text-xs text-gray-400">&copy; 2025 SaucerSwap Labs, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
