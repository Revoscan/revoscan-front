import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";
import Image from "next/image";
import {ButtonLink} from "@/components/buttonLink";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-white bg-[#100a18] font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col w-full min-h-screen">
            <header role='banner' className='sticky top-0 z-50'>
              <Navbar />
            </header>
            <main className="w-full" id='root'>
              {children}

              <section className="flex flex-col items-center justify-center py-8 min-h-screen mb-8 relative">
                <h2 className="inline-block max-w-xl text-center justify-center tracking-tight inline text-[2.3rem] lg:text-5xl z-1">
                  La détéction précoce <span className='font-semibold'>sauve des vies.</span>
                </h2>
                <ButtonLink variant='transparent' href='/#book-a-scan' className='text-sm mt-8'>Réserver un scan</ButtonLink>

                <Image src="/sunset.webp" alt="" fill={true}
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90%'/>
              </section>

            </main>
            <Footer/>
          </div>
        </Providers>
      </body>
    </html>
  );
}
