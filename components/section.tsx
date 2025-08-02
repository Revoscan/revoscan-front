import Image from "next/image";
import React from "react";

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
    bgSrc?: string;
    bgOpacity?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Section({ bgSrc, bgOpacity, className, children, ...props }: SectionProps) {
    return (
        <section className={className ?? "flex flex-col items-center justify-center py-8 min-h-screen relative mb-8"} {...props} >
            {children}

            {bgSrc && (
                <Image src={bgSrc} fill={true} alt=""
                       className={`absolute w-full h-full object-cover mask-y-from-70% mask-y-to-90% ${bgOpacity ?? ''}`}/>
            )}
        </section>
    )
}