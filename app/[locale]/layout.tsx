import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { Providers } from "../providers";

import { siteConfig } from "@/config/site";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";
import Image from "next/image";
import {ButtonLink} from "@/components/buttonLink";
import {getLocale, getMessages} from 'next-intl/server';
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {notFound} from "next/navigation";
import {locales} from "@/i18n/config";
import {routing} from "@/i18n/routing";

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

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
      <NextIntlClientProvider>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col w-full min-h-screen">
            <header role='banner' className='sticky top-0 z-50'>
              <Navbar />
            </header>
            <main className="w-full" id='root'>
              {children}

              <section className="flex flex-col items-center justify-center py-8 min-h-screen mb-8 relative">
                <h2 className="text-center text-[2.3rem] lg:text-5xl z-1  leading-[110%] tracking-normal">
                  La détéction précoce <span className='font-semibold text-white'>sauve des vies.</span>
                </h2>
                <ButtonLink variant='transparent' href='/#book-a-scan' className='text-sm mt-8 uppercase'>Réserver un scan</ButtonLink>

                <Image src="/sunset.webp" alt="" fill={true}
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90%'/>
              </section>

            </main>
            <Footer/>
          </div>
        </Providers>
      </NextIntlClientProvider>
  );
}
