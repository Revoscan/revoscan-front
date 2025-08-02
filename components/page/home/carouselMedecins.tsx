import React from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/carousel";
import Image from "next/image";

export default function CarouselMedecins() {
    const medecins = [
        {
            nom: 'Dr. Abed Kourhani',
            specialite: 'Radiologue',
            image: '/abed-kourhani.webp',
        },
        {
            nom: 'Dr. Diomidis Botsikas',
            specialite: 'Radiologue',
            image: '/diomidis-botsikas.webp',
        },
        {
            nom: 'Dr. Layla Lahoud',
            specialite: 'Radiologue',
            image: '/layla-lahoud.webp',
        },
        {
            nom: 'Dr. Abed Kourhani',
            specialite: 'Radiologue',
            image: '/abed-kourhani.webp',
        },
        {
            nom: 'Dr. Diomidis Botsikas',
            specialite: 'Radiologue',
            image: '/diomidis-botsikas.webp',
        },
        {
            nom: 'Dr. Layla Lahoud',
            specialite: 'Radiologue',
            image: '/layla-lahoud.webp',
        },
    ];

    return (
        <>
            <Carousel className="relative w-full md:w-2/3 mx-auto my-8 z-1" opts={{
                loop: true
            }}>
                <CarouselContent>
                    {medecins.map((medecin, index) => (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                            <div
                                className="w-full flex-shrink-0 px-4 relative"
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`${medecin.nom}, ${medecin.specialite}`}
                            >
                                <div
                                    className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col">
                                    <Image
                                        src={medecin.image}
                                        alt={`Photo de ${medecin.nom}`}
                                        width={500}
                                        height={500}
                                        className="rounded-xl mx-auto w-auto mt-16"
                                    />
                                    <h3 className="font-semibold text-3xl text-left absolute bottom-8 left-2 md:bottom-24 md:left-12">{medecin.nom}</h3>
                                    <p className="text-2xl absolute bottom-0 left-2 md:bottom-16 md:left-12">{medecin.specialite}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className='absolute -bottom-[25px] md:bottom-0 w-1/2 md:1/3 mx-auto left-1/2 transform -translate-x-1/2'>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </div>
            </Carousel>
        </>
    )
}