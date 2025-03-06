import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
      active ? "bg-saucer-primary text-black" : "text-[#808080] hover:text-white"
    }`}
  >
    {children}
  </button>
);

const TokenCard = ({ token, type }) => (
  <div className="border border-transparent bg-gradient-to-r from-saucer-primary/20 via-transparent to-saucer-primary/20 rounded-xl p-3 sm:p-4 mb-3 hover:from-saucer-primary/30 hover:to-saucer-primary/30 transition-all">
    <div className="grid grid-cols-4 items-center">
      {/* Token Info */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src={token.icon} alt={token.name} className="w-6 sm:w-8 h-6 sm:h-8 rounded-full" />
          <span className="text-white text-sm sm:text-base font-medium">{token.name}</span>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col items-center">
        <span className="text-[#808080] text-[10px] sm:text-sm">Price</span>
        <span className="text-white text-xs sm:text-base">${token.price}</span>
      </div>

      {/* Change */}
      <div className="flex flex-col items-center">
        <span className="text-[#808080] text-[10px] sm:text-sm">Change (24h)</span>
        <div className={`flex items-center gap-1 ${token.isPositive ? "text-saucer-primary" : "text-red-500"}`}>
          {token.isPositive ? <FaArrowUp className="w-2.5 sm:w-3 h-2.5 sm:h-3" /> : <FaArrowDown className="w-2.5 sm:w-3 h-2.5 sm:h-3" />}
          <span className="text-xs sm:text-sm">{token.change}</span>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-end">
        <button className="px-3 sm:px-4 py-2 bg-saucer-primary text-black rounded-full text-xs sm:text-sm font-bold hover:bg-saucer-hover transition-colors">
          {type === "pools" ? "Earn" : "Trade"}
        </button>
      </div>
    </div>
  </div>
);

const TokenSections = () => {
  const [activeTab, setActiveTab] = useState("hot");

  const tokens = {
    hot: [
      { name: "LINK", icon: "/images/tokens/BSL.webp", price: "0.0719", change: "+2.34%", isPositive: true },
      { name: "HERT", icon: "/images/tokens/hert.webp", price: "1.00", change: "+0.01%", isPositive: true },
      { name: "AuBAR", icon: "/images/tokens/Aubar.webp", price: "0.0539", change: "-1.24%", isPositive: false },
      { name: "gib", icon: "/images/tokens/gib.webp", price: "0.0123", change: "+12.30%", isPositive: true },
      { name: "BSL", icon: "/images/tokens/BSL.webp", price: "0.0719", change: "-3.45%", isPositive: false },
    ],
    new: [
      { name: "USDT", icon: "/images/tokens/hert.webp", price: "1.00", change: "+0.02%", isPositive: true },
      { name: "WBTC", icon: "/images/tokens/gib.webp", price: "52,341.23", change: "+5.67%", isPositive: true },
      { name: "WETH", icon: "/images/tokens/Aubar.webp", price: "3,124.45", change: "-2.34%", isPositive: false },
      { name: "DAI", icon: "/images/tokens/BSL.webp", price: "1.00", change: "+0.01%", isPositive: true },
      { name: "LINK", icon: "/images/tokens/hert.webp", price: "18.45", change: "+8.90%", isPositive: true },
    ],
    pools: [
      { name: "HBAR-USDC", icon: "/images/tokens/gib.webp", price: "2.45M", change: "+15.34%", isPositive: true },
      { name: "SAUCE-HBAR", icon: "/images/tokens/hert.webp", price: "1.2M", change: "+8.67%", isPositive: true },
      { name: "USDC-USDT", icon: "/images/tokens/BSL.webp", price: "5.6M", change: "+3.21%", isPositive: true },
      { name: "WBTC-USDC", icon: "/images/tokens/hert.webp", price: "3.8M", change: "-2.45%", isPositive: false },
      { name: "WETH-USDC", icon: "/images/tokens/Aubar.webp", price: "2.9M", change: "+6.78%", isPositive: true },
    ],
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">Trending</h2>
      <div className="flex justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
        {["hot", "new", "pools"].map((tab) => (
          <TabButton key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </TabButton>
        ))}
      </div>

      <div>{tokens[activeTab].map((token, index) => <TokenCard key={index} token={token} type={activeTab} />)}</div>
    </div>
  );
};

export default TokenSections;
