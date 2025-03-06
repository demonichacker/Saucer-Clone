import React from 'react';
import Stars from './Stars';
import { TypeAnimation } from 'react-type-animation';
import { FaDiscord, FaXTwitter, FaReddit, FaTelegram, FaYoutube } from 'react-icons/fa6';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-dark-900 pt-24">
      <Stars />
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-saucer-primary/20 via-transparent to-saucer-primary/20 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.1)_0%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="relative z-10 text-center lg:text-left w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-saucer-primary">Saucer</span>
              <span className="text-white">Swap</span>
            </h1>
            <div className="flex flex-col text-lg md:text-2xl text-white mb-8">
              <span className="font-bold mb-3">Your Gateway To:</span>
              <TypeAnimation
                sequence={[
                  'Hedera DeFi',
                  2000,
                  'Real Yields',
                  2000,
                  'Concentrated Liquidity',
                  2000,
                  'Efficient Markets',
                  2000,
                  'Low Fixed Fees',
                  2000,
                  'Self-Custody',
                  2000,
                  'Fair Order Flow',
                  2000,
                  'Greener Pastures',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-saucer-primary font-bold"
              />
            </div>

            <p className="text-[#808080] text-sm md:text-base mb-8">
              An open source and non-custodial crypto trading protocol on the Hedera network
            </p>

            <div className="inline-flex items-center space-x-4 rounded-full border border-dark-700 py-2 px-4 bg-dark-800/50 backdrop-blur-sm">
              <button className="px-3 py-1.5 bg-saucer-primary text-black text-sm font-bold rounded-full hover:bg-saucer-hover transition-colors">
                Get Started
              </button>
              <div className="flex items-center space-x-3">
                <a href="#" className="text-[#808080] hover:text-white transition-colors">
                  <FaDiscord size={18} />
                </a>
                <a href="#" className="text-[#808080] hover:text-white transition-colors">
                  <FaXTwitter size={18} />
                </a>
                <a href="#" className="text-[#808080] hover:text-white transition-colors">
                  <FaReddit size={18} />
                </a>
                <a href="#" className="text-[#808080] hover:text-white transition-colors">
                  <FaTelegram size={18} />
                </a>
                <a href="#" className="text-[#808080] hover:text-white transition-colors">
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Saturn Image */}
          <div className="relative z-10 w-full lg:w-1/2">
            <img 
              src="/images/saturn_saucelings.png" 
              alt="Saturn Saucelings" 
              className="w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
