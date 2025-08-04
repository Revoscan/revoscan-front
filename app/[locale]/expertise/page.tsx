'use client'

import React from "react";
import Image from "next/image";

import {ButtonLink} from "@/components/buttonLink";
import ComiteScientifique from "@/components/comiteScientifique";
import GridExplorationComplete from "@/components/page/expertise/gridExplorationComplete";
import ListBullet from "@/components/ListBullet";
import {useTranslations} from "next-intl";

export default function ExpertisePage() {
    const t = useTranslations('ExpertisePage');

    return (
        <>
            <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
                <h1 className="text-4xl font-medium z-1 text-center  leading-[105%] tracking-normal">{t('title')}</h1>
                <Image src="/squelette-1.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90%'/>
            </section>
            <section className="relative flex flex-col items-center justify-center min-h-screen bg-black">
                <h2 className="text-4xl font-medium z-1 text-center leading-[105%] tracking-normal text-[#BABABA]">
                    {t.rich('subtitle', {
                        blanc: (chunks) => <><span className='text-white'>{chunks}</span><br/></>
                    })}
                </h2>
                <Image src="/squelette-2.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90%'/>
            </section>
            <section className="relative flex flex-col justify-center items-center py-8 min-h-screen bg-black relative mb-8 mask-b-from-70% mask-b-to-90%">
                <div className='self-end mr-0 md:mr-36 z-1 flex flex-col px-8'>
                    <h2 className="text-center md:text-left leading-[105%] tracking-normal inline text-[2.3rem] lg:text-5xl mb-12 text-[#BABABA]">
                        {t.rich('detection-section-title', {
                            blanc: (chunks) => <><span className='text-white'>{chunks}</span><br/></>
                        })}
                    </h2>
                    <div className='flex flex-col gap-8'>
                        <div className='flex items-center gap-4'><Image width={75} height={75} src="/radiation.svg" alt=""/>
                            <p className='text-[1.5rem] text-[#BABABA]'>
                                {t.rich('detection-section-p1', {
                                    semibold: (chunks) => <span className='font-bold'>{chunks}</span>
                                })}
                            </p>
                        </div>
                        <div className='flex items-center gap-4'><Image width={75} height={75} src="/irm.svg" alt=""/>
                            <p className='text-[1.5rem] text-[#BABABA]'>
                                {t.rich('detection-section-p2', {
                                    semibold: (chunks) => <span className='font-bold'>{chunks}</span>
                                })}
                            </p>
                        </div>
                        <div className='flex items-center gap-4'><Image width={75} height={75} src="/picto-ia.svg" alt=""/>
                            <p className='text-[1.5rem] text-[#BABABA]'>
                                {t.rich('detection-section-p3', {
                                    semibold: (chunks) => <span className='font-bold'>{chunks}</span>
                                })}
                            </p>
                        </div>
                    </div>

                </div>
                <Image src="/4.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90%'/>
            </section>
            <section className="px-8 relative flex items-center justify-center gap-40 min-h-screen bg-[#100a18] text-white">
                <Image src="/squelette-cropped.webp" width={400} height={867} alt="" className='hidden md:block z-1 mask-b-from-70% mask-b-to-90%'/>
                <div
                    className="relative rounded-xl flex flex-col border border-white/20 p-8 md:p-16 w-full md:w-[30%] z-1 bg-[rgba(10,19,28,0.5)]
    backdrop-blur-[50px]
    shadow-[inset_0_0_50px_rgba(255,255,255,0.05),
            inset_0_0_1px_rgba(255,255,255,0.45),
            inset_1px_1px_3px_rgba(255,255,255,0.20)]">
                    <h2 className="text-4xl pb-4 mb-4 border-b border-gray-500">{t('imagerie-title')}</h2>
                    <p className='mb-2 text-[#BABABA] font-medium'>
                        {t.rich('imagerie-p1', {
                            blanc: (chunks) => <span className='text-white'>{chunks}</span>
                        })}
                    </p>
                    <p className='mb-2 text-[#BABABA] font-medium'>
                        {t.rich('imagerie-p2', {
                            blanc: (chunks) => <span className='text-white'>{chunks}</span>
                        })}
                    </p>

                    <ul className='mt-8 flex flex-col gap-4 list-none md:w-3/4'>
                        <li className='flex items-center gap-8 font-medium'>
                            <ListBullet/>
                            {t('imagerie-li1')}
                        </li>
                        <li className='flex items-center gap-8 font-medium'>
                            <ListBullet/>
                            {t('imagerie-li2')}
                        </li>
                        <li className='flex items-center gap-8 font-medium'>
                            <ListBullet/>
                            {t('imagerie-li3')}
                        </li>
                        <li className='flex items-center gap-8 font-medium'>
                            <ListBullet/>
                            {t('imagerie-li4')}
                        </li>
                        <li className='flex items-center gap-8 font-medium'>
                            <ListBullet/>
                            {t('imagerie-li5')}
                        </li>
                    </ul>
                </div>
                <Image src="/3.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90% opacity-45'/>
            </section>

            <GridExplorationComplete/>

            <section className="py-16 px-6 md:px-16 relative">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-2xl md:text-4xl mb-12 leading-[105%] text-[#BABABA] tracking-normal">
                        {t.rich('ai-section-title', {
                            blanc: (chunks) => <><br/><span className='text-white'>{chunks}</span></>
                        })}
                    </h2>

                    <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-5 w-full gap-8 z-1">
                        <div
                            className="flex flex-col row-start-1 row-end-4 col-start-1 col-end-2 px-12 pt-12 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner z-1">
                            <div>
                                <h3 className="text-3xl mb-4">{t('ai-predictive-detection-title')}</h3>
                                <p className="text-sm text-[#BABABA] font-light mb-4">
                                    {t('ai-predictive-detection-description')}
                                </p>
                            </div>
                            <Image
                                src="/ia-body.webp"
                                alt=""
                                width={500} height={500}
                                className="justify-self-end"
                            />
                        </div>

                        <div
                            className="row-start-4 row-end-6 col-start-1 col-end-2 flex flex-col justify-center p-12 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner z-1">
                            <h3 className="text-3xl mb-4">{t('ai-validated-experts-title')}</h3>
                            <p className="text-sm text-[#BABABA] font-light mb-4">
                                {t('ai-validated-experts-description')}
                            </p>
                            <Image
                                src="/irm-tete.webp"
                                alt=""
                                width={500} height={500}
                                className="rounded-lg w-full border border-white/10 backdrop-blur-md shadow-inner mt-4 self-center "
                            />
                        </div>

                        <div
                            className="row-start-1 row-end-3 col-start-2 col-end-3 flex flex-col md:flex-row gap-4 justify-center p-12 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner z-1">
                            <div className='flex flex-col gap-4 md:w-1/2'>
                                <h3 className="text-3xl">{t('ai-advanced-analysis-title')}</h3>
                                <p className="text-sm text-[#BABABA] font-light">
                                    {t('ai-advanced-analysis-description-p1')}
                                </p>
                                <p className="text-sm text-[#BABABA] font-light">
                                    {t('ai-advanced-analysis-description-p2')}
                                </p>
                            </div>
                            <div className='md:w-1/2'>
                                <Image
                                    src="/12.webp"
                                    alt=""
                                    width={500} height={500}
                                    className='w-full'
                                />

                            </div>
                        </div>

                        <div
                            className="row-start-3 row-end-5 col-start-2 col-end-3 flex flex-col gap-4 p-8 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner z-1">
                            <h3 className="text-3xl">{t('ai-interpretation-title')}</h3>
                            <p className="text-sm text-[#BABABA] font-light">
                                {t('ai-interpretation-description')}
                            </p>

                            <Image
                                src="/data.webp"
                                alt="Illustration d’analyse avancée IA"
                                width={500} height={500}
                                className="rounded-lg w-full object-cover mt-4 max-h-[180px]"
                            />
                        </div>

                        <div
                            className="row-start-5 row-end-6 col-start-2 col-end-3 flex flex-col gap-4 p-8 justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner z-1">
                            <h3 className="text-3xl">{t('ai-swiss-quality-title')}</h3>
                            <p className="text-sm text-[#BABABA] font-light">
                                {t('ai-swiss-quality-description')}
                            </p>
                            <button
                                className="w-fit cursor-pointer border border-white text-white px-5 py-2 rounded-full text-sm uppercase tracking-wide hover:bg-white hover:text-black transition"
                            >
                                {t('ai-swiss-quality-cta')}
                            </button>
                        </div>
                    </div>
                </div>
                <Image src="/ai-bg.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90% opacity-75'/>
            </section>

            <ComiteScientifique/>

            <section className="flex flex-col justify-center py-8 min-h-screen relative mb-8">
                <div className='z-2 w-full md:w-2/3 flex flex-col md:flex-row justify-center mx-auto gap-16'>
                    <div className='flex flex-col items-start px-8'>
                        <h2
                            className="text-[2.3rem] md:text-4xl leading-[105%] text-[#BABABA] tracking-normal mb-4 md:ml-36 z-2">
                            {t.rich('understanding-section-title', {
                                blanc: (chunks) => <><br/><span className='text-white'>{chunks}</span></>
                            })}
                        </h2>
                        <p className='w-full md:w-1/2 md:ml-36 font-light text-[#BABABA] z-2'>
                            {t('understanding-section-description')}
                        </p>
                        <ButtonLink variant='transparent' href='/public' className='text-md md:ml-36 mt-8 uppercase z-2'>
                            {t('understanding-section-cta')}
                        </ButtonLink>

                    </div>
                <Image src="/Bilan-1.webp" width={1000} height={1000} alt=""
                       className='md:absolute md:right-24 object-cover z-1 md:w-1/2'/>
                </div>
                <Image src="/3.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90% opacity-45'/>
            </section>
        </>
    );
}