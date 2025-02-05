"use client";

import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { useTheme } from "next-themes";

import { config } from "@/lib/wagmi";

import "@rainbow-me/rainbowkit/styles.css";

const client = new QueryClient();

const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider
          locale="en"
          theme={theme === "light" ? undefined : darkTheme()}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Web3Provider;
