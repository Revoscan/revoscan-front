'use client'
import { useEffect, useRef } from 'react';

export function useFadeInOnScroll<T extends HTMLElement>() {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Initial state
        element.classList.add('opacity-0', 'transition-opacity', 'duration-700');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        element.classList.add('opacity-100');
                        element.classList.remove('opacity-0');
                    } else {
                        element.classList.remove('opacity-100');
                        element.classList.add('opacity-0');
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(element);
        return () => observer.unobserve(element);
    }, []);

    return ref;
}