'use client'
import React from "react";
import Image from "next/image";

export default function GridExplorationComplete() {
    const explorationsLigne1 = [
        { id: 1, title: 'Cerveau', description: 'Détection des tumeurs, AVC, anévrismes, kystes, hématomes et ischémies des petits vaisseaux.', icon: '/cerveau.svg', style: '' },
        { id: 2, title: 'Cervico–faciale', description: 'Analyse des sinus, glandes, ganglions, langue, parotide, SCC et tumeurs du cou et du larynx.', icon: '/cervico-faciale.svg' },
        { id: 3, title: 'Moelle osseuse', description: 'Détection d’anomalies, tumeurs, métastases et affections hématologiques médullaires.', icon: '/moelle-osseuse.svg' },
        { id: 4, title: 'Rachis', description: 'Visualisation des hernies discales, dégénérescence, lésions vertébrales et spinale.', icon: '/rachis.svg' },
    ]

    const explorationsLigne2 = [
        { id: 5, title: 'Cardio Vasculaire', description: 'Évaluation de l’aorte, détection d’anévrismes et anomalies vasculaires cérébrales.', icon: '/cardio-vasculaire.svg' },
        { id: 6, title: 'Poumons', description: 'Visualisation des masses pulmonaires et tumeurs médiastinales de plus de 1,5 cm.', icon: '/poumons.svg' },
        { id: 7, title: 'Reins', description: 'Analyse des reins pour kystes, tumeurs, masses solides et anomalies structurelles.', icon: '/reins.svg' },
    ]

    const explorationsLigne3 = [
        { id: 8, title: 'Système Urinaire', description: 'Détection des tumeurs, kystes, malformations et anomalies urinaires ou vésicales.', icon: '/systeme-urinaire.svg' },
        { id: 9, title: 'Pelvis & Seins', description: 'Dépistage de masses suspectes, kystes, lésions bénignes ou malignes visibles à l’IRM.', icon: '/pelvis-seins.svg' },
        { id: 10, title: 'Prostate', description: 'Analyse ciblée de la prostate pour détecter les tumeurs, même de petite taille.', icon: '/prostate.svg' },
    ]

    const explorationsLigne4 = [
        { id: 11, title: 'Membres', description: 'Visualisation de masses, anomalies osseuses, tumeurs et pathologies musculo-squelettiques.', icon: '/membres.svg' },
        { id: 12, title: 'Muscles', description: 'Détection des lésions, tumeurs, anomalies musculaires ou infiltrations diffuses.', icon: '/muscles.svg' },
        { id: 13, title: 'Métabolisme', description: 'Analyse de la stéatose hépatique, surcharge en fer (Hémochromatose) et anomalies diffuses.', icon: '/metabolisme.svg' },
    ]

    return (
        <section className="py-12 px-6 md:px-16 relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 z-1">
                    Une exploration complète du corps.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {explorationsLigne1.map(exploration => (
                        <ExplorationCard key={exploration.id} icon={exploration.icon} title={exploration.title} description={exploration.description} />
                    ))}

                    <div className="rounded-lg overflow-hidden col-span-1 sm:col-span-2 lg:col-span-1 z-1">
                        <Image
                            src="/couple-course.webp"
                            alt="Couple en train de courir avec écouteurs"
                            width={500} height={500}
                            className="rounded-lg w-full h-full object-cover"
                        />
                    </div>

                    {explorationsLigne2.map(exploration => (
                        <ExplorationCard key={exploration.id} icon={exploration.icon} title={exploration.title} description={exploration.description} />
                    ))}

                    {explorationsLigne3.map(exploration => (
                        <ExplorationCard key={exploration.id} icon={exploration.icon} title={exploration.title} description={exploration.description} />
                    ))}

                    <div className="rounded-lg overflow-hidden col-span-1 sm:col-span-2 lg:col-span-1 row-span-2 z-1">
                        <Image
                            src="/rando.webp"
                            alt="Personne marchant sur un sentier de montagne"
                            width={500} height={500}
                            className="rounded-lg w-full h-full object-cover"
                        />
                    </div>

                    {explorationsLigne4.map(exploration => (
                        <ExplorationCard key={exploration.id} icon={exploration.icon} title={exploration.title} description={exploration.description} />
                    ))}
                </div>
            </div>

            <Image src="/3.webp" fill={true} alt=""
                   className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90% opacity-45'/>
        </section>
    );
}

const ExplorationCard = ({ title, description, icon }: {title: string, description: string, icon: string}) => {
    return (
        <div className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner z-1">
            <div className='flex mb-4 pb-4 border-b-1 border-b-gray-300 items-center'>
                <Image
                    src={icon}
                    alt={title}
                    width={50} height={50}
                    className="mr-4"
                />
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
            </div>
            <p className="text-sm text-gray-300">
                {description}
            </p>
        </div>
    );
}