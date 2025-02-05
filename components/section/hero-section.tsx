import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { AuroraText } from "@/components/ui/aurora-text";

import { siteHeroData } from "@/lib/data";

import accent from "@/assets/images/accent.png";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useGSAP(
    () => {
      const acc = gsap.timeline({
        scrollTrigger: {
          trigger: ".accent-animate",
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: false,
        },
      });

      acc.to(".accent-animate", {
        x: 120,
      });
    },
    { dependencies: [] }
  );

  return (
    <section id="home" className="relative">
      <AuroraBackground className="relative">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center justify-center gap-4 px-4"
        >
          <h1 className="max-w-3xl text-3xl font-bold text-center md:text-7xl dark:text-white">
            {siteHeroData.tagline}
          </h1>
          <p className="max-w-2xl py-4 text-base text-center font-extralight dark:text-neutral-200 ">
            Ethereal is a <AuroraText>sleek</AuroraText>,{" "}
            <AuroraText>futuristic</AuroraText> Web3 platform with{" "}
            <AuroraText>seamless</AuroraText> wallet connectivity, stunning
            design, and <AuroraText>secure</AuroraText> decentralized
            integration for NFTs and DeFi.
          </p>
          <ConnectButton showBalance />
        </motion.div>
      </AuroraBackground>
      <Image
        src={accent}
        width={512}
        height={512}
        alt="accent"
        priority
        className="accent-animate absolute rotate-90 size-96 md:size-[1080px] -bottom-44 md:-bottom-[55%] -left-1/3"
      />
    </section>
  );
};

export default HeroSection;
