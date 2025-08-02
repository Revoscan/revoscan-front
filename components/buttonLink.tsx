import React from "react";

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant: 'black' | 'transparent'
}

export function ButtonLink({
    variant = 'black',
    children,
    className = '',
    ...props
}: ButtonLinkProps) {
    const bg = variant === 'black' ? 'bg-gradient-to-b from-[#2A252A] to-[#1A181A] hover:from-[#3A343A] hover:to-[#2A282A]' : 'bg-white/10 hover:bg-white hover:text-black';

    return (
        <a
            className={`z-1 transition-all cursor-pointer px-10 py-3 text-white border border-white rounded-full ${bg} transition-all duration-300 text-lg tracking-widest font-medium ${className}`}
            {...props}
        >
            {children}
        </a>
    );
}
