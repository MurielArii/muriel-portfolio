"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AboutMeSection() {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="relative bg-base-100 overflow-hidden py-24 lg:py-36"
    >
<div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.4 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.4 0 0) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
<div className="absolute top-0 right-0 overflow-hidden pointer-events-none select-none leading-none">
        <p className="text-[22vw] font-black tracking-tighter text-primary/[0.03]">
          01
        </p>
      </div>
<div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px] animate-blob-float"
          style={{ animationDuration: "14s" }}
        />
        <div
          className="absolute bottom-[0%] right-[5%] w-[300px] h-[300px] bg-secondary/6 rounded-full blur-[100px] animate-blob-float"
          style={{ animationDelay: "-5s", animationDuration: "18s" }}
        />
      </div>
<div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <span className="text-[9px] font-bold tracking-[0.3em] text-primary/30 [writing-mode:vertical-rl]">
          01
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="relative z-10 px-8 lg:px-20 2xl:px-32">
<div
          className="flex items-center gap-3 mb-5 animate-fade-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="w-6 h-px bg-primary/50" />
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary/70">
            {t.about.label}
          </span>
          <span className="w-6 h-px bg-primary/50" />
        </div>
<h2
          className="font-black leading-[0.88] tracking-tight mb-16 animate-fade-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="block text-4xl lg:text-6xl 2xl:text-7xl text-base-content/75">
            {t.about.titleLine1}
          </span>
          <span
            className="block text-4xl lg:text-6xl 2xl:text-7xl"
            style={{
              backgroundImage:
                "linear-gradient(120deg, var(--color-base-content) 20%, var(--color-primary) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.about.titleLine2}
          </span>
        </h2>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
<div
            className="lg:col-span-2 flex flex-col gap-8 animate-fade-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
<div className="relative w-fit">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-125 pointer-events-none" />
              <div className="relative w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden ring-1 ring-primary/30">
                <Image
                  src="/images/Muriel.jpeg"
                  alt="Muriel Ranaivoson"
                  fill
                  sizes="(max-width: 1024px) 144px, 176px"
                  className="object-cover object-[50%_15%]"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-3 flex items-center justify-center px-3 py-1.5 bg-base-100 border border-primary/30 rounded-full"
                style={{
                  boxShadow:
                    "0 0 10px color-mix(in oklch, var(--color-primary) 18%, transparent)",
                }}
              >
                <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-primary leading-none">
                  {t.about.role}
                </span>
              </div>
            </div>
<div className="mt-1">
              <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-base-content leading-tight">
                Muriel
              </h3>
              <p className="text-lg lg:text-xl font-bold tracking-[0.1em] text-base-content/40 mt-0.5">
                Ranaivoson Arisoa
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div
                  className="w-6 h-px bg-primary"
                  style={{ boxShadow: "0 0 6px var(--color-primary)" }}
                />
                <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-primary/60">
                  {t.about.roleLabel}
                </p>
                <span className="w-[2px] h-3 bg-primary/60 rounded-full animate-cursor-blink" />
              </div>
            </div>
<div className="flex flex-col gap-3">
              <a
                href="tel:+261346685721"
                className="group flex items-center gap-3 text-sm text-base-content/45 hover:text-base-content/80 transition-colors duration-300"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-base-content/10 group-hover:border-primary/40 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>
                +261 34 66 857 21
              </a>
              <a
                href="mailto:murielarisoaran@gmail.com"
                className="group flex items-center gap-3 text-sm text-base-content/45 hover:text-base-content/80 transition-colors duration-300 min-w-0"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-base-content/10 group-hover:border-primary/40 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <span className="break-all">murielarisoaran@gmail.com</span>
              </a>
            </div>
<div className="flex items-center gap-3">
              <span className="text-xs text-base-content/30 tracking-[0.22em] uppercase">
                {t.about.follow}
              </span>
              <div className="h-px w-4 bg-base-content/20" />

              <a
                href="https://web.facebook.com/murielranaivo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-base-content/15 flex items-center justify-center text-base-content/35 hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 1920 1920">
                  <path
                    d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/muriel-ranaivoson-353180253/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-base-content/15 flex items-center justify-center text-base-content/35 hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://github.com/MurielArii"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full border border-base-content/15 flex items-center justify-center text-base-content/35 hover:text-primary hover:border-primary/40 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
<div
            className="lg:col-span-3 flex flex-col gap-12 animate-fade-slide-up"
            style={{ animationDelay: "0.45s" }}
          >
<div className="relative">
              <span
                className="absolute -top-6 -left-1 text-[6rem] font-black leading-none text-primary/10 select-none pointer-events-none"
                aria-hidden="true"
              >
                "
              </span>
              <div className="pt-6 pl-2">
                <p className="text-base-content/60 text-lg lg:text-xl leading-relaxed">
                  {t.about.bio}{" "}
                  <span className="text-base-content/90 font-semibold">
                    {t.about.bioHighlight}
                  </span>{" "}
                  {t.about.bioEnd}
                </p>

                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-3 mt-8 px-6 py-2.5 text-sm font-bold tracking-[0.18em] uppercase overflow-hidden border border-primary/50 hover:border-primary transition-colors duration-300"
                >
                  <span className="absolute inset-0 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 text-base-content group-hover:text-primary-content transition-colors delay-150 duration-150">
                    {t.about.viewProjects}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="relative z-10 w-4 h-4 text-primary group-hover:text-primary-content group-hover:translate-x-1 transition-all duration-300 delay-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
<div>
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-6 h-px bg-primary shrink-0"
                  style={{
                    boxShadow:
                      "0 0 6px var(--color-primary), 0 0 16px color-mix(in oklch, var(--color-primary) 40%, transparent)",
                  }}
                />
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
                  {t.about.languagesLabel}
                </p>
              </div>
              <div className="flex flex-col gap-5">
                {t.about.languages.map(({ name, level }) => (
                  <div key={name} className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-base-content/70">{name}</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/50">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
