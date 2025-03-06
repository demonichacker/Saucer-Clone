import React from 'react';

const StatsBox = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 border border-[#1E1E1E] rounded-3xl bg-[#0D0D0D]/50 backdrop-blur-sm">
        {/* First Row */}
        <div className="flex flex-col p-6">
          <span className="text-[#808080] text-base">Total Value Locked</span>
          <span className="text-white text-3xl font-medium mt-1">$81,306,584</span>
        </div>
        
        <div className="flex flex-col p-6">
          <span className="text-[#808080] text-base">Trade Volume</span>
          <span className="text-white text-3xl font-medium mt-1">$3,209,967,840</span>
        </div>
        
        <div className="flex flex-col p-6">
          <span className="text-[#808080] text-base">Market Cap</span>
          <span className="text-white text-3xl font-medium mt-1">$41,908,856</span>
        </div>
        
        {/* Second Row */}
        <div className="flex flex-col p-6">
          <span className="text-[#808080] text-base">Circulating SAUCE</span>
          <span className="text-white text-3xl font-medium mt-1">776,996,990</span>
        </div>
        
        <div className="flex flex-col p-6">
          <span className="text-[#808080] text-base">Staked SAUCE</span>
          <span className="text-white text-3xl font-medium mt-1">40.03%</span>
        </div>
        
        <div className="flex flex-col p-6">
          <span className="text-[#808080] text-base">All Time Trades</span>
          <span className="text-white text-3xl font-medium mt-1">8,788,324</span>
        </div>
      </div>
    </div>
  );
};

export default StatsBox;
