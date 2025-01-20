import { motion } from "framer-motion";
import React from "react";

const CompanyLogoData = [
  { src: "/images/1logo.svg", alt: "TON", link: "https://ton.org" },
  { src: "/images/2logo.svg", alt: "Bitcoin", link: "https://bitcoin.org" },
  { src: "/images/3logo.svg", alt: "TRON", link: "https://tron.network" },
  { src: "/images/4logo.svg", alt: "Solana", link: "https://solana.com" },
  { src: "/images/5logo.svg", alt: "Tether", link: "https://tether.to" },
  { src: "/images/6logo.svg", alt: "Cardano", link: "https://cardano.org" },
];

const InfiniteScrollingLogosAnimation = () => {
  // Create 4 copies of the logos to ensure smooth infinite scrolling
  const duplicatedLogos = [
    ...CompanyLogoData,
    ...CompanyLogoData,
    ...CompanyLogoData,
    ...CompanyLogoData,
  ];

  return (
    <div className="container p-5">
      <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:content-['']">
        <motion.div
          animate={{
            x: [0, -1920], // Adjust this value based on your container width
          }}
          transition={{
            duration: 80,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-none items-center gap-10 pr-16 lg:gap-16"
        >
          {duplicatedLogos.map(({ src, alt }, index) => (
            <img
              key={`${alt}-${index}`}
              src={src}
              alt={alt}
              className="h-fit w-28 flex-none flex-grow-0 cursor-pointer"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScrollingLogosAnimation;
