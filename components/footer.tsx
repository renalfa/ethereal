import React from "react";
import { Instagram, Twitter, Twitch } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";

import { cn } from "@/lib/utils";
import { siteFooterData } from "@/lib/data";


const sosmeds = [{ icon: Instagram }, { icon: Twitter }, { icon: Twitch }];

const Footer = () => {
  return (
    <div className="relative w-full py-8 border-t h-fit md:h-56 border-t-neutral-100 dark:border-t-neutral-800">
      <DotPattern
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] "
        )}
      />

      <div className="flex flex-col items-center gap-8 px-8 md:flex-row md:px-24">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold uppercase ">
            {siteFooterData.name}
          </h1>
          <div className="flex items-center gap-6">
            {sosmeds.map((item, i) => (
              <item.icon className="transition-all duration-300 cursor-pointer hover:text-blue-500 hover:rotate-12" />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 md:ml-auto">
          <h2 className="text-sm font-semibold tracking-wide uppercase">
            section
          </h2>
          {siteFooterData.section.map((item, i) => (
            <p key={i} className="text-sm font-light tracking-wide uppercase">
              {item}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-2 ml-12">
          <h2 className="text-sm font-semibold tracking-wide uppercase">
            contact
          </h2>
          {siteFooterData.contact.map((item, i) => (
            <p className="text-sm font-light tracking-wide">
              <span className="font-bold">{item.label} :</span> {item.value}
            </p>
          ))}
        </div>
      </div>
      <p className="mt-12 text-xs font-light text-center">
        © 2025 Ethereal. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
