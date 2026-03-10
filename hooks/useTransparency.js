'use client'

import { useEffect } from "react";

export const useTransparency = () => {
    useEffect(() => {
        function triggerReveals() {
            const els = document.querySelectorAll('.page.active .rv');
            const io = new IntersectionObserver(entries => {
                entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
            }, { threshold: .07, rootMargin: '0px 0px -40px 0px' });
            els.forEach(el => { if (!el.classList.contains('in')) io.observe(el); });
        }
        triggerReveals();
    }, [])
    return null
}