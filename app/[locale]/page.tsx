'use client'

import React from "react";
import Image from "next/image";

import AvisClients from "@/components/avisClients";
import Section from "@/components/section";
import InscriptionForm from "@/components/page/home/inscriptionForm";
import CarouselMedecins from "@/components/page/home/carouselMedecins";
import {ButtonLink} from "@/components/buttonLink";
import {useTranslations} from "next-intl";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
      <>
          <Section bgSrc='/1.webp'
                   className="flex flex-col items-center justify-center p-8 min-h-screen relative mb-8">
              <h1 className="inline-block max-w-xl text-center justify-center tracking-tight inline text-[2.3rem] lg:text-5xl z-1">
                  {t.rich('title', {
                    semibold: (chunks) =>  <><br/><span className='font-semibold'>{chunks}</span></>
                  })}
              </h1>
          </Section>

          <Section bgSrc='/irm-bg.webp' bgOpacity="opacity-75"
                   className='flex flex-col justify-center py-8 min-h-screen relative mb-8'>
              <div className='px-8 ml-0 md:ml-36 z-1 flex flex-col items-start gap-12 relative'>
                  <h2
                      className="text-[2.3rem] lg:text-5xl">
                      {t.rich('ia-section-title', {
                          semibold: (chunks) =>  <><br/><span className='font-semibold'>{chunks}</span></>
                      })}
                  </h2>
                  <div className='flex flex-col gap-8'>
                      <div className='flex items-center gap-4'>
                          <Image width={75} height={75} src="/radiation.svg" alt=""/>
                          <p className='text-[1.5rem]'>
                              {t.rich('ia-section-p1', {
                                  semibold: (chunks) =>  <span className='font-semibold'>{chunks}</span>
                              })}
                          </p>
                      </div>
                      <div className='flex items-center gap-4'><Image width={75} height={75} src="/irm.svg" alt=""/>
                          <p className='text-[1.5rem]'>
                              {t.rich('ia-section-p2', {
                                  semibold: (chunks) =>  <span className='font-semibold'>{chunks}</span>
                              })}
                          </p>
                      </div>
                  </div>
              </div>
          </Section>

          <Section id='book-a-scan'>
              <h2
                  className="inline-block max-w-xl text-center justify-center tracking-tight inline text-[2.3rem] lg:text-5xl mb-8 z-1">
                  {t.rich('book-a-scan-section-title', {
                      semibold: (chunks) =>  <span className='font-semibold'>{chunks}</span>
                  })}
              </h2>

              <InscriptionForm/>
          </Section>

          <section className="flex flex-col items-center justify-center py-8 min-h-screen relative mb-8 p-8">
              <h2 className="inline-block max-w-xl text-center justify-center tracking-tight inline text-[2.3rem] lg:text-5xl z-1 mb-16">
                  {t.rich('price-section-title', {
                      semibold: (chunks) =>  <span className='font-semibold'>{chunks}</span>
                  })}
              </h2>

              <div className='w-2/3 flex flex-col md:flex-row gap-8 justify-around z-1 mb-8'>
                  <p className='text-2xl'><span className='font-semibold'>{t('price-section-price-title')}</span><br/>{t('price-section-price')}</p>
                  <p className='text-2xl'><span className='font-semibold'>{t('price-section-duration-title')}</span><br/>{t('price-section-duration')}</p>
              </div>

              <ButtonLink href='/#book-a-scan' variant='transparent'>{t('price-section-call-to-action')}</ButtonLink>

              <Image src="/1.webp" fill={true} alt=""
                     className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90% opacity-45'/>
          </section>

          <Section bgSrc='/3.webp' bgOpacity='opacity-50'
                   className="flex flex-col text-center items-center justify-center py-8 min-h-screen relative mb-8 px-8">
              <h2 className="mb-8 text-[2.3rem] lg:text-5xl z-1">
                  {t.rich('carousel-section-title', {
                      semibold: (chunks) =>  <><br/><span className='font-semibold'>{chunks}</span></>
                  })}
              </h2>

              <CarouselMedecins/>
          </Section>

          <Section bgSrc={"/ai-bg.webp"} bgOpacity="opacity-75">
              <h2 className="px-8 text-center text-[2.3rem] lg:text-5xl z-1">
                  {t.rich('ai-power-section-title', {
                      semibold: (chunks) =>  <><br/><span className='font-semibold'>{chunks}</span></>
                  })}
              </h2>
          </Section>

          <Section bgSrc='/3.webp' bgOpacity='opacity-50'
                   className="relative flex flex-col md:grid md:grid-cols-4 md:grid-rows-5 gap-12 px-8 md:px-80 mx-auto my-16">
              <AvisClients/>
          </Section>
      </>
  );
}
