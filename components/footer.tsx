import React from 'react';
import {
    FaTwitter,
    FaFacebookF,
    FaInstagram
} from 'react-icons/fa';
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#100a18] text-gray-400 text-sm px-6 py-8 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row justify-between gap-6">
                {/* Logo + Réseaux sociaux */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <a href="/" aria-label="Accueil Revoscan" className='flex items-center justify-center w-fit'>
                        <Image
                            src="/logo-revoscan.svg"
                            width={150}
                            height={50}
                            alt="Revoscan"
                            className="h-6 md:h-8 self-center justify-self-center"
                        />
                    </a>
                    <nav aria-label="Réseaux sociaux" className="flex gap-4">
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
                        >
                            <FaInstagram />
                        </a>
                    </nav>
                </div>

                {/* Navigation principale */}
                <div>
                <nav aria-label="Navigation pied de page" className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-6 text-white">
                    <a href="#expertise" className="hover:underline focus:underline focus:outline-none">
                        Expertise
                    </a>
                    <a href="#vision" className="hover:underline focus:underline focus:outline-none">
                        Vision
                    </a>
                    <a href="#protocole" className="hover:underline focus:underline focus:outline-none">
                        Protocole
                    </a>
                    <a href="#contact" className="hover:underline focus:underline focus:outline-none">
                        Contact
                    </a>
                </nav>
                    {/* Bas de page */}
                    <div className="border-t border-gray-700 mt-6 pt-4 text-xs flex flex-col items-center md:flex-row gap-2 md:gap-6 justify-center md:justify-start">
                        <a href="#cookies" className="hover:underline focus:underline">
                            Cookies
                        </a>
                        <a href="#mentions" className="hover:underline focus:underline">
                            Mentions Légales
                        </a>
                        <span>©2025 – Revoscan</span>
                        <span>All rights reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
