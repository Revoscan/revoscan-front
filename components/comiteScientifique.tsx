'use client'
import React, { useState } from 'react';
import Image from "next/image";

interface Membre {
    id: number;
    nom: string;
    role: string;
    image: string;
    description: string;
}

const membres: Membre[] = [
    {
        id: 1,
        nom: 'Dr. Abed Kourhani',
        role: 'Radiologue',
        image: '/abed-kourhani.webp',
        description: `Basé à Genève, le Dr Kourhani est un radiologue diplômé, spécialisé en imagerie musculo-squelettique, avec une double expertise en imagerie cardiaque et gynécologique. Fort d’une formation académique solide et d’une expérience clinique dans des centres de référence, il développe depuis plusieurs années une approche transversale de l’imagerie médicale, centrée sur la lecture fine du corps dans sa globalité. Sa parfaite maîtrise de l’imagerie du corps entier, combinée à une sensibilité particulière pour la médecine préventive, l’a naturellement conduit à fonder Revoscan en 2023. À travers ce projet, il souhaite offrir un nouveau standard de prise en charge, en associant les technologies d’imagerie de dernière génération à l’intelligence artificielle, pour anticiper la maladie avant qu’elle ne se déclare. Sa mission : rendre accessible une médecine plus proactive, plus précise, et résolument tournée vers l’avenir.`,
    },
    {
        id: 2,
        nom: 'Dr. Diomidis Botsikas',
        role: 'Radiologue',
        image: '/diomidis-botsikas.webp',
        description: `Le Dr Botsikas est un expert reconnu ...`,
    },
    {
        id: 3,
        nom: 'Dr. Layla Lahoud',
        role: 'Radiologue',
        image: '/layla-lahoud.webp',
        description: `Experte en imagerie cardiaque ...`,
    },
    {
        id: 4,
        nom: 'Dr. Abed Kourhani',
        role: 'Radiologue',
        image: '/abed-kourhani.webp',
        description: `Basé à Genève, le Dr Kourhani est un radiologue diplômé et spécialisé
    en imagerie musculo-squelettique. ...`,
    },
    {
        id: 5,
        nom: 'Dr. Diomidis Botsikas',
        role: 'Radiologue',
        image: '/diomidis-botsikas.webp',
        description: `Le Dr Botsikas est un expert reconnu ...`,
    },
    {
        id: 6,
        nom: 'Dr. Layla Lahoud',
        role: 'Radiologue',
        image: '/layla-lahoud.webp',
        description: `Experte en imagerie cardiaque ...`,
    },
    {
        id: 7,
        nom: 'Dr. Abed Kourhani',
        role: 'Radiologue',
        image: '/abed-kourhani.webp',
        description: `Basé à Genève, le Dr Kourhani est un radiologue diplômé et spécialisé
    en imagerie musculo-squelettique. ...`,
    },
    {
        id: 8,
        nom: 'Dr. Diomidis Botsikas',
        role: 'Radiologue',
        image: '/diomidis-botsikas.webp',
        description: `Le Dr Botsikas est un expert reconnu ...`,
    },
    // Ajoute les autres membres ici
];

export default function ComiteScientifique() {
    const [membreActif, setMembreActif] = useState<Membre>(membres[0]);

    return (
        <section className="py-16 px-6 md:px-16 relative">
            <div className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row md:gap-16">
                <div className='flex flex-col md:w-2/3 border-b border-b-gray-500 md:border-r md:border-b-0 pb-8 md:pb-0 md:pr-16 md:border-r-gray-500 z-1'>
                    {/* Titre */}
                    <div className="md:col-span-3 mb-8">
                        <h2 className="text-2xl md:text-4xl leading-[105%] text-[#BABABA] tracking-normal z-1 md:mb-24">
                            Votre santé guidée <br/>
                            <span className="text-white">par un comité scientifique.</span>
                        </h2>
                    </div>

                    {/* Image + Infos */}
                    <div className="md:col-span-2 flex flex-col md:flex-row items-start gap-6 z-1">
                        {/* Image du membre actif */}
                        <Image
                            src={membreActif.image}
                            alt={membreActif.nom}
                            width={500} height={500}
                            className="w-full md:w-[25rem] object-cover pt-8 relative rounded-xl border border-white/5 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[#021810]
                                        backdrop-blur-[10px] shadow-[inset_0_0_50px_rgba(255,255,255,0.05),inset_0_0_1px_rgba(255,255,255,0.45),inset_1px_1px_3px_rgba(255,255,255,0.20)]"
                        />

                        {/* Description */}
                        <div>
                            <h3 className="text-3xl font-semibold mt-4">{membreActif.nom}</h3>
                            <p className="text-2xl font-light mb-4">{membreActif.role}</p>
                            <p className="text-sm font-light leading-[105%] text-[#BABABA]">
                                {membreActif.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Liste des membres cliquables */}
                    <div className="md:w-1/4 grid grid-cols-2 grid-rows-4 gap-4 md:gap-8 justify-center md:justify-start md:py-16 z-1">
                        {membres.map((membre) => (
                            <button
                                key={membre.id}
                                onClick={() => setMembreActif(membre)}
                                className={`relative cursor-pointer focus:outline-2 aspect-square rounded-lg overflow-hidden border border-white/10 hover:scale-105 backdrop-blur-md shadow-inner transition-transform
                                     ${membre.id === membreActif.id ? 'ring-2 ring-white' : ''}`}
                                aria-pressed={membre.id === membreActif.id}
                            >
                                <Image
                                    src={membre.image}
                                    alt={membre.nom}
                                    width={500} height={500}
                                    className={`w-2/3 object-cover mx-auto absolute bottom-0 left-1/2 transform -translate-x-1/2 ${membre.id === membreActif.id ? '' : 'brightness-50'}`}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            <Image src="/3.webp" fill={true} alt=""
                   className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90% opacity-45'/>
        </section>
);
}
