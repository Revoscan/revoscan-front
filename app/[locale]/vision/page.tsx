'use client'

import React from "react";
import Image from "next/image";

export default function VisionPage() {
    return (
        <>
            <section className="relative flex min-h-[50vh] justify-start text-white">
                <div
                    className='flex flex-col mx-8 md:mx-0 w-full md:w-1/2 md:min-h-[50vh] p-16 mb-8 justify-end items-end rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner mt-[-2rem] z-1'>
                    <div className='w-full md:w-3/4'>
                        <h1 className="text-4xl mb-4 z-1">Vers une nouvelle <span className='font-bold'>vision de la santé</span>
                        </h1>
                        <p className='z-1'>Nous façonnons dès aujourd’hui la médecine de demain, sans compromis, en
                            plaçant les soins préventifs
                            au cœur d’une expérience de luxe inédite.
                        </p>
                    </div>
                </div>

                <Image src="/3.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90% opacity-45 z-0'/>
            </section>
            <section className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 gap-16 mb-16 px-8 md:px-0">
                <div
                    className="md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2 rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-md flex flex-col p-8 md:p-16">
                    <h2 className="text-4xl font-bold">Chez <span className='font-bold'>Revoscan</span></h2>
                    <p>Chaque décision repose sur la rigueur scientifique et une attention profondément humaine. Notre
                        vision audacieuse : réinventer l’imagerie médicale par une approche holistique, ultra-précise et
                        résolument tournée vers l’avenir de votre santé.</p>
                </div>
                <div
                    className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 relative border-2 border-white/10 rounded-r-xl backdrop-blur-md flex flex-col items-center justify-center">
                    <Image src="/face-particles.webp" alt="" fill={true}
                           className='object-cover w-full h-full rounded-l-xl'/>
                </div>
                <div
                    className="md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-3 relative border-l border-b border-t border-white/10 rounded-l-xl">
                    <Image src="/life-graphic.webp" alt="" fill={true}
                           className='object-cover w-full h-full rounded-l-xl'/>
                </div>
                <div
                    className="md:col-start-2 md:col-end-4 md:row-start-3 md:row-end-4 rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-md flex flex-col p-8 md:p-16">
                    <h2 className="text-4xl font-bold">Animés par <span
                        className='font-bold'>l’exigence d’excellence</span>
                    </h2>
                    <p>Nous unissons un savoir-faire clinique de renommée mondiale, une technologie d’imagerie avancée
                        et un
                        service personnalisé d’exception. Nous croyons qu’une détection précoce, associée à un
                        diagnostic
                        d’une précision inégalée, est la clé d’une prévention efficace et d’une prise en charge
                        éclairée.
                        Grâce à l’analyse assistée par l’IA, nous identifions les signaux faibles avant l’apparition des
                        symptômes, pour agir tôt, limiter les risques de maladies chroniques et bâtir un capital santé
                        durable.</p>
                </div>
            </section>

            <section className="flex flex-col px-8 md:px-0 md:grid md:grid-cols-2 md:grid-rows-4 gap-8">
                <div
                    className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-16">
                    <p>Nos services d’imagerie avancée offrent une évaluation globale et personnalisée de votre état de
                        santé, vous donnant les moyens de comprendre, d’anticiper et de maîtriser votre parcours
                        médical.
                        Nous redéfinissons votre rapport au corps, à la médecine et au temps : pour nous, la santé n’est
                        pas
                        simplement l’absence de maladie, mais un potentiel à révéler et à cultiver.</p>
                </div>
                <div
                    className="md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-5 rounded-r-xl border-t border-r border-b border-white/10 bg-white/5 backdrop-blur-md flex flex-col p-16">
                    <Image src="/man.webp" alt="" fill={true}
                           className='absolute w-full h-full object-cover rounded-r-xl'/>
                </div>
                <div
                    className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 rounded-l-xl border-t border-l border-b border-white/10 bg-white/5 backdrop-blur-md flex flex-col p-16">
                    <Image src="/irm-bg.webp" alt="" fill={true}
                           className='absolute w-full h-full object-cover rounded-l-xl'/>
                </div>
                <div className="md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-5">
                    <p className='rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-md flex flex-col p-8 md:p-16 w-full md:w-2/3 mb-8'>Ensemble,
                        nous établissons un nouveau standard de bien-être, pour une médecine proactive au
                        service
                        de votre longévité.</p>
                    <a href='/expertise'
                       className="z-1 mt-16 transition-all cursor-pointer px-10 py-3 text-white border-2 border-white rounded-full bg-gradient-to-b from-[#2A252A] to-[#1A181A] hover:from-[#3A343A] hover:to-[#2A282A] transition-all duration-300 text-lg tracking-widest font-medium">
                        NOTRE EXPERTISE
                    </a>
                </div>
            </section>
        </>
    );
}