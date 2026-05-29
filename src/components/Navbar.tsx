"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dim");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setPastHero(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map(({ href }) => href.replace("#", ""));
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === "dim" ? "light" : "dim";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-base-100/80 backdrop-blur-md border-b border-base-content/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="px-8 lg:px-20 2xl:px-32 py-4 lg:py-5 flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#home" className="flex flex-col leading-none group shrink-0">
          <div className="flex items-end gap-0.5">
            <span className="text-xl lg:text-2xl font-black tracking-wide text-base-content transition-colors duration-300">
              Muriel
            </span>
            <span
              className="text-primary text-2xl lg:text-3xl font-black leading-none mb-0.5"
              style={{ textShadow: "0 0 10px var(--color-primary)" }}
            >
              .
            </span>
          </div>
          <span className="text-[9px] tracking-[0.3em] uppercase text-base-content/35 group-hover:text-primary/60 transition-colors duration-300 pl-0.5">
            Ranaivoson
          </span>
        </a>

        {/* ── Liens desktop ── */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <a
                key={href}
                href={href}
                className={`relative text-[11px] font-semibold tracking-[0.25em] uppercase transition-colors duration-300 group ${
                  isActive ? "text-base-content" : "text-base-content/40 hover:text-base-content"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{ boxShadow: "0 0 5px var(--color-primary)" }}
                />
              </a>
            );
          })}
        </div>

        {/* ── Actions ── */}
        <div className="flex items-center gap-4 lg:gap-5">

          {/* Thème + CV — toujours visibles */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Toggle thème */}
            <button
              onClick={toggleTheme}
              aria-label="Changer le thème"
              className="text-base-content/35 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              {theme === "light" ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              )}
            </button>
            {/* CV */}
            <a
              href="/CV_MurielArisoaRanaivoson.pdf"
              download
              className="group inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase overflow-hidden relative border border-primary/40 hover:border-primary transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              <span className="relative z-10 text-primary group-hover:text-primary-content transition-colors delay-100 duration-150">CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                className="relative z-10 w-3.5 h-3.5 text-primary group-hover:text-primary-content group-hover:translate-y-0.5 transition-all duration-300 delay-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>
          </div>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="lg:hidden flex flex-col justify-center gap-[5px] w-6 h-6 text-base-content/50 hover:text-primary transition-colors duration-300"
          >
            <span className={`block h-px w-6 bg-current origin-center transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4"}`} />
            <span className={`block h-px w-6 bg-current origin-center transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Menu mobile ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-base-100/95 backdrop-blur-md border-t border-base-content/[0.06] px-8 py-6 flex flex-col gap-5">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-semibold tracking-[0.25em] uppercase transition-colors duration-300 w-fit ${
                activeSection === href.replace("#", "")
                  ? "text-primary"
                  : "text-base-content/45 hover:text-primary"
              }`}
            >
              {label}
            </a>
          ))}
          <div className="h-px w-full bg-base-content/[0.06]" />
        </div>
      </div>
    </header>
  );
}
