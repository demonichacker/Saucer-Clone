import React from 'react';
import { FaDiscord, FaXTwitter, FaReddit, FaTelegram, FaYoutube } from 'react-icons/fa6';

const socialLinks = [
  { id: 1, icon: <FaDiscord className="w-8 h-8" />, name: 'Discord', link: 'https://discord.gg/saucerswap' },
  { id: 2, icon: <FaXTwitter className="w-8 h-8" />, name: 'X', link: 'https://twitter.com/SaucerSwapLabs' },
  { id: 3, icon: <FaReddit className="w-8 h-8" />, name: 'Reddit', link: 'https://reddit.com/saucerswap' },
  { id: 4, icon: <FaTelegram className="w-8 h-8" />, name: 'Telegram', link: 'https://t.me/saucerswap' },
  { id: 5, icon: <FaYoutube className="w-8 h-8" />, name: 'YouTube', link: 'https://youtube.com/@saucerswap' }
];

const JoinCommunity = () => {
  return (
    <div className="relative w-full bg-black">
      {/* Matching the SupportedBy fade-in effect */}
      <div className="absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-transparent to-black"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Join the Community</h2>

          {/* Grouped Icons in One Border */}
          <div className="mt-12 border border-saucer-primary rounded-lg p-6 inline-flex gap-8 bg-black/50">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-saucer-primary transition-all duration-300 hover:text-white hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;