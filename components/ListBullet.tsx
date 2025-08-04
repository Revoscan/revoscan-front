import React from "react";

export default function ListBullet({classname}: {classname?: string}) {
    return (
        <span aria-hidden={true} className={`shrink-0 relative w-3 h-3 rotate-45 rounded-xs border border-white/40 bg-transparent
             shadow-[0_0_50px_rgba(255,255,255,0.05),0_0_1px_rgba(255,255,255,0.45),1px_1px_3px_rgba(255,255,255,0.2)]
             before:content-[''] before:absolute before:inset-0 before:rounded-xs before:blur-[50px] before:bg-white/5
             after:content-[''] after:absolute after:inset-0 after:rounded-xs after:shadow-[0_0_4px_1px_rgba(255,255,255,1)] ${classname || ''}`}
        ></span>
    );
}