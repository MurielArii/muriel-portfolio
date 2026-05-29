"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message de ${form.name}`);
    const body = encodeURIComponent(`Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:murielarisoaran@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative bg-base-100 overflow-hidden py-24 lg:py-36"
    >
      {/* ── Filigrane "06" centré ── */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <p className="text-[40vw] font-black tracking-tighter text-primary/[0.02] leading-none">
          06
        </p>
      </div>

      {/* ── Blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[15%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[130px] animate-blob-float"
          style={{ animationDuration: "18s" }}
        />
        <div
          className="absolute bottom-[10%] left-[5%] w-[280px] h-[280px] bg-secondary/4 rounded-full blur-[110px] animate-blob-float"
          style={{ animationDelay: "-9s", animationDuration: "22s" }}
        />
      </div>

      {/* ── Ligne verticale décorative ── */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <span className="text-[9px] font-bold tracking-[0.3em] text-primary/30 [writing-mode:vertical-rl]">
          06
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="relative z-10 px-8 lg:px-20 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">

          {/* ── Colonne gauche : titre + infos ── */}
          <div className="lg:sticky lg:top-32">
            {/* Label */}
            <div
              className="flex items-center gap-3 mb-5 animate-fade-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-6 h-px bg-primary/50" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary/70">
                Contact
              </span>
              <span className="w-6 h-px bg-primary/50" />
            </div>

            {/* Titre */}
            <h2
              className="font-black leading-[0.88] tracking-tight mb-10 animate-fade-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="block text-4xl lg:text-6xl 2xl:text-7xl text-base-content/75">
                Me
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
                contacter
              </span>
            </h2>

            {/* Texte */}
            <p
              className="text-sm text-base-content/40 leading-relaxed max-w-xs mb-12 animate-fade-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              Une opportunité, une collaboration ou juste un message —
              n&apos;hésitez pas, je réponds.
            </p>

            {/* Email */}
            <a
              href="mailto:murielarisoaran@gmail.com"
              className="animate-fade-slide-up group flex items-center gap-3 mb-8 w-fit"
              style={{ animationDelay: "0.35s" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors duration-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span className="text-sm text-base-content/50 group-hover:text-primary transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-primary group-hover:after:w-full after:transition-all after:duration-300 break-all">
                murielarisoaran@gmail.com
              </span>
            </a>

            {/* Liens sociaux */}
            <div className="flex items-center gap-5 animate-fade-slide-up" style={{ animationDelay: "0.4s" }}>
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/",
                  svg: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/",
                  svg: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base-content/25 hover:text-primary transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.svg}
                </a>
              ))}
            </div>
          </div>

          {/* ── Colonne droite : formulaire ── */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 animate-fade-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Nom */}
            <div className="group">
              <label className="block text-[10px] font-semibold tracking-[0.25em] uppercase text-base-content/30 mb-3 group-focus-within:text-primary/70 transition-colors duration-300">
                Nom
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-base-content/[0.12] pb-3 text-base-content/80 text-sm placeholder:text-base-content/15 focus:outline-none focus:border-primary/60 transition-colors duration-300"
                placeholder="Votre nom"
              />
            </div>

            {/* Email */}
            <div className="group">
              <label className="block text-[10px] font-semibold tracking-[0.25em] uppercase text-base-content/30 mb-3 group-focus-within:text-primary/70 transition-colors duration-300">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-base-content/[0.12] pb-3 text-base-content/80 text-sm placeholder:text-base-content/15 focus:outline-none focus:border-primary/60 transition-colors duration-300"
                placeholder="votre@email.com"
              />
            </div>

            {/* Message */}
            <div className="group">
              <label className="block text-[10px] font-semibold tracking-[0.25em] uppercase text-base-content/30 mb-3 group-focus-within:text-primary/70 transition-colors duration-300">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-base-content/[0.12] pb-3 text-base-content/80 text-sm placeholder:text-base-content/15 focus:outline-none focus:border-primary/60 transition-colors duration-300 resize-none"
                placeholder="Votre message..."
              />
            </div>

            {/* Bouton */}
            <button
              type="submit"
              className="group relative w-fit flex items-center gap-3 px-8 py-4 text-[11px] font-bold tracking-[0.25em] uppercase overflow-hidden"
              style={{
                border: "1px solid color-mix(in oklch, var(--color-primary) 40%, transparent)",
              }}
            >
              {/* Fond neon au hover */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "color-mix(in oklch, var(--color-primary) 10%, transparent)" }}
              />
              <span
                className="relative text-primary/80 group-hover:text-primary transition-colors duration-300"
              >
                Envoyer le message
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative w-4 h-4 text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
