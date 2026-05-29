"use client";

import Image from "next/image";
import { useRef, useEffect, useCallback } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const sectionRef  = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const nameRef      = useRef<HTMLSpanElement>(null);

  
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    const original = "RANAIVOSON";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let frame = 0;
    let rafId: number;

    const tick = () => {
      const revealed = Math.floor(Math.max(0, frame - 6) / 2);
      el.textContent = original
        .split("")
        .map((ch, i) =>
          i < revealed ? ch : alphabet[Math.floor(Math.random() * 26)]
        )
        .join("");
      frame++;
      if (revealed < original.length) {
        rafId = requestAnimationFrame(tick);
      } else {
        el.textContent = original;
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect || !spotlightRef.current) return;
    const x = ((e.clientX - rect.left) / rect.width)  * 100;
    const y = ((e.clientY - rect.top)  / rect.height) * 100;


    const isDesktop = rect.width >= 1024;
    const fade = isDesktop
      ? Math.max(0, Math.min(1, (52 - x) / 18)) // 100% à x≤34%, 0% à x≥52%
      : 1;

    spotlightRef.current.style.opacity = String(fade);
    spotlightRef.current.style.background =
      `radial-gradient(700px circle at ${x}% ${y}%, color-mix(in oklch, var(--color-primary) 9%, transparent), transparent 65%)`;
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen overflow-hidden bg-base-100"
      onMouseMove={onMouseMove}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.4 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.4 0 0) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
<div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none"
        style={{ transition: "background 0.12s ease" }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="parallax-blob absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-blob-float"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="parallax-blob absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-primary/6 rounded-full blur-[100px] animate-blob-float"
          style={{ animationDelay: "-4s", animationDuration: "14s" }}
        />
        <div
          className="parallax-blob absolute top-[35%] right-[3%] w-[180px] h-[180px] bg-secondary/8 rounded-full blur-[80px] animate-blob-float"
          style={{ animationDelay: "-7s", animationDuration: "9s" }}
        />
      </div>


      <div
        id="hero-parallax-img"
        className="absolute top-0 bottom-0 left-0 right-0 lg:left-[50%] lg:top-[10%]"
        style={{ height: "100vh" }}
      >
        <Image
          src="/images/Muriel.png"
          alt={t.hero.profileAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 62vw"
          className="object-cover object-[50%_0%] lg:object-[100%_0%]"
          priority
        />
<div className="absolute inset-0 bg-gradient-to-r from-base-100 via-base-100/80 lg:via-base-100/55 to-base-100/10 lg:to-transparent" />
<div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/20 to-transparent" />
<div className="absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-base-100 to-transparent hidden lg:block" />
<div className="absolute inset-0 bg-base-100/55 lg:hidden" />
      </div>

      <div className="absolute -bottom-[2vw] left-0 right-0 overflow-hidden pointer-events-none select-none">
        <p className="text-[14vw] font-black leading-none text-center tracking-tighter text-primary/[0.045]">
          PORTFOLIO
        </p>
      </div>

      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <span className="text-[9px] font-bold tracking-[0.3em] text-primary/30 [writing-mode:vertical-rl]">
          2026
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-20 2xl:px-32">
        <div className="max-w-lg lg:max-w-xl">

          <p
            className="flex items-baseline gap-2.5 mb-3 text-xl lg:text-2xl font-light tracking-wide animate-fade-slide-up"
            style={{ animationDelay: "0.25s" }}
          >
            <span className="text-base-content/75">{t.hero.greeting}</span>
            <span className="text-base-content/35">{t.hero.greetingSuffix}</span>
          </p>

          <h1
            className="font-black leading-[0.9] tracking-tight text-base-content mb-6 animate-fade-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span ref={nameRef} className="block text-4xl sm:text-5xl lg:text-7xl 2xl:text-8xl">
              RANAIVOSON
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-base-content/55 tracking-[0.12em] mt-1">
              Arisoa
            </span>
            <span
              className="block text-4xl sm:text-5xl lg:text-7xl 2xl:text-8xl"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, var(--color-base-content) 20%, var(--color-primary) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "fade-slide-up 0.75s 0.5s ease-out both",
              }}
            >
              Muriel
            </span>
          </h1>

          <div
            className="flex items-center gap-3 mb-6 animate-fade-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div
              className="w-8 h-px bg-primary shrink-0"
              style={{
                boxShadow:
                  "0 0 6px var(--color-primary), 0 0 16px color-mix(in oklch, var(--color-primary) 50%, transparent)",
              }}
            />
            <p className="text-base-content/65 text-base lg:text-lg font-medium tracking-widest uppercase text-[0.82rem] lg:text-[0.9rem]">
              {t.hero.role}
            </p>
            <span className="w-[2px] h-4 bg-primary/70 rounded-full animate-cursor-blink" />
          </div>

          <p
            className="text-base-content/50 text-base lg:text-lg leading-relaxed max-w-xs lg:max-w-sm mb-10 animate-fade-slide-up"
            style={{ animationDelay: "0.75s" }}
          >
            {t.hero.description}
          </p>

          <div
            className="flex flex-wrap items-center gap-8 mb-10 relative z-10 animate-fade-slide-up"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="/CV_MurielArisoaRanaivoson.pdf"
              download
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 text-sm font-bold tracking-[0.18em] uppercase overflow-hidden border border-primary/50 hover:border-primary transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              <span className="relative z-10 text-base-content group-hover:text-primary-content transition-colors delay-150 duration-150">
                {t.hero.downloadCV}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="relative z-10 w-4 h-4 text-primary group-hover:text-primary-content group-hover:translate-y-0.5 transition-all duration-300 delay-100"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 py-2 text-sm font-medium tracking-[0.18em] uppercase text-base-content/45 hover:text-base-content transition-colors duration-300"
            >
              {t.hero.contactMe}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              <span
                className="absolute bottom-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out"
                style={{ boxShadow: "0 0 6px var(--color-primary)" }}
              />
            </a>
          </div>

        </div>
      </div>

      <div
        className="absolute bottom-10 right-10 lg:right-16 hidden lg:flex flex-col items-center gap-3 animate-fade-slide-up"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="w-px h-14 bg-gradient-to-b from-primary/50 to-transparent animate-scroll-breath" />
        <span className="text-[9px] font-bold tracking-[0.3em] text-primary/40 [writing-mode:vertical-rl] mt-1">
          SCROLL
        </span>
      </div>
    </section>
  );
}
