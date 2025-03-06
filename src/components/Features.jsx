import React from 'react';

const FeatureCard = ({ title, description, image, isSmall }) => (
  <div className="border border-transparent bg-gradient-to-r from-saucer-primary/20 via-transparent to-saucer-primary/20 rounded-xl hover:from-saucer-primary/30 hover:to-saucer-primary/30 transition-all mx-4">
    <div className={`flex flex-col h-full ${isSmall ? 'p-5' : 'p-7'}`}>
      <h3 className="text-white text-2xl font-bold mb-3">{title}</h3>
      {image && (
        <div className={`${isSmall ? 'my-4' : 'my-6'}`}>
          <img src={image} alt={title} className="w-full rounded-lg" />
        </div>
      )}
      <div className="border-t border-gray-700 my-4"></div>
      <p className="text-white text-base">{description}</p>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      title: "Swap Tokens",
      description: "Swap HBAR and HTS tokens in seconds with no counterparty risk.",
      image: "/images/features/home_swap.webp"
    },
    {
      title: "Provide Liquidity",
      description: "Provide token liquidity and earn swap fees. Constant product and concentrated pools available.",
      image: "/images/features/home_liquidity.webp"
    },
    {
      title: "Earn Token Incentive",
      description: "Stake liquidity to earn yield farming rewards in V1 or instantly begin earning LARI rewards in V2..",
      image: "/images/features/home_farm.webp"
    },
    {
      title: "Stake SAUCE",
      description: "Stake SAUCE to earn rewards from swap fees, HBAR native staking, and emissions with no risk of IL.",
      image: "/images/features/home_stake.webp"
    },
    {
      title: "Bridge Tokens",
      description: "Bridge tokens between Hedera and 11 blockchains via hashport, a secure interoperability solution.",
      image: "/images/features/home_bridge.webp"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
        {features.slice(0, 3).map((feature, index) => (
          <FeatureCard key={index} {...feature} isSmall={false} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {features.slice(3, 5).map((feature, index) => (
          <FeatureCard key={index} {...feature} isSmall={true} />
        ))}
      </div>
    </div>
  );
};

export default Features;
