import React from "react";
import dynamic from "next/dynamic";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ModeToggle } from "@/components/mode-toggle";
import { siteNavbarData } from "@/lib/data";

const MobileMenu = dynamic(() => import("@/components/mobile-menu"), {
  loading: () => <p>loading...</p>,
});

const Navbar = () => {
  const handleClickTab = (href: string) => {
    if (document.getElementById(href)) {
      document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-lg">
      <div className="flex items-center h-20 px-8 md:px-24">
        <h1
          onClick={() => handleClickTab("home")}
          className="text-xl font-bold uppercase cursor-pointer md:text-3xl"
        >
          {siteNavbarData.name}
        </h1>
        <div className="items-center hidden gap-8 ml-auto md:flex">
          {siteNavbarData.navMenu.map((menu) => (
            <p
              key={menu.label}
              className="text-xs font-light uppercase cursor-pointer"
              onClick={() => handleClickTab(menu.href)}
            >
              {menu.label}
            </p>
          ))}
        </div>
        <div className="items-center hidden gap-4 ml-8 md:flex">
          <ModeToggle />
          <ConnectButton
            accountStatus="avatar"
            chainStatus="none"
            showBalance={false}
          />
        </div>
        <div className="flex items-center gap-4 ml-auto md:hidden">
          <ModeToggle />

          <MobileMenu
            data={siteNavbarData.navMenu}
            handleClick={handleClickTab}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
