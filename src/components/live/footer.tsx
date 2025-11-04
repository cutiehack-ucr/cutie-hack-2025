"use client";
import React from 'react';

const brickwallUrl = 'landing/brickwallFooter.svg';
const floorUrl = 'landing/floor.svg';
const treasureUrl = 'landing/treasure.svg';
const dragonUrl = 'landing/dragon.svg';

const blueBgColor = '#2A5262';

const INSTAGRAM_URL = 'https://www.instagram.com/acmhacksatucr/';
const LINKEDIN_URL = 'https://www.linkedin.com/company/acm-hacks-at-ucr/';
const EMAIL_URL = 'mailto:acmhacks.ucr@gmail.com';

const Footer = () => {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: blueBgColor }}
    >
      {/* --- Scene Container --- */}
      <div className="relative w-full">
        {/* Layer 1: Brick Wall (z-10) */}
        <img
          src={brickwallUrl}
          alt="Brick wall background"
          className="relative w-full h-auto z-10"
          aria-hidden="true"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />

        {/* Layer 2: Stone Floor (z-20) */}
        <img
          src={floorUrl}
          alt="Stone floor"
          className="absolute bottom-0 left-0 w-full h-auto z-20"
          aria-hidden="true"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />

        {/* Layer 3: Treasure Pile (z-30) */}
        <img
          src={treasureUrl}
          alt="Treasure pile with social media icons"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full z-30"
          aria-hidden="true"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />

        {/* Layer 4: Dragon (z-40) */}
        <img
          src={dragonUrl}
          alt="Sleeping Dragon"
          className="absolute bottom-[14%] left-1/2 -translate-x-[8%] sm:-translate-x-[8%] w-[35%] z-40"
          aria-hidden="true"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />

        {/* Layer 5: Link Overlay (z-50) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full z-50">
          {/* Instagram Link */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
            className="absolute w-[7%] h-[10%] sm:h-[10%] left-[46%] bottom-[47.5%] sm:bottom-[47.5%] rounded-full transition-opacity hover:opacity-80"
            style={{ textIndent: '-9999px' }}
          >
            Instagram
          </a>

          {/* LinkedIn Link */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our LinkedIn"
            className="absolute w-[7%] h-[9%] sm:h-[9%] left-[65%] bottom-[50%] sm:bottom-[50%] rounded-md transition-opacity hover:opacity-80"
            style={{ textIndent: '-9999px' }}
          >
            LinkedIn
          </a>

          {/* Mail Link */}
          <a
            href={EMAIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send us an email"
            className="absolute w-[8%] h-[8%] sm:h-[8%] left-[83.5%] bottom-[52%] sm:bottom-[52%] rounded-md transition-opacity hover:opacity-80"
            style={{ textIndent: '-9999px' }}
          >
            Email
          </a>
        </div>

        {/* Layer 6: Copyright Text (z-50) */}
        <div className="absolute bottom-[1%] right-4 px-4 z-50">
          <p className="text-right font-poppins text-white text-sm sm:text-lg drop-shadow-md">
            © 2025 Cutie Hack • Made with 💗 and 🪄 by ACM Hacks
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;