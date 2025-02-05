import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { TypingAnimation } from "@/components/ui/typing-animation";

import accent2 from "@/assets/images/accent-2.png";
import { siteExploreData } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const ExploreSection = () => {
  useGSAP(
    () => {
      const acc = gsap.timeline({
        scrollTrigger: {
          trigger: ".accent2-animate",
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: false,
        },
      });

      acc.to(".accent2-animate", {
        x: -100,
      });
    },
    { dependencies: [] }
  );

  return (
    <section
      id="explore"
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-8 md:px-24 bg-neutral-50 dark:bg-neutral-900"
    >
      <Image
        src={accent2}
        width={512}
        height={512}
        priority
        alt="accent"
        className="accent2-animate absolute rotate-90 size-56 md:size-[512px] -top-24 md:-top-40 right-0 md:-right-24"
      />
      <TypingAnimation className="text-sm font-light text-neutral-700 dark:text-neutral-300">
        {siteExploreData.text}
      </TypingAnimation>
      <HeroVideoDialog
        className="max-w-4xl mt-6 shadow-2xl rounded-2xl"
        animationStyle="top-in-bottom-out"
        videoSrc={siteExploreData.srcVideo}
        thumbnailSrc={siteExploreData.srcThumbnail}
        thumbnailAlt="Hero Video"
      />
      <InteractiveHoverButton className="mt-12">
        {siteExploreData.cta}
      </InteractiveHoverButton>
    </section>
  );
};

export default ExploreSection;
