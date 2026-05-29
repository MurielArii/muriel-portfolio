"use client";

import { useEffect, useRef } from "react";

export default function ScrollAnimations() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.07 }
    );

    sections.forEach((s) => revealObserver.observe(s));
    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target
            .querySelectorAll<HTMLElement>("[data-stagger]")
            .forEach((child, i) => {
              child.style.transitionDelay = `${i * 0.07}s`;
              child.classList.add("revealed");
            });
          staggerObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll("[data-stagger-parent]")
      .forEach((el) => staggerObserver.observe(el));
    const heroBlobs = document.querySelectorAll<HTMLElement>("#home .parallax-blob");

    const progress = progressRef.current;
    let rafId: number;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y   = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progress) progress.style.width = `${(y / max) * 100}%`;
        heroBlobs.forEach((blob, i) => {
          const speed = i % 2 === 0 ? 0.12 : -0.08;
          blob.style.transform = `translateY(${y * speed}px)`;
        });
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      staggerObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    
    <div className="fixed top-0 left-0 right-0 z-[80] h-[2px] pointer-events-none">
      <div
        ref={progressRef}
        className="h-full bg-primary"
        style={{
          width: "0%",
          boxShadow:
            "0 0 10px var(--color-primary), 0 0 22px color-mix(in oklch, var(--color-primary) 45%, transparent)",
          transition: "width 0.06s linear",
        }}
      />
    </div>
  );
}
