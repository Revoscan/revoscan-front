'use client'

import React from 'react';
import Image from "next/image";


const AvisClients: React.FC = () => {
    return (
        <>
            <div
                className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-md px-6 py-12 text-white shadow-inner custom-glow z-1">
                <div className="flex items-center mb-3">

                    <Image src="/79.jpg" width={50} height={50} alt="Photo de Alex Fischer"
                           className="rounded-full mr-3"/>
                    <div>
                        <h3 className="font-semibold">Alex Fischer</h3>
                        <p className="text-sm text-gray-300">2025</p>
                    </div>
                </div>
                    <p className="text-gray-200 text-sm">
                        Des soins qui changent la vie et dépassent les attentes – notre santé est entre de bonnes
                        mains.
                    </p>
                </div>

                <div
                    className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-md px-6 py-12 text-white shadow-inner custom-glow z-1">
                    <div className="flex items-center mb-3">
                        <Image src="/71.jpg" alt="Photo de Attyé Dallia" width={50} height={50}
                               className="rounded-full mr-3"/>
                        <div>
                            <h3 className="font-semibold">Attyé Dallia</h3>
                            <p className="text-sm text-gray-300">2025</p>
                        </div>
                    </div>
                    <p className="text-gray-200 text-sm">
                        Une expérience exceptionnelle où je me suis senti complètement pris en charge. Ma santé passe
                        avant tout
                        et cet appareil est tout simplement révolutionnaire.
                    </p>
                </div>
                <div
                    className="md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-6 rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-md text-white shadow-inner custom-glow z-1">
                    <Image src="/couple-course.webp" alt="Couple en train de courir" width={500} height={500}
                           className="rounded-lg shadow-lg w-full h-full object-cover"/>
                </div>
                <div
                    className="md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-4 rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-md text-white shadow-inner custom-glow z-1">
                    <Image src="/rando.webp" alt="Randonnée en montagne" width={500} height={500}
                           className="rounded-lg shadow-lg w-full h-full object-cover"/>
                </div>
                <div
                    className="md:col-start-3 md:col-end-5 md:row-start-4 md:row-end-6 rounded-xl border-2 border-white/10 bg-white/5 backdrop-blur-md px-6 py-12 text-white shadow-inner custom-glow z-1">
                    <div className="flex items-center mb-3">
                        <Image src="/90.jpg" alt="Photo de Lina Frei" width={50} height={50}
                               className="rounded-full mr-3"/>
                        <div>
                            <h3 className="font-semibold">Lina Frei</h3>
                            <p className="text-sm text-gray-300">2025</p>
                        </div>
                    </div>
                    <p className="text-gray-200 text-sm">
                        Je me sens toujours bien pris en charge ici. Il est clair qu’ils donnent la priorité à la
                        satisfaction
                        des patients, et je ne pourrais pas être plus satisfait des soins que j’ai reçus chez
                        Revoscan.
                        <br/><br/>
                        Un niveau de service inégalé, un professionnalisme et une hospitalité à son meilleur.
                    </p>
                </div>
        </>
)
}

export default AvisClients;
