import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import { AuroraText } from "@/components/ui/aurora-text";
import { MagicCard } from "@/components/ui/magic-card";
import { DotPattern } from "@/components/ui/dot-pattern";

import { cn } from "@/lib/utils";

import shield from "@/assets/images/shield.png";
import fast from "@/assets/images/fast.png";
import currency from "@/assets/images/currency.png";
import AnimationWrapper from "../ui/animation-wrapper";

const benefits = [
  {
    title: "Multi Currency Support",
    desc: "store and manage multi crypto currencies in one wallet",
    icon: currency,
  },
  {
    title: "Fast Transaction",
    desc: "Instanly sent and receive cryptocurrency worldwide without delays",
    icon: fast,
  },
  {
    title: "High-Level Security",
    desc: "Your assets are protected with multi-layer security and two factor authentication",
    icon: shield,
  },
];

const FeatureSection = () => {
  const { theme } = useTheme();
  return (
    <section
      id="features"
      className="relative flex flex-col items-center justify-center w-full min-h-screen px-8 md:px-24"
    >
      <h2 className="text-2xl font-bold md:text-6xl">
        Why <AuroraText>Ethereal?</AuroraText>
      </h2>
      <div className="relative z-10 grid w-full grid-cols-1 gap-4 mt-6 md:mt-24 md:grid-cols-3">
        {benefits.map((item, i) => (
          <AnimationWrapper key={i}>
            <MagicCard
              className="flex-col items-center justify-center p-8 overflow-hidden cursor-pointer"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <Image
                src={item.icon}
                width={100}
                height={100}
                className="absolute opacity-50 -top-16 -right-16 size-36 grayscale"
                alt="currency"
              />
              <h3 className="relative mt-12 text-2xl font-bold">
                {item.title}
              </h3>
              <p className="relative">{item.desc}</p>
            </MagicCard>
          </AnimationWrapper>
        ))}
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
      />
    </section>
  );
};

export default FeatureSection;
