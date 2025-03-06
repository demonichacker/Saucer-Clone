import React from 'react';
import { FaCog } from 'react-icons/fa';

const SupportedBy = () => {
  return (
    <div className="relative w-full bg-black">
      <div className="absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-transparent to-black"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        {/* THE HBAR FOUNDATION */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Supported By</h2>
            <h3 className="text-4xl font-bold text-saucer-primary mt-2">THE HBAR FOUNDATION</h3>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
            <div className="flex-1 text-center md:text-left">
              <p className="text-white/80 text-lg leading-relaxed">
                SaucerSwap is proudly partnered with the HBAR <br />
                Foundation, an organization dedicated to helping <br /> builders and
                creators bring their ideas to market. <br /> The project is a
                grant recipient, which was awarded in  <br />July 2022 and  
                served to incentivize liquidity <br /> on the Hedera network. 
              </p>
            </div>
            <div className="flex-shrink-0 md:pr-32">
              <img
                src="/images/hbar.svg"
                alt="Hashgraph Association"
                className="w-full md:w-[400px] h-auto object-contain group-hover:brightness-125 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Second Hashgraph Association */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Supported By</h2>
            <h3 className="text-4xl font-bold text-saucer-primary mt-2">THE HASHGRAPH ASSOCIATION</h3>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
            <div className="flex-1 text-center md:text-left">
              <p className="text-white/80 text-lg leading-relaxed">
                SaucerSwap is proudly partnered with The Hashgraph <br />
                Association, a non-profit organization committed to <br />
                driving the broad adoption of Hedera-powered <br />
                enterprise-grade solutions and decentralized <br />
                applications. This collaboration has been crucial in <br />
                supporting SaucerSwap's mission to innovate and <br />
                deliver value to users within the Hedera ecosystem.
              </p>
            </div>
            <div className="flex-shrink-0 md:pr-32">
              <img
                src="/images/graph.png"
                alt="Hashgraph Association"
                className="w-full md:w-[400px] h-auto object-contain group-hover:brightness-125 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* HACKEN */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Supported By</h2>
            <h3 className="text-4xl font-bold text-saucer-primary mt-2">HACKEN</h3>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
            <div className="flex-1 text-center md:text-left">
              <p className="text-white/80 text-lg leading-relaxed">
                SaucerSwap V1 and staking contracts have been <br />
                audited by Hacken, a leading blockchain security <br />
                company with an essential focus on auditing, <br />
                crowdsourced security, pen-testing, monitoring, <br />
                and analytics.
              </p>
            </div>
            <div className="flex-shrink-0 md:pr-32">
              <img
                src="/images/hack.png"
                alt="DeFi Alliance"
                className="w-full md:w-[400px] h-auto object-contain group-hover:brightness-125 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* OMNISCIA */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Supported By</h2>
            <h3 className="text-4xl font-bold text-saucer-primary mt-2">OMNISCIA</h3>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
            <div className="flex-1 text-center md:text-left">
              <p className="text-white/80 text-lg leading-relaxed">
                SaucerSwap V2 contracts have been audited by Omniscia, <br />
                a decentralized team of experienced smart contract  <br />
                auditors & developers with deep expertise building <br />
                and securing complex decentralized networks and <br />
                applications. Omniscia has protected over <br />
                $65 billion in assets.
              </p>
            </div>
            <div className="flex-shrink-0 md:pr-32">
              <img
                src="/images/omi.png"
                alt="omi"
                className="w-full md:w-[400px] h-auto object-contain group-hover:brightness-125 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportedBy;
