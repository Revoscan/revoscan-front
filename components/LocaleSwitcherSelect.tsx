'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {locales} from "@/i18n/config";

export default function LanguageSwitcher() {
    const pathname = usePathname(); // ex: "/fr/contact" ou "/en/contact"

    return (
        <div className="flex gap-2">
            {locales.map((lng) => {
                // Remplace le prefix de langue actuel
                const segments = pathname.split('/');
                segments[1] = lng; // Remplace la locale
                const newPath = segments.join('/') || '/';

                return (
                    <Link
                        key={lng}
                        href={newPath}
                        className="px-3 py-1 border rounded hover:bg-gray-200 hover:text-black"
                    >
                        {lng.toUpperCase()}
                    </Link>
                );
            })}
        </div>
    );
}
