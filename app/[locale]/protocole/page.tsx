'use client'
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import {ButtonLink} from "@/components/buttonLink";
import {Accordion, AccordionItem} from "@heroui/accordion";
import {useTranslations} from "next-intl";
import ListBullet from "@/components/ListBullet";

export default function ProtocolePage() {
    const t = useTranslations('ProtocolePage');

    interface TimelineItem {
        id: number;
        title: string;
        description: string;
        reversed?: boolean;
    }

    const [selectedTab, setSelectedTab] = useState("avant-exam");

    const FAQ = [
        {
            onglet: "avant-exam",
            questions: [
                {
                    question: "Quel est le pourcentage approximatif de clients qui reçoivent un résultat indiquant que \"tout est normal\" ?",
                    answer: "Vous pouvez prendre rendez-vous par téléphone ou via notre formulaire en ligne. Nos équipes sont disponibles pour vous assister dans le processus de réservation."
                },
                {
                    question: "Puis-je passer un scan si j'ai une pompe à perfusion implantable ?",
                    answer: "Un formulaire de santé confidentiel doit être rempli avant l'examen. Il est important de fournir des informations précises sur votre état de santé."
                },
                {
                    question: "Puis-je passer une IRM si j'ai un DIU ?",
                    answer: "Vous pouvez prendre rendez-vous par téléphone ou via notre formulaire en ligne. Nos équipes sont disponibles pour vous assister dans le processus de réservation."
                },
                {
                    question: "Puis-je subir une IRM si j'ai des plombages ou des dents en or ?",
                    answer: "Un formulaire de santé confidentiel doit être rempli avant l'examen. Il est important de fournir des informations précises sur votre état de santé."
                },
                {
                    question: "Les implants dentaires sont-ils affectés par les IRM ?",
                    answer: "Vous pouvez prendre rendez-vous par téléphone ou via notre formulaire en ligne. Nos équipes sont disponibles pour vous assister dans le processus de réservation."
                },
                {
                    question: "Quelle est la différence entre une échographie et une IRM ?",
                    answer: "Un formulaire de santé confidentiel doit être rempli avant l'examen. Il est important de fournir des informations précises sur votre état de santé."
                },
                {
                    question: "Puis-je être scanné si j'ai un stimulateur cardiaque ?",
                    answer: "Vous pouvez prendre rendez-vous par téléphone ou via notre formulaire en ligne. Nos équipes sont disponibles pour vous assister dans le processus de réservation."
                },
                {
                    question: "Les ondes radio utilisées dans l'IRM sont-elles sans risque ?",
                    answer: "Un formulaire de santé confidentiel doit être rempli avant l'examen. Il est important de fournir des informations précises sur votre état de santé."
                },
            ]
        },
        {
            onglet: "clinique",
            questions: [
                {
                    question: "Comment se déroule l'examen IRM ?",
                    answer: "L'examen IRM est non-intrusif et réalisé dans un confort optimal. Vous serez allongé sur une table qui glisse dans le tunnel de l'IRM."
                },
                {
                    question: "Combien de temps dure l'examen IRM ?",
                    answer: "L'examen dure environ 50 minutes, selon la région à scanner."
                },
                {
                    question: "Y a-t-il des effets secondaires à l'IRM ?",
                    answer: "L'IRM est généralement sans effets secondaires. Cependant, il est important de signaler tout inconfort au personnel médical."
                },
            ]
        },
        {
            onglet: "pendant-exam",
            questions: [
                {
                    question: "Que dois-je porter pendant l'examen IRM ?",
                    answer: "Il est recommandé de porter des vêtements confortables et sans métal. Des vêtements spécifiques peuvent être fournis sur place."
                },
                {
                    question: "Puis-je parler pendant l'examen ?",
                    answer: "Oui, vous pouvez communiquer avec le technicien via un interphone pendant l'examen."
                },
            ]
        },
        {
            onglet: "apres-exam",
            questions: [
                {
                    question: "Quand recevrai-je les résultats de mon examen ?",
                    answer: "Les résultats sont généralement disponibles dans les 48 heures suivant l'examen."
                },
                {
                    question: "Que faire si j'ai des questions sur mes résultats ?",
                    answer: "Vous pouvez contacter notre équipe médicale pour toute question ou clarification concernant vos résultats."
                },
            ]
        }
    ];
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";



    const timelineItems: TimelineItem[] = [
        { id: 1, title: t('step1-title'), description: t('step1-description'), reversed: true },
        { id: 2, title: t('step2-title'), description: t('step2-description') },
        { id: 3, title: t('step3-title'), description: t('step3-description'), reversed: true },
        { id: 4, title: t('step4-title'), description: t('step4-description') },
        { id: 5, title: t('step5-title'), description: t('step5-description'), reversed: true },
    ];

    const lineRef = useRef<HTMLDivElement>(null);
    const circlesRef = useRef<(HTMLDivElement | null)[]>([]);

    const updateStylesOnScroll = () => {
        const viewportCenter = window.innerHeight / 2;
        const line = lineRef.current;
        if (!line) return;

        // On calcule le pourcentage de scroll par rapport au viewport
        const rect = line.getBoundingClientRect();
        const start = rect.top;
        const end = rect.bottom;
        const centerPosition = (viewportCenter - start) / (end - start);

        // Dynamique : plus c’est au-dessus du centre, plus l'épaisseur augmente
        const topWidth = centerPosition > 0 ? 3 : 2;
        const bottomWidth = centerPosition < 1 ? 1 : 3;

        line.style.background = `
      linear-gradient(
        to bottom,
        white ${centerPosition * 100}%,
        rgba(255,255,255,0.5) ${centerPosition * 100}%
      )
    `;
        line.style.width = `${topWidth}px`;

        // Mise à jour des cercles
        circlesRef.current.forEach((circle) => {
            if (!circle) return;
            const circleRect = circle.getBoundingClientRect();
            const circleCenter = circleRect.top + circleRect.height / 2;

            if (circleCenter < viewportCenter) {
                circle.classList.add("bg-white", "text-black", "scale-110", "shadow-lg");
                circle.classList.remove("bg-[#100a18]", "text-white", "scale-100");
            } else {
                circle.classList.remove("bg-white", "text-black", "scale-110", "shadow-lg");
                circle.classList.add("bg-[#100a18]", "text-white", "scale-100");
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", updateStylesOnScroll);
        window.addEventListener("resize", updateStylesOnScroll);
        updateStylesOnScroll(); // Initial
        return () => {
            window.removeEventListener("scroll", updateStylesOnScroll);
            window.removeEventListener("resize", updateStylesOnScroll);
        };
    }, []);

    return (
        <>
            <section className="flex flex-col items-center justify-center py-8 min-h-screen relative mb-8">
                <h1 className="text-center inline text-[2.3rem] lg:text-5xl z-1 text-[#BABABA] leading-[110%] tracking-normal">
                    {t.rich('title', {
                        blanc: (chunks) => <><br/><span className='text-white'>{chunks}</span></>
                    })}
                </h1>
                <Image src="/3.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90% opacity-45'/>
            </section>
            <section className="relative flex justify-center px-4">
                {/* Ligne verticale */}
                <div
                    ref={lineRef}
                    className="hidden md:block absolute top-0 bottom-0 w-[2px] left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out"
                    style={{
                        background:
                            "linear-gradient(to bottom, white 5%, rgba(255,255,255,0.1) 100%)",
                    }}
                />

                {/* Liste des étapes */}
                <ol className="relative z-10 flex flex-col items-center gap-16">
                    {timelineItems.map((step, i) => (
                        <li key={i}
                            className={`flex ${step.reversed ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-16 w-full`}>
                            {/* Image à gauche */}
                            <div className="hidden md:block md:flex-1">
                                <Image
                                    src={`/protocole-${step.id}.webp`}
                                    width={300}
                                    height={300}
                                    alt=''
                                    className="w-full object-cover rounded-lg shadow-lg rounded-xl border-2 border-white/10 bg-white/20 "
                                />
                            </div>

                            {/* Cercle avec numéro */}
                            <div
                                ref={(el) => (circlesRef.current[i] = el!)}
                                className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-[#100a18] text-white font-bold text-lg transition-all duration-300 ease-in-out"
                            >
                                {i + 1}
                            </div>

                            {/* Texte à droite */}
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-300 text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>

                {/*<Image src="/3.webp" fill={true} alt=""*/}
                {/*       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90% opacity-20 blur-xs'/>*/}
            </section>

            <section className="flex flex-col justify-center p-8 min-h-screen relative">
                <div
                    className='z-1 w-full md:w-2/3 flex flex-col md:flex-row justify-center items-center mx-auto gap-16'>
                    <Image src="/Bilan-1.webp" width={500} height={500} alt=""
                           className='object-cover z-1 w-full md:w-2/3'/>

                    <ul className='md:w-1/3 flex flex-col items-start gap-6 z-1'>
                        <li className='flex items-start gap-4'>
                            <ListBullet classname='mt-3'/>
                            <div>
                                <h2 className='text-2xl font-bold'>{t('analysis-title')}</h2>
                                <p className='text-[#BABABA] font-light'>{t('analysis-description')}</p>
                            </div>
                        </li>
                        <li className='flex items-start gap-4'>
                            <ListBullet classname='mt-3'/>
                            <div>
                                <h2 className='text-2xl font-bold'>{t('summary-title')}</h2>
                                <p className='text-[#BABABA] font-light'>{t('summary-description')}</p>
                            </div>
                        </li>
                        <li className='flex items-start gap-4'>
                            <ListBullet classname='mt-3'/>
                            <div>
                                <h2 className='text-2xl font-bold'>{t('recommendations-title')}</h2>
                                <p className='text-[#BABABA] font-light'>{t('recommendations-description')}</p>
                            </div>
                        </li>
                        <li className='flex items-start gap-4'>
                            <ListBullet classname='mt-3'/>
                            <div>
                                <h2 className='text-2xl font-bold'>{t('details-title')}</h2>
                                <p className='text-[#BABABA] font-light'>{t('details-description')}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center py-8 min-h-screen relative mb-8 p-8">
                <h2 className="text-center justify-center tracking-tight inline text-[2.3rem] lg:text-4xl z-1 mb-16 text-[#BABABA] leading-[110%] tracking-normal">
                    {t.rich('price-section-title', {
                        blanc: (chunks) => <span className='text-white'>{chunks}</span>
                    })}
                </h2>

                <div className='w-2/3 flex flex-col md:flex-row gap-8 justify-around z-1 mb-8'>
                    <p className='text-2xl'><span
                        className='font-semibold'>{t('price-section-price-title')}</span><br/>{t('price-section-price')}
                    </p>
                    <p className='text-2xl'><span
                        className='font-semibold'>{t('price-section-duration-title')}</span><br/>{t('price-section-duration')}
                    </p>
                </div>

                <ButtonLink href='/#book-a-scan' variant='transparent'
                            className='uppercase'>{t('price-section-call-to-action')}</ButtonLink>

                <Image src="/1.webp" fill={true} alt=""
                       className='absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90% opacity-45'/>
            </section>

            <section className="flex flex-col gap-4 w-full md:w-1/2 px-8 mx-auto items-center">
                <h2 className="text-center justify-center tracking-tight inline text-[2.3rem] lg:text-4xl z-1 mb-16 text-[#BABABA] leading-[110%] tracking-normal">
                    {t.rich('faq-title', {
                        blanc: (chunks) => <span className='text-white'>{chunks}</span>
                    })}
                </h2>

                <ul className='flex flex-wrap justify-center items-center gap-2'>
                    <li>
                        <button
                            className={`z-1 transition-all cursor-pointer px-4 py-3 border border-gray-500 rounded-md bg-gradient-to-b from-[#2A252A] to-[#1A181A] hover:from-[#3A343A] hover:to-[#2A282A] transition-all duration-300 text-lg tracking-widest font-medium text-xs ${selectedTab === 'avant-exam' ? 'underline text-white' : 'opacity-45 hover:opacity-100'}`}
                            onClick={() => setSelectedTab('avant-exam')}>{t('faq-tab-1-title')}
                        </button>
                    </li>
                    <li>
                        <button
                            className={`z-1 transition-all cursor-pointer px-4 py-3 border border-gray-500 rounded-md bg-gradient-to-b from-[#2A252A] to-[#1A181A] hover:from-[#3A343A] hover:to-[#2A282A] transition-all duration-300 text-lg tracking-widest font-medium text-xs ${selectedTab === 'clinique' ? 'underline text-white' : 'opacity-45 hover:opacity-100'}`}
                            onClick={() => setSelectedTab('clinique')}>{t('faq-tab-2-title')}
                        </button>
                    </li>
                    <li>
                        <button
                            className={`z-1 transition-all cursor-pointer px-4 py-3 border border-gray-500 rounded-md bg-gradient-to-b from-[#2A252A] to-[#1A181A] hover:from-[#3A343A] hover:to-[#2A282A] transition-all duration-300 text-lg tracking-widest font-medium text-xs ${selectedTab === 'pendant-exam' ? 'underline text-white' : 'opacity-45 hover:opacity-100'}`}
                            onClick={() => setSelectedTab('pendant-exam')}>{t('faq-tab-3-title')}
                        </button>
                    </li>
                    <li>
                        <button
                            className={`z-1 transition-all cursor-pointer px-4 py-3 border border-gray-500 rounded-md bg-gradient-to-b from-[#2A252A] to-[#1A181A] hover:from-[#3A343A] hover:to-[#2A282A] transition-all duration-300 text-lg tracking-widest font-medium text-xs ${selectedTab === 'apres-exam' ? 'underline text-white' : 'opacity-45 hover:opacity-100'}`}
                            onClick={() => setSelectedTab('apres-exam')}>{t('faq-tab-4-title')}
                        </button>
                    </li>
                </ul>

                <Accordion>
                    <>
                        {FAQ.find(faq => faq.onglet === selectedTab)?.questions.map((item, index) => (
                            <AccordionItem key={index} title={item.question}>
                                {item.answer}
                            </AccordionItem>
                        ))}
                    </>
                </Accordion>
            </section>
        </>
    )
}