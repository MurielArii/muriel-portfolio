import Image from "next/image";

type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  /** Chemin vers une capture d'écran dans /public, ex: "/images/projects/tiazaza.png" */
  preview?: string;
  svg: React.ReactNode;
};

const projects: Project[] = [
  {
    name: "TiaZaza",
    description: "Application web de gestion pour un orphelinat — suivi des enfants, dossiers et activités.",
    tags: ["React", "Tailwind CSS"],
    href: "https://wcc-s2-thony.netlify.app/",
    preview: "/images/projects/tiazaza.png",
    svg: (
      <svg className="fill-primary w-6 h-6" viewBox="0 0 24.432 24.432">
        <g><g>
          <path d="M6.42,9.301c1.771,0,3.205-1.435,3.205-3.208c0-1.105,0.389-2.117-0.465-2.691C8.648,3.053,6.4,2.888,5.736,2.888 c-0.79,0-1.817,0.644-2.376,1.119C2.665,4.594,3.213,5.111,3.213,6.092C3.213,7.866,4.646,9.301,6.42,9.301z M4.186,5.779 c0.589-0.107,0.989,0.087,0.989,0.087l0.984-0.479c0,0-0.501,0.724-0.051,0.479C7.11,5.53,8.231,5.67,8.801,5.782 c0.02,0.125,0.038,0.253,0.038,0.386c0,1.32-1.048,2.387-2.349,2.387c-1.294,0-2.343-1.067-2.343-2.387 C4.147,6.035,4.165,5.907,4.186,5.779z"/>
          <path d="M22.066,5.643c-0.015-0.183-0.03-0.365-0.07-0.541c-0.127-1.124-1.133-3.408-4.02-3.34 c-2.488,0.059-3.031,1.932-3.162,3.072c-0.088,0.28-0.145,0.573-0.164,0.878c-3.236,0.565-2.88,3.849-0.904,3.905 c-0.188-1.715,0.63-2.745,0.945-3.076c0.291,1.771,1.82,3.132,3.672,3.132c1.756,0,3.222-1.223,3.619-2.858 c0.303,0.534,0.812,1.628,0.688,2.803C25.783,9.591,24.251,6.032,22.066,5.643z M18.363,8.617c-1.455,0-2.639-1.172-2.672-2.621 c0.531-0.193,0.925-1.113,0.925-1.113s0.315,0.108,0.315,1.147c0.551,0.192,1.508-1.614,1.508-1.614v1.423 c0.607,0.166,2.521-0.054,2.521-0.054l0.071,0.06c0.001,0.03,0.009,0.061,0.009,0.092C21.042,7.415,19.842,8.617,18.363,8.617z"/>
          <polygon points="19.143,9.769 17.568,9.769 16.253,9.769 12.402,14.409 8.675,9.827 4.438,9.827 0,14.699 0.93,15.658 4.107,12.947 4.107,18.205 4.744,18.205 4.744,22.202 4.339,22.202 4.339,22.671 6.184,22.671 6.184,22.202 6.184,18.205 6.875,18.205 6.875,22.202 6.875,22.671 8.716,22.671 8.716,22.202 8.312,22.202 8.312,18.205 9.085,18.205 9.085,13.046 11.625,15.654 12.663,15.398 13.238,15.542 16.115,12.249 16.279,13.554 13.607,18.146 16.689,18.146 16.689,22.144 16.284,22.144 16.284,22.609 18.127,22.609 18.127,22.144 18.129,22.144 18.129,18.146 18.818,18.146 18.818,22.144 18.818,22.609 20.662,22.609 20.662,22.144 20.257,22.144 20.257,18.146 22.646,18.146 20.292,13.554 20.421,11.948 22.67,14.962 24.16,14.591 20.594,9.769"/>
        </g></g>
      </svg>
    ),
  },
  {
    name: "Portfolio",
    description: "Portfolio personnel développé avec Next.js — design cinématographique sombre avec animations CSS avancées.",
    tags: ["Next.js", "Tailwind CSS"],
    href: "#",
    preview: "/images/projects/portfolio.png",
    svg: (
      <svg className="fill-primary w-6 h-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z" />
      </svg>
    ),
  },
  {
    name: "Lanceur",
    description: "En-tête commune utilisée par toutes les plateformes MANAO — maintenance, ajout de nouvelles fonctionnalités.",
    tags: ["Vue.js", "CodeIgniter"],
    svg: (
      <svg className="fill-primary w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3h4v4H3V3zm7 0h4v4h-4V3zm7 0h4v4h-4V3zM3 10h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4zM3 17h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4z"/>
      </svg>
    ),
  },
  {
    name: "Assignment Problem",
    description: "Outil web de résolution du problème d'affectation optimale par algorithme hongrois.",
    tags: ["React", "Tailwind CSS"],
    href: "https://probleme-affectation.vercel.app/",
    preview: "/images/projects/affectation.png",
    svg: (
      <svg className="fill-primary w-6 h-6" viewBox="0 0 1920 1920">
        <path d="M1468.214 0v564.698h-112.94V112.94H112.94v1694.092h1242.334v-225.879h112.94v338.819H0V0h1468.214Zm129.428 581.311c22.137-22.136 57.825-22.136 79.962 0l225.879 225.879c22.023 22.023 22.023 57.712 0 79.848l-677.638 677.637c-10.616 10.504-24.96 16.49-39.98 16.49h-225.88c-31.17 0-56.469-25.299-56.469-56.47v-225.88c0-15.02 5.986-29.364 16.49-39.867Zm-155.291 314.988-425.895 425.895v146.031h146.03l425.895-425.895-146.03-146.03Zm-764.714 346.047v112.94H338.82v-112.94h338.818Zm225.88-225.88v112.94H338.818v-112.94h564.697Zm734.106-315.44-115.424 115.425 146.03 146.03 115.425-115.423-146.031-146.031ZM1129.395 338.83v451.758H338.82V338.83h790.576Zm-112.94 112.94H451.759v225.878h564.698V451.77Z" fillRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "Texteur",
    description: "Éditeur de texte collaboratif en temps réel avec WebSockets.",
    tags: ["Vue.js", "CodeIgniter", "Ratchet PHP"],
    preview: "/images/projects/texteur.png",
    svg: (
      <svg className="fill-primary w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm13 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.93.5a3.5 3.5 0 1 1 0 2h-8.57a1 1 0 0 1 0-2h8.57z"/>
      </svg>
    ),
  },
  {
    name: "Menabe",
    description: "Site vitrine pour une association régionale avec gestion de contenu et actualités.",
    tags: ["React", "Tailwind CSS"],
    href: "https://wcc-s1-raya.netlify.app/",
    preview: "/images/projects/menabe.png",
    svg: (
      <svg className="fill-primary w-6 h-6" viewBox="0 0 512 512">
        <path d="M174.1 25.24c-1.5.02-3 .07-4.4.14-23.7 1.24-46.2 10.36-67.9 22.99-4.17 2.43-11.67 13.73-16.3 24.44-4.63 10.72-7.35 20.36-7.35 20.36l-1.35 4.77-4.74 1.42C55.37 104.3 42.02 110 33.67 116.5c-8.35 6.5-11.96 12.8-11.83 22.6.03 1.9 1.68 4.9 5.67 7.7 3.99 2.9 9.77 5.1 13.77 5.6 21.86 2.8 43.22-5.2 65.02-17.9 21.9-12.6 43.6-29.6 65.9-42.82l4.7-2.75 4.6 2.81C218 113.9 251.3 108.9 290.3 108c8.7-.2 23.6-3.1 35.9-6 12.2-2.97 22-5.84 22-5.84l4.4-1.32 3.7 2.91c18.6 14.85 34 30.55 48.1 40.65 14.1 10.1 25.2 14.4 39.3 9.9 6-1.9 11.7-8 15.6-16.6 3.9-8.5 5.7-19.1 4.9-27-1.8-18.64-18.4-40.46-35.8-46.63-3.6-1.25-15.4.37-25.3 3.85-9.8 3.48-17.8 7.66-17.8 7.66l-4.6 2.38-4.4-2.73s-9.1-5.71-20.9-11.84c-11.7-6.13-26.5-12.48-34.8-13.77-9.2-1.45-26.7.29-41 2.76-14.2 2.47-25.7 5.37-25.7 5.37l-4 1.03-3.4-2.4c-24.6-17.39-46.9-24.43-68-25.09l.1-.01c-1.5-.05-3-.06-4.5-.04zm2.4 85.06c-5.7 3.5-11.4 7.3-17.2 11.2 9.1 11.5 16.9 23.7 33.1 31.9-22.5 1-42.4-4.3-59.8-14-5.4 3.6-10.9 7-16.5 10.3 5.6 2.7 11.9 4.8 19.8 5.7-3.7 5.2-12.4 9.3-22.5 13-.4 6.7-7.9 19.4 20.9 11 8.8-2.6 15.2-10.1 17.9-17.1 32.8 10.3 48.9 8.1 44.6 34.7-16.3 99.9-23.5 216.9-15.6 286.4 2.4 20.8 130.2 19.2 131.2 0 5.6-116.5-14.5-212.7-26-312.6l24.5-9.2c10.1 11.3 3.9 9.9-6.8 21.1l10.5 12.4c10.6-16.4 23.6-22.7 13.5-39l30.7-10.7c15.9 19.2 19.3 17 40 11-1.6-1-3.3-2.1-4.9-3.3-12.7-9.1-24.9-20.8-38.1-32.2-15.1 9.3-47.4 24.5-70 26.8 3.4-7.4 7.5-14.7 10.6-22-2 .1-3.9.3-5.7.3-6 .1-12 .4-18 .6-1.8 6.5-4.5 12.9-11.4 18.8-15.9 3.3-39.3 5.5-49-7.5 5-3.4 11.9-7.3 17.5-11.9-8.2-.8-16.5-2.3-24.9-4.6-3.3 2.6-6.8 4.5-10.1 4.4-6.8-.1-14.1-9.3-18.3-15.5z" />
      </svg>
    ),
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="relative bg-base-100 overflow-hidden py-24 lg:py-36"
    >
      {/* ── Grille sombre subtile ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.4 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.4 0 0) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Filigrane "03" ── */}
      <div className="absolute top-0 right-0 overflow-hidden pointer-events-none select-none leading-none">
        <p className="text-[22vw] font-black tracking-tighter text-primary/[0.03]">
          03
        </p>
      </div>

      {/* ── Blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[15%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[130px] animate-blob-float"
          style={{ animationDuration: "18s" }}
        />
        <div
          className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-secondary/4 rounded-full blur-[110px] animate-blob-float"
          style={{ animationDelay: "-9s", animationDuration: "22s" }}
        />
      </div>

      {/* ── Ligne verticale décorative ── */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <span className="text-[9px] font-bold tracking-[0.3em] text-primary/30 [writing-mode:vertical-rl]">
          03
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="relative z-10 px-8 lg:px-20 2xl:px-32">
        {/* ── Label section ── */}
        <div
          className="flex items-center gap-3 mb-5 animate-fade-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="w-6 h-px bg-primary/50" />
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary/70">
            Projets
          </span>
          <span className="w-6 h-px bg-primary/50" />
        </div>

        {/* ── Titre ── */}
        <h2
          className="font-black leading-[0.88] tracking-tight mb-16 animate-fade-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="block text-4xl lg:text-6xl 2xl:text-7xl text-base-content/75">
            Mes
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
            réalisations
          </span>
        </h2>

        {/* ── Grille projets ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="group relative flex flex-col border border-base-content/[0.07] bg-base-content/[0.02] hover:border-primary/25 hover:bg-primary/[0.02] transition-all duration-500 animate-fade-slide-up overflow-hidden"
              style={{ animationDelay: `${0.3 + i * 0.08}s` }}
            >
              {/* ── Shimmer sweep au hover ── */}
              <div className="card-shine-overlay" />
              {/* Coin neon haut-droite */}
              <div className="absolute top-0 right-0 w-20 h-px bg-gradient-to-l from-primary/50 to-transparent group-hover:from-primary transition-all duration-500" />
              <div className="absolute top-0 right-0 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent group-hover:from-primary transition-all duration-500" />

              {/* ── Header visuel ── */}
              <div className="relative h-36 shrink-0 overflow-hidden border-b border-base-content/[0.05]">
                {project.preview ? (
                  <>
                    <Image
                      src={project.preview}
                      alt={`Aperçu ${project.name}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay gradient bas → fond carte */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-base-100/30 to-base-100/95" />
                    {/* Teinte neon au hover */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.04] transition-colors duration-500" />
                  </>
                ) : (
                  /* Placeholder : gradient + SVG du projet mis à l'échelle */
                  <div className="h-full flex items-center justify-center bg-gradient-to-br from-primary/[0.07] via-transparent to-base-content/[0.02] group-hover:from-primary/[0.11] transition-all duration-500">
                    <div className="scale-[3] opacity-[0.18] group-hover:opacity-[0.28] transition-opacity duration-500 pointer-events-none select-none">
                      {project.svg}
                    </div>
                  </div>
                )}

                {/* Lien externe / badge privé */}
                <div className="absolute top-3 right-3 z-10">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 flex items-center justify-center border border-primary/25 bg-base-100/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-primary/15 hover:border-primary/50 transition-all duration-200"
                      aria-label={`Voir ${project.name}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5 stroke-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-1 bg-base-100/70 backdrop-blur-sm border border-base-content/[0.08] text-base-content/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Privé
                    </span>
                  )}
                </div>
              </div>

              {/* ── Contenu ── */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                {/* Icône + titre */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-primary/8 border border-primary/10 group-hover:border-primary/25 group-hover:bg-primary/12 transition-all duration-300 mt-0.5">
                    {project.svg}
                  </div>
                  <h3 className="font-bold text-base text-base-content/85 group-hover:text-base-content transition-colors duration-300 leading-snug mt-1">
                    {project.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-base-content/45 leading-relaxed group-hover:text-base-content/60 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2.5 py-1 tracking-wider uppercase border border-base-content/[0.08] text-base-content/40 group-hover:border-primary/20 group-hover:text-primary/60 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
