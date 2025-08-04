'use client'

import React from "react";
import Image from "next/image";
import {useTranslations} from "next-intl";

export default function VisionPage() {
    const t = useTranslations('VisionPage');
    return (
        <>
            <section className="relative flex min-h-[50vh] justify-start text-white bg-black">
                <div
                    className='flex flex-col mx-8 md:mx-0 w-full md:w-1/2 md:min-h-[50vh] p-16 mb-8 justify-end items-end rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner mt-[-2rem] z-1'>
                    <div className='w-full md:w-3/4'>
                        <h1 className="text-4xl mb-4 z-1 text-[#BABABA] leading-[110%] tracking-normal">
                            {t.rich('title', {
                                blanc: (chunks) => <><span className='text-white'>{chunks}</span><br/></>
                            })}
                        </h1>
                        <p className='z-1 text-[#BABABA] leading-[115%] tracking-normal'>
                            {t('subtitle')}
                        </p>
                    </div>
                </div>

                <Image src="/3.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90% opacity-45 z-0'/>
            </section>
            <section className="bg-black flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 gap-16 pb-16 px-8 md:px-0">
                <div
                    className="md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2 rounded-l-3xl border border-white/5 backdrop-blur-[10px] shadow-[inset_0_0_50px_rgba(255,255,255,0.05),inset_0_0_1px_rgba(255,255,255,0.45),inset_1px_1px_3px_rgba(255,255,255,0.20)] flex flex-col p-8 md:p-16">
                    <h2 className="text-4xl mb-4 text-[#BABABA] leading-[110%] tracking-normal">
                        {t.rich('revoscan-title', {
                            blanc: (chunks) => <><span className='text-white'>{chunks}</span><br/></>
                        })}
                    </h2>
                    <p className='text-[#BABABA] leading-[115%] tracking-normal md:w-2/3'>
                        {t('revoscan-description')}
                    </p>
                </div>
                <div
                    className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 relative rounded-r-3xl border border-white/5 backdrop-blur-[10px] shadow-[inset_0_0_50px_rgba(255,255,255,0.05),inset_0_0_1px_rgba(255,255,255,0.45),inset_1px_1px_3px_rgba(255,255,255,0.20)] flex flex-col items-center justify-center">
                    <Image src="/face-particles.webp" alt="" fill={true}
                           className='object-cover w-full h-full rounded-l-xl'/>
                </div>
                <div
                    className="md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-3 relative rounded-l-3xl border border-white/5 backdrop-blur-[10px] shadow-[inset_0_0_50px_rgba(255,255,255,0.05),inset_0_0_1px_rgba(255,255,255,0.45),inset_1px_1px_3px_rgba(255,255,255,0.20)]">
                    <Image src="/life-graphic.webp" alt="" fill={true}
                           className='object-cover w-full h-full rounded-l-xl'/>
                </div>
                <div
                    className="md:col-start-2 md:col-end-4 md:row-start-3 md:row-end-4 rounded-l-3xl border border-white/5 backdrop-blur-[10px] shadow-[inset_0_0_50px_rgba(255,255,255,0.05),inset_0_0_1px_rgba(255,255,255,0.45),inset_1px_1px_3px_rgba(255,255,255,0.20)] flex flex-col p-8 md:p-16">
                    <h2 className="text-4xl mb-4 text-[#BABABA] leading-[110%] tracking-normal">
                        {t.rich('commitment-title', {
                            blanc: (chunks) => <><span className='text-white'>{chunks}</span><br/></>
                        })}
                    </h2>
                    <p className='text-[#BABABA] leading-[115%] tracking-normal'>
                        {t('commitment-description')}
                    </p>
                </div>
            </section>

            <section className="bg-black flex flex-col px-8 md:px-0 md:grid md:grid-cols-2 md:grid-rows-4 gap-8 pb-16 mask-b-from-80% mask-b-to-99%">
                <div
                    className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 rounded-r-3xl border border-white/5 backdrop-blur-[10px] shadow-[inset_0_0_50px_rgba(255,255,255,0.05),inset_0_0_1px_rgba(255,255,255,0.45),inset_1px_1px_3px_rgba(255,255,255,0.20)] p-8 md:p-16">
                    <p className='text-[#BABABA] leading-[115%] tracking-normal'>
                        {t('advanced-imaging-description')}
                    </p>
                </div>
                <div
                    className="md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-5 rounded-r-xl border-t border-b border-r border-white/20 backdrop-blur-[10px] shadow-[inset_0_0_50px_rgba(255,255,255,0.05),inset_0_0_1px_rgba(255,255,255,0.45),inset_1px_1px_3px_rgba(255,255,255,0.20)] flex flex-col p-16">
                    <Image src="/man.webp" alt="" fill={true}
                           className='absolute w-full h-full object-cover rounded-r-xl'/>
                </div>
                <div
                    className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 rounded-l-xl border-t border-l border-b border-white/20 backdrop-blur-[10px] shadow-[inset_0_0_50px_rgba(255,255,255,0.05),inset_0_0_1px_rgba(255,255,255,0.45),inset_1px_1px_3px_rgba(255,255,255,0.20)]  flex flex-col p-16">
                    <Image src="/irm-bg.webp" alt="" fill={true}
                           className='absolute w-full h-full object-cover rounded-l-xl'/>
                </div>
                <div className="md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-5">
                    <p className='rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-[10px] shadow-[inset_0_0_50px_rgba(255,255,255,0.05),inset_0_0_1px_rgba(255,255,255,0.45),inset_1px_1px_3px_rgba(255,255,255,0.20)] p-8 md:p-16 w-full md:w-2/3 mb-8 text-[#BABABA] leading-[115%] tracking-normal'>
                        {t.rich('new-standard-description', {
                            blanc: (chunks) => <span className='text-white'>{chunks}</span>
                        })}
                    </p>
                    <a href='/expertise'
                       className="z-1 mt-16 transition-all cursor-pointer px-10 py-3 text-white border-2 border-white rounded-full bg-white/5 transition-all duration-300 text-lg tracking-widest font-medium">
                        {t('cta-button')}
                    </a>
                </div>
            </section>
        </>
    );
}