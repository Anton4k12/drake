import { motion } from "framer-motion";
import React from "react";

const CompanyLogoData = [
  { src: "/images/logo1v.png", alt: "logo1" },
  { src: "/images/logo2v.svg", alt: "logo2" },
  { src: "/images/logo3v.svg", alt: "logo3" },
  { src: "/images/logo5v.svg", alt: "logo5" },
  { src: "/images/logo7v.png", alt: "logo7" },
  { src: "/images/logo8v.png", alt: "logo8" },
  { src: "/images/logo9v.svg", alt: "logo9" },
  { src: "/images/logo10v.svg", alt: "logo10" },
  { src: "/images/logo12v.svg", alt: "logo12" },
  { src: "/images/logo14v.png", alt: "logo14" },
];

const InfiniteScrollingLogosAnimation = () => {
  const duplicatedLogos = [
    ...CompanyLogoData,
    ...CompanyLogoData,
    ...CompanyLogoData,
    ...CompanyLogoData,
  ];

  return (
    <div className="container p-5">
      <div className="relative flex w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:content-['']">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 80,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex min-w-full flex-nowrap items-center gap-10 pr-16 lg:gap-6"
        >
          {duplicatedLogos.map(({ src, alt }, index) => (
            <img
              key={`${alt}-${index}`}
              src={src}
              alt={alt}
              className="h-fit w-52 flex-none flex-grow-0 cursor-pointer rounded-3xl bg-white/[.08] px-6 py-4"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScrollingLogosAnimation;
