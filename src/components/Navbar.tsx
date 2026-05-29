"use client";

import { useState, useEffect, useMemo } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Navbar() {
  const { locale, t, toggleLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dim");
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = useMemo(
    () => [
      { href: "#home", label: t.nav.home },
      { href: "#about", label: t.nav.about },
      { href: "#stack", label: t.nav.stack },
      { href: "#projects", label: t.nav.projects },
      { href: "#education", label: t.nav.education },
      { href: "#experience", label: t.nav.experience },
      { href: "#contact", label: t.nav.contact },
    ],
    [t]
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
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
  }, [navLinks]);

  const toggleTheme = () => {
    const next = theme === "dim" ? "light" : "dim";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-base-100/60 backdrop-blur-xl border-b border-base-content/[0.05] shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="px-8 lg:px-20 2xl:px-32 py-4 lg:py-5 flex items-center justify-between">
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
<div className="flex items-center gap-5">

          <button
            onClick={toggleLocale}
            aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-base-content/35 hover:text-primary transition-colors duration-300"
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>


          <button
            onClick={toggleTheme}
            aria-label={t.nav.changeTheme}
            className="hidden sm:block text-base-content/35 hover:text-primary transition-colors duration-300"
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-[18px] h-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-[18px] h-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            )}
          </button>

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
          <button
            onClick={toggleLocale}
            className="text-sm font-semibold tracking-[0.25em] uppercase text-base-content/45 hover:text-primary transition-colors duration-300 w-fit"
          >
            {locale === "fr" ? "English" : "Français"}
          </button>
        </div>
      </div>
    </header>
  );
}
