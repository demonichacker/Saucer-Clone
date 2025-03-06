import { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiSettings, FiSearch } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { SiHedera } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-95 px-6 py-4 flex justify-between items-center z-50 border-b border-[#1E1E1E]">
      {/* Logo and Navigation */}
      <div className="flex items-center space-x-4">
        <div className="hidden lg:block">
          <img src="/images/logo.webp" alt="Saucer Swap Logo" className="h-10 w-auto" />
        </div>
        <span className="hidden lg:block ml-2 text-lg font-bold">
          <span className="text-[#00FF88]">Saucer</span>
          <span className="text-white">Swap</span>
        </span>

        {/* Navigation Links */}
        <ul className="hidden lg:flex space-x-6 text-[#808080] text-sm font-medium ml-8">
          <li><a href="#" className="hover:text-[#A8A8A8] transition-colors">Swap</a></li>
          <li><a href="#" className="hover:text-[#A8A8A8] transition-colors">Liquidity</a></li>
          <li><a href="#" className="hover:text-[#A8A8A8] transition-colors">Stake</a></li>
        </ul>
      </div>

      {/* Center Section: Search Bar */}
      <div className="relative hidden lg:flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tokens..."
            className="bg-[#1E1E1E] text-white text-sm px-4 pl-10 py-2 rounded-[50px] border border-[#292929] focus:outline-none focus:ring-2 focus:ring-[#4A4A4A] w-64"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#808080]" size={16} />
        </div>
      </div>

      {/* More Dropdown */}
      <ul className="hidden lg:flex space-x-6 text-[#808080] text-sm font-medium">
        <li className="relative">
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className="flex items-center space-x-2 hover:text-[#A8A8A8] transition-colors"
          >
            <span>More</span>
            <FiChevronDown className={`transform transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
          </button>
          {moreOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-[#0D0D0D]/80 backdrop-blur-xl text-white rounded-lg shadow-lg py-2">
              <li>
                <a href="#" className="block px-4 py-2.5 hover:bg-[#00FF88]/10 relative group">
                  <span>Portfolio</span>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00FF88] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-2.5 hover:bg-[#00FF88]/10 relative group">
                  <span>Analytics</span>
                  <FaExternalLinkAlt size={12} />
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00FF88] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2.5 hover:bg-[#00FF88]/10 relative group">
                  <span>Governance</span>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00FF88] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-between px-4 py-2.5 hover:bg-[#00FF88]/10 relative group">
                  <span>Docs</span>
                  <FaExternalLinkAlt size={12} />
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00FF88] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <button
            className="text-white p-2 hover:bg-[#292929] rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <button className="text-white p-2 hover:bg-[#292929] rounded-lg transition-colors">
            <FiSearch size={24} />
          </button>
        </div>

        <div className="flex items-center">
          <div className="flex items-center mr-2">
            <button className="flex items-center space-x-1 p-1.5 hover:bg-[#1E1E1E] rounded-lg transition-colors">
              <div className="w-6 h-6 bg-[#1E1E1E] rounded-full flex items-center justify-center text-[#808080]">
                <SiHedera size={14} />
              </div>
              <span className="text-white text-sm">$0.2491</span>
            </button>
           
            <button className="flex items-center space-x-1 p-1.5 hover:bg-[#1E1E1E] rounded-lg transition-colors">
              <div className="w-6 h-6 bg-[#1E1E1E] rounded-full flex items-center justify-center">
                <img src="/images/logo.webp" alt="Token Logo" className="w-4 h-4" />
              </div>
              <span className="text-white text-sm">$0.0544</span>
            </button>
          </div>

          <button className="p-2 bg-black text-[#00FF88] rounded-[50px] border border-[#00FF88] hover:bg-[#00FF88]/10 transition-colors">
            <BiWallet size={24} className="text-[#00FF88]" />
          </button>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="hidden lg:flex items-center space-x-4">
        {/* Token Price Indicators */}
        <div className="flex items-center mr-4">
          <button className="flex items-center space-x-1 p-1.5 hover:bg-[#1E1E1E] rounded-lg transition-colors">
            <div className="w-6 h-6 bg-[#1E1E1E] rounded-full flex items-center justify-center text-[#808080]">
              <SiHedera size={14} />
            </div>
            <span className="text-white text-sm">$0.2491</span>
          </button>
         
          <button className="flex items-center space-x-1 p-1.5 hover:bg-[#1E1E1E] rounded-lg transition-colors">
            <div className="w-6 h-6 bg-[#1E1E1E] rounded-full flex items-center justify-center">
              <img src="/images/logo.webp" alt="Token Logo" className="w-4 h-4" />
            </div>
            <span className="text-white text-sm">$0.0544</span>
          </button>
        </div>

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 hover:bg-[#292929] rounded-lg transition-colors"
        >
          {isDarkMode ? <BsSun className="text-[#E5E5E5]" /> : <BsMoon className="text-[#E5E5E5]" />}
        </button>

        <button className="px-4 py-2 bg-black text-[#00FF88] rounded-[50px] border border-[#00FF88] hover:bg-[#00FF88]/10 transition-colors text-sm font-medium flex items-center space-x-2">
          <BiWallet size={18} className="text-[#00FF88]" />
          <span>Connect Wallet</span>
          <div className="border-l border-[#00FF88] ml-2 pl-2">
            <FiSettings className="text-[#00FF88] w-4 h-4 hover:rotate-90 transition-transform duration-300" />
          </div>
        </button>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <div
        className={`absolute top-full left-0 w-full bg-[#0D0D0D]/80 backdrop-blur-xl border-t border-[#1E1E1E] lg:hidden transform transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Logo Section */}
        <div className="px-4 py-4 border-b border-[#1E1E1E]/50">
          <div className="flex items-center">
            <img src="/images/logo.webp" alt="Saucer Swap Logo" className="h-8 w-auto" />
            <span className="ml-2 text-lg font-bold">
              <span className="text-[#00FF88]">Saucer</span><span className="text-white">Swap</span>
            </span>
          </div>
        </div>

        <div className="px-4 py-4">
          {/* Primary Navigation */}
          <ul className="space-y-4 mb-6">
            <li><a href="#" className="block text-white text-base hover:text-[#A8A8A8] transition-colors">Swap</a></li>
            <li><a href="#" className="block text-white text-base hover:text-[#A8A8A8] transition-colors">Liquidity</a></li>
            <li><a href="#" className="block text-white text-base hover:text-[#A8A8A8] transition-colors">Stake</a></li>
            <li><a href="#" className="block text-white text-base hover:text-[#A8A8A8] transition-colors">Bridge</a></li>
            <li><a href="#" className="block text-white text-base hover:text-[#A8A8A8] transition-colors">Portfolio</a></li>
            <li><a href="#" className="block text-white text-base hover:text-[#A8A8A8] transition-colors">Governance</a></li>
          </ul>

          {/* Secondary Navigation */}
          <ul className="space-y-3 border-t border-[#1E1E1E]/50 pt-4 mb-6">
            <li><a href="#" className="block text-[#808080] text-sm hover:text-[#A8A8A8] transition-colors">Docs & Help</a></li>
            <li><a href="#" className="block text-[#808080] text-sm hover:text-[#A8A8A8] transition-colors">Analytics</a></li>
            <li><a href="#" className="block text-[#808080] text-sm hover:text-[#A8A8A8] transition-colors">SDKs & APIs</a></li>
            <li><a href="#" className="block text-[#808080] text-sm hover:text-[#A8A8A8] transition-colors">Testnet</a></li>
            <li><a href="#" className="block text-[#808080] text-sm hover:text-[#A8A8A8] transition-colors">Migrate</a></li>
            <li><a href="#" className="block text-[#808080] text-sm hover:text-[#A8A8A8] transition-colors">Support</a></li>
          </ul>

          {/* Settings and TVL Section */}
          <div className="border-t border-[#1E1E1E]/50 pt-4">
            <div className="flex flex-col items-center mb-6">
              <FiSettings size={28} className="text-white hover:text-[#A8A8A8] transition-colors" />
            </div>
            <div className="text-[#808080] text-sm">
              <p>Total Value Locked</p>
              <p className="text-white text-lg font-medium mt-1">$80,579,224</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
