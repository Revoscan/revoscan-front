import React from "react";

export function Button({
    children,
    className = '',
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`z-1 transition-all cursor-pointer px-10 py-3 text-white border border-white rounded-full bg-gradient-to-b from-[#2A252A] to-[#1A181A] hover:from-[#3A343A] hover:to-[#2A282A] transition-all duration-300 text-lg tracking-widest font-medium ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
