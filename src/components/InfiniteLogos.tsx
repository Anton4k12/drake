import React from "react";
import { motion } from "motion/react";

const CompanyLogoData: Array<{ src: any; alt: string; link: string }> = [
  { src: "/images/1logo.svg", alt: "TON", link: "https://ton.org" },
  { src: "/images/2logo.svg", alt: "Bitcoin", link: "https://bitcoin.org" },
  { src: "/images/3logo.svg", alt: "TRON", link: "https://tron.network" },
  { src: "/images/4logo.svg", alt: "Solana", link: "https://solana.com" },
  { src: "/images/5logo.svg", alt: "Tether", link: "https://tether.to" },
  { src: "/images/6logo.svg", alt: "Cardano", link: "https://cardano.org" },
];

const InfiniteScrollingLogosAnimation = () => {
  return (
    <div className="container">
      <div className="relative flex overflow-hidden">
        <motion.div
          transition={{
            duration: 80,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          className="flex flex-none items-center gap-10 pr-16 lg:gap-16"
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {CompanyLogoData.map(({ src, alt, link }) => (
                <a target="_blank" href={link}>
                  <img
                    key={alt}
                    src={src}
                    alt={alt}
                    className="h-fit w-28 flex-none flex-grow-0 cursor-pointer grayscale hover:grayscale-0"
                  />
                </a>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScrollingLogosAnimation;
