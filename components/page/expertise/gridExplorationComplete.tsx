'use client'
import React from "react";
import Image from "next/image";
import {useTranslations} from "next-intl";

export default function GridExplorationComplete() {
    const t = useTranslations('ExpertisePage');
    const explorationsLigne1 = [
        { id: 1, title: t('whole-body-brain-title'), description: t('whole-body-brain-description'), icon: '/cerveau.svg', style: '' },
        { id: 2, title: t('whole-body-head-neck-title'), description: t('whole-body-head-neck-description'), icon: '/cervico-faciale.svg' },
        { id: 3, title: t('whole-body-bone-marrow-title'), description: t('whole-body-bone-marrow-description'), icon: '/moelle-osseuse.svg' },
        { id: 4, title: t('whole-body-spine-title'), description: t('whole-body-spine-description'), icon: '/rachis.svg' },
    ]

    const explorationsLigne2 = [
        { id: 5, title: t('whole-body-cardiovascular-title'), description: t('whole-body-cardiovascular-description'), icon: '/cardio-vasculaire.svg' },
        { id: 6, title: t('whole-body-lungs-title'), description: t('whole-body-lungs-description'), icon: '/poumons.svg' },
        { id: 7, title: t('whole-body-kidneys-title'), description: t('whole-body-kidneys-description'), icon: '/reins.svg' },
    ]

    const explorationsLigne3 = [
        { id: 8, title: t('whole-body-urinary-title'), description: t('whole-body-urinary-description'), icon: '/systeme-urinaire.svg' },
        { id: 9, title: t('whole-body-pelvis-breasts-title'), description: t('whole-body-pelvis-breasts-description'), icon: '/pelvis-seins.svg' },
        { id: 10, title: t('whole-body-prostate-title'), description: t('whole-body-prostate-description'), icon: '/prostate.svg' },
    ]

    const explorationsLigne4 = [
        { id: 11, title: t('whole-body-limbs-title'), description: t('whole-body-limbs-description'), icon: '/membres.svg' },
        { id: 12, title: t('whole-body-muscles-title'), description: t('whole-body-muscles-description'), icon: '/muscles.svg' },
        { id: 13, title: t('whole-body-metabolism-title'), description: t('whole-body-metabolism-description'), icon: '/metabolisme.svg' },
    ]

    return (
        <section className="py-12 px-6 md:px-16 relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-2xl md:text-4xl mb-10 z-1">
                    {t('whole-body-section-title')}
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
        <div className="px-8 py-5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-inner z-1">
            <div className='flex gap-6 mb-4 pb-4 border-b border-gray-500 items-center'>
                <Image
                    src={icon}
                    alt={title}
                    width={50} height={50}
                />
                <h3 className="text-xl font-medium mb-2">{title}</h3>
            </div>
            <p className="text-sm leading-[120%] tracking-normal text-gray-300">
                {description}
            </p>
        </div>
    );
}