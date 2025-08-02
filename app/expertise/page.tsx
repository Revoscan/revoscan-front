'use client'

import React from "react";
import Image from "next/image";

import {ButtonLink} from "@/components/buttonLink";
import ComiteScientifique from "@/components/comiteScientifique";
import GridExplorationComplete from "@/components/page/expertise/gridExplorationComplete";

export default function ExpertisePage() {
    return (
        <>
            <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
                <h1 className="text-4xl font-bold z-1 text-center">Doté d’une précision inégalée.</h1>
                <Image src="/squelette-1.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90%'/>
            </section>
            <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
                <h2 className="text-4xl font-bold z-1 text-center">Notre technologie d’imagerie avancée <br/><span
                    className='font-normal'>révèle ce que le corps ne dit pas encore.</span></h2>
                <Image src="/squelette-2.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90%'/>
            </section>
            <section className="relative flex flex-col justify-center items-center py-8 min-h-screen bg-black relative mb-8 mask-b-from-70% mask-b-to-90%">
                <div className='self-end mr-0 md:mr-36 z-1 flex flex-col px-8'>
                    <h2
                        className="text-center md:text-left tracking-tight inline text-[2.3rem] lg:text-5xl mb-12">
                        Nous détectons l’invisible, <br/>
                        <span className='font-semibold'>avant qu’il ne soit visible.</span>
                    </h2>
                    <div className='flex flex-col gap-8'>
                        <div className='flex items-center gap-4'><Image width={75} height={75} src="/radiation.svg" alt=""/>
                            <p className='text-[1.5rem]'>

                                <span className='font-bold'>Sans</span> Radiation
                            </p>
                        </div>
                        <div className='flex items-center gap-4'><Image width={75} height={75} src="/irm.svg" alt=""/>
                            <p className='text-[1.5rem]'>
                                <span className='font-bold'>6000 à 7000</span> images
                            </p>
                        </div>
                        <div className='flex items-center gap-4'><Image width={75} height={75} src="/picto-ia.svg" alt=""/>
                            <p className='text-[1.5rem]'>
                                <span className='font-bold'>Assisté</span> par IA
                            </p>
                        </div>
                    </div>

                </div>
                <Image src="/4.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90%'/>
            </section>
            <section className="px-8 relative flex items-center justify-center gap-40 min-h-screen bg-[#100a18] text-white">
                <Image src="/squelette-full.webp" width={250} height={300} alt="" className='hidden md:block z-1 max-h-[80vh] mask-b-from-70% mask-b-to-90%'/>
                <div
                    className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col p-8 w-full md:w-1/3 z-1">
                    <h2 className="text-4xl font-bold">IRM du Corps Entier</h2>
                    <hr className='my-8'/>
                    <p className='mb-2'>
                        L’IRM la plus complète à ce jour, couvrant tous les organes majeurs et vitaux du corps ainsi que
                        la colonne vertébrale.
                    </p>
                    <p>La technologie IRM a révolutionné la compréhension et la détection des pathologies au fil des ans
                        en fournissant des images détaillées et non invasives des structures internes du corps. Cette
                        méthode d'imagerie a considérablement fait progresser le diagnostic médical, permettant une
                        meilleure précision et une détection précoce de maladies diverses.
                    </p>

                    <ul className='mt-8 flex flex-col gap-4 list-disc'>
                        <li>Détection de tumeurs et de cancers dans toutes les régions du thorax, de l'abdomen et du
                            bassin
                        </li>
                        <li>Les anévrismes</li>
                        <li>Tumeurs du cerveau et du cou (langue, larynx, SCC...)</li>
                        <li>Cancers et affections bénignes telles que kystes, hématomes, abcès...</li>
                        <li>Un examen ciblé de la région pelvienne couvrant les spécificités des cancers de la prostate,
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
                    <h2 className="text-center text-2xl md:text-3xl mb-12">
                        L’intelligence artificielle au cœur <br/>
                        <span className="font-semibold">de l’analyse médicale prédictive Revoscan.</span>
                    </h2>

                    <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-5 w-full gap-8 z-1">
                        <div
                            className="flex flex-col row-start-1 row-end-4 col-start-1 col-end-2 px-8 pt-8 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner z-1">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Détection prédictive par IA</h3>
                                <p className="text-sm text-gray-300 mb-4">
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
                            className="row-start-4 row-end-6 col-start-1 col-end-2 flex flex-col justify-center p-8 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner z-1">
                            <h3 className="text-lg font-semibold mb-4">Validé par nos experts</h3>
                            <p className="text-sm text-gray-300 mb-4">
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
                            className="row-start-1 row-end-3 col-start-2 col-end-3 flex flex-col md:flex-row gap-4 justify-center p-8 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner z-1">
                            <div className='flex flex-col gap-4'>
                                <h3 className="text-lg font-semibold">Analyse avancée</h3>
                                <p className="text-sm text-gray-300">
                                    Grâce à des algorithmes avancés, l’IA analyse en profondeur les données issues
                                    des IRM les plus récentes pour modéliser le comportement des organes et tissus.
                                    Cette analyse fine permet d’anticiper l’apparition future de pathologies.
                                </p>
                            </div>
                            <Image
                                src="/12.webp"
                                alt=""
                                width={500} height={500}
                                className='max-h-[300px]'
                            />
                        </div>

                        <div
                            className="row-start-3 row-end-5 col-start-2 col-end-3 flex flex-col gap-4 p-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner z-1">
                            <h3 className="text-lg font-semibold mb-4">Analyse avancée</h3>
                            <p className="text-sm text-gray-300">
                                Grâce à des algorithmes avancés, l’IA analyse en profondeur les données issues
                                des IRM les plus récentes pour modéliser le comportement des organes et tissus.
                                Cette analyse fine permet d’anticiper l’apparition future de pathologies.
                            </p>
                            <Image
                                src="/data.webp"
                                alt="Illustration d’analyse avancée IA"
                                width={500} height={500}
                                className="rounded-lg w-full object-cover mt-4"
                            />
                        </div>

                        <div
                            className="bg-pink-300 row-start-5 row-end-6 col-start-2 col-end-3 flex flex-col gap-4 p-8 justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner z-1">
                            <h3 className="text-lg font-semibold mb-2">Qualité Suisse</h3>
                            <p className="text-sm text-gray-300 mb-4">
                                Notre technologie repose sur des modèles validés cliniquement et certifiés
                                selon les standards médicaux suisses.
                            </p>
                            <button
                                className="w-fit self-center border border-white text-white px-5 py-2 rounded-full text-sm uppercase tracking-wide hover:bg-white hover:text-black transition"
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
                <div className='z-1 w-full md:w-2/3 flex flex-col md:flex-row justify-center mx-auto gap-16'>
                    <div className='md:w-1/2 flex flex-col items-start px-8'>
                        <h2
                            className="tracking-tight inline text-[2.3rem] lg:text-5xl mb-12 md:ml-36 z-1 ">
                            Une nouvelle lecture <br/>
                            <span className='font-semibold'>de votre corps.</span>
                        </h2>
                        <p className='w-full md:w-1/2 md:ml-36'>Recevez un bilan personnalisé, enrichi par des visualisations
                            intuitives et un score Revoscan exclusif. Une synthèse claire de ce que votre corps vous révèle,
                            pour mieux décider, anticiper et agir.</p>
                        <ButtonLink variant='transparent' href='/' className='text-md md:ml-36 mt-8'>Consulter nos rapports</ButtonLink>

                    </div>
                <Image src="/Bilan-1.webp" width={500} height={500} alt=""
                       className='object-cover z-1 w-full md:w-2/3'/>
                </div>
                <Image src="/3.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90% opacity-45'/>
            </section>
        </>
    );
}