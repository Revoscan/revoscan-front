'use client'

import React from "react";
import Image from "next/image";

import {ButtonLink} from "@/components/buttonLink";
import ComiteScientifique from "@/components/comiteScientifique";
import GridExplorationComplete from "@/components/page/expertise/gridExplorationComplete";
import ListBullet from "@/components/ListBullet";

export default function ExpertisePage() {
    return (
        <>
            <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
                <h1 className="text-4xl font-medium z-1 text-center  leading-[105%] tracking-normal">Doté d’une précision inégalée.</h1>
                <Image src="/squelette-1.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90%'/>
            </section>
            <section className="relative flex flex-col items-center justify-center min-h-screen bg-black">
                <h2 className="text-4xl font-medium z-1 text-center text-white leading-[105%] tracking-normal">Notre technologie d’imagerie avancée <br/><span
                    className='text-[#BABABA]'>révèle ce que le corps ne dit pas encore.</span></h2>
                <Image src="/squelette-2.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90%'/>
            </section>
            <section className="relative flex flex-col justify-center items-center py-8 min-h-screen bg-black relative mb-8 mask-b-from-70% mask-b-to-90%">
                <div className='self-end mr-0 md:mr-36 z-1 flex flex-col px-8'>
                    <h2
                        className="text-center md:text-left leading-[105%] tracking-normal inline text-[2.3rem] lg:text-5xl mb-12">
                        Nous détectons l’invisible, <br/>
                        <span className='text-[#BABABA]'>avant qu’il ne soit visible.</span>
                    </h2>
                    <div className='flex flex-col gap-8'>
                        <div className='flex items-center gap-4'><Image width={75} height={75} src="/radiation.svg" alt=""/>
                            <p className='text-[1.5rem] text-[#BABABA]'>

                                <span className='font-bold'>Sans</span> Radiation
                            </p>
                        </div>
                        <div className='flex items-center gap-4'><Image width={75} height={75} src="/irm.svg" alt=""/>
                            <p className='text-[1.5rem] text-[#BABABA]'>
                                <span className='font-bold'>6000 à 7000</span> images
                            </p>
                        </div>
                        <div className='flex items-center gap-4'><Image width={75} height={75} src="/picto-ia.svg" alt=""/>
                            <p className='text-[1.5rem] text-[#BABABA]'>
                                <span className='font-bold'>Assisté</span> par IA
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
                    <h2 className="text-4xl pb-4 mb-4 border-b border-gray-500">IRM du Corps Entier</h2>
                    <p className='mb-2'>
                        L’IRM la plus complète à ce jour, couvrant tous les organes majeurs et vitaux du corps ainsi que
                        la colonne vertébrale.
                    </p>
                    <p>La technologie IRM a révolutionné la compréhension et la détection des pathologies au fil des ans
                        en fournissant des images détaillées et non invasives des structures internes du corps. Cette
                        méthode d'imagerie a considérablement fait progresser le diagnostic médical, permettant une
                        meilleure précision et une détection précoce de maladies diverses.
                    </p>

                    <ul className='mt-8 flex flex-col gap-4 list-none md:w-3/4'>
                        <li className='flex items-center gap-8'>
                            <ListBullet/>
                            Détection de tumeurs et de cancers dans toutes les régions du thorax, de l'abdomen et du
                            bassin
                        </li>
                        <li className='flex items-center gap-8'>
                            <ListBullet/>
                            Les anévrismes
                        </li>
                        <li className='flex items-center gap-8'>
                            <ListBullet/>
                            Tumeurs du cerveau et du cou (langue, larynx, SCC...)
                        </li>
                        <li className='flex items-center gap-8'>
                            <ListBullet/>
                            Cancers et affections bénignes telles que kystes, hématomes, abcès...
                        </li>
                        <li className='flex items-center gap-8'>
                            <ListBullet/>
                            Un examen ciblé de la région pelvienne couvrant les spécificités des cancers de la prostate,
                            du col de l'utérus, de l'utérus et de l'ovaire.
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
                        L’intelligence artificielle au cœur <br/>
                        <span className="text-white">de l’analyse médicale prédictive Revoscan.</span>
                    </h2>

                    <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-5 w-full gap-8 z-1">
                        <div
                            className="flex flex-col row-start-1 row-end-4 col-start-1 col-end-2 px-12 pt-12 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner z-1">
                            <div>
                                <h3 className="text-3xl mb-4">Détection prédictive par IA</h3>
                                <p className="text-sm text-[#BABABA] font-light mb-4">
                                    Notre IA identifie les signaux faibles avant même l’apparition de symptômes,
                                    permettant une détection ultra-précoce des anomalies les plus subtiles.
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
                            <h3 className="text-3xl mb-4">Validé par nos experts</h3>
                            <p className="text-sm text-[#BABABA] font-light mb-4">
                                Chaque prédiction est validée, nuancée et contextualisée par nos experts pour
                                offrir à chaque patient le meilleur de la science, au service de sa santé.
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
                                <h3 className="text-3xl">Analyse avancée</h3>
                                <p className="text-sm text-[#BABABA] font-light">
                                    Grâce à des algorithmes avancés, l’IA analyse en profondeur les données issues
                                    des IRM les plus récentes pour modéliser le comportement des organes et tissus.
                                    Cette analyse fine permet d’anticiper l’apparition future de pathologies.
                                </p>
                                <p className="text-sm text-[#BABABA] font-light">
                                    Cette capacité de projection dans le temps, unique en son genre, permet notamment de détecter des signaux précoces de maladies neurodégénératives telles qu’Alzheimer, bien avant les premiers symptômes.
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
                            <h3 className="text-3xl">Interprétation</h3>
                            <p className="text-sm text-[#BABABA] font-light">
                                Des millions de données sont comparées à notre base de référence pour affiner chaque lecture et augmenter la fiabilité du diagnostic.
                                L’intelligence artificielle devient ainsi un outil d’aide à la décision stratégique, permettant d’orienter les recommandations cliniques avec plus de précision,
                                de personnalisation et de pertinence.
                            </p>

                            <Image
                                src="/data.webp"
                                alt="Illustration d’analyse avancée IA"
                                width={500} height={500}
                                className="rounded-lg w-full object-cover mt-4 max-h-[100px]"
                            />
                        </div>

                        <div
                            className="row-start-5 row-end-6 col-start-2 col-end-3 flex flex-col gap-4 p-8 justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner z-1">
                            <h3 className="text-3xl">Qualité Suisse</h3>
                            <p className="text-sm text-[#BABABA] font-light">
                                Notre technologie repose sur des modèles validés cliniquement et certifiés
                                selon les standards médicaux suisses.
                            </p>
                            <button
                                className="w-fit cursor-pointer border border-white text-white px-5 py-2 rounded-full text-sm uppercase tracking-wide hover:bg-white hover:text-black transition"
                            >
                                Voir nos certifications
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
                            Une nouvelle lecture <br/>
                            <span className='text-white'>de votre corps.</span>
                        </h2>
                        <p className='w-full md:w-1/2 md:ml-36 font-light text-[#BABABA] z-2'>Recevez un bilan personnalisé, enrichi par des visualisations
                            intuitives et un score Revoscan exclusif. Une synthèse claire de ce que votre corps vous révèle,
                            pour mieux décider, anticiper et agir.</p>
                        <ButtonLink variant='transparent' href='/public' className='text-md md:ml-36 mt-8 uppercase z-2'>Découvrir le rapport</ButtonLink>

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