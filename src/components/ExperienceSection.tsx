type Experience = {
  period: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  primary?: boolean;
};

type Award = {
  period: string;
  title: string;
  place: string;
  tags: string[];
};

const experiences: Experience[] = [
  {
    period: "Janv. 2025 – Mai 2026",
    title: "Développeur Fullstack",
    company: "Manao Logiciels, Fianarantsoa",
    description: "Développement fullstack d'applications web et temps réel.",
    tags: ["Vue.js", "CodeIgniter", "Ratchet PHP", "MySQL", "Agile / Scrum"],
    primary: true,
  },
  {
    period: "Juil. 2023 – Déc. 2023",
    title: "Développeur Web",
    company: "Ministère de la Communication et de la Culture, Antananarivo",
    description: "Développement et maintenance d'applications web internes.",
    tags: ["Symfony", "PHP", "MySQL"],
  },
  {
    period: "Juil. 2022 – Déc. 2022",
    title: "Développeur PHP",
    company: "Manao Logiciels, Fianarantsoa",
    description: "Développement et maintenance d'applications web internes.",
    tags: ["PHP", "CodeIgniter", "MySQL"],
  },
];

const awards: Award[] = [
  {
    period: "Juillet 2023",
    title: "Weekly Coding Challenge",
    place: "1st Place — Frontend Category · By TechZara",
    tags: ["React", "Tailwind"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative bg-base-100 overflow-hidden py-24 lg:py-36"
    >
      {/* ── Lignes horizontales (scanlines) ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.4 0 0) 1px, transparent 1px)",
          backgroundSize: "100% 48px",
        }}
      />

      {/* ── Filigrane "05" ── */}
      <div className="absolute bottom-0 right-0 overflow-hidden pointer-events-none select-none leading-none">
        <p className="text-[28vw] font-black tracking-tighter text-primary/[0.03]">
          05
        </p>
      </div>

      {/* ── Blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[10%] right-[-8%] w-[420px] h-[420px] bg-primary/5 rounded-full blur-[140px] animate-blob-float"
          style={{ animationDuration: "19s" }}
        />
        <div
          className="absolute bottom-[5%] left-[5%] w-[280px] h-[280px] bg-secondary/4 rounded-full blur-[110px] animate-blob-float"
          style={{ animationDelay: "-11s", animationDuration: "23s" }}
        />
      </div>

      {/* ── Ligne verticale décorative ── */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <span className="text-[9px] font-bold tracking-[0.3em] text-primary/30 [writing-mode:vertical-rl]">
          05
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="relative z-10 px-8 lg:px-20 2xl:px-32">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* ── Colonne gauche : Expériences ── */}
          <div>
            <div className="flex items-center gap-3 mb-5 animate-fade-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="w-6 h-px bg-primary/50" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary/70">Expériences</span>
              <span className="w-6 h-px bg-primary/50" />
            </div>

            <h2
              className="font-black leading-[0.88] tracking-tight mb-14 animate-fade-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="block text-4xl lg:text-5xl 2xl:text-6xl text-base-content/75">Mes</span>
              <span
                className="block text-4xl lg:text-5xl 2xl:text-6xl"
                style={{
                  backgroundImage: "linear-gradient(120deg, var(--color-base-content) 20%, var(--color-primary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                expériences
              </span>
            </h2>

            <div className="divide-y divide-base-content/[0.06]">
              {experiences.map((exp, i) => (
                <div
                  key={exp.title + i}
                  className="py-8 first:pt-0 group animate-fade-slide-up"
                  style={{ animationDelay: `${0.3 + i * 0.12}s` }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <p className={`text-[10px] font-semibold tracking-[0.22em] uppercase mb-2.5 ${exp.primary ? "text-primary/70" : "text-base-content/25"}`}>
                        {exp.period}
                      </p>
                      <h3 className={`text-base lg:text-lg font-black tracking-tight leading-snug mb-1 transition-colors duration-300 ${
                        exp.primary ? "text-base-content" : "text-base-content/55 group-hover:text-base-content/85"
                      }`}>
                        {exp.title}
                      </h3>
                      <p className="text-xs text-base-content/30 group-hover:text-base-content/50 transition-colors duration-300">
                        {exp.company}
                      </p>
                    </div>
                    <span className={`text-[11px] font-bold tabular-nums shrink-0 transition-colors duration-300 ${
                      exp.primary ? "text-primary/40 group-hover:text-primary/70" : "text-base-content/10 group-hover:text-base-content/25"
                    }`}>
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2.5 py-1 tracking-wider uppercase border border-base-content/[0.07] text-base-content/30 group-hover:border-primary/20 group-hover:text-primary/55 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Colonne droite : Prix & Distinctions — centré ── */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-5 animate-fade-slide-up" style={{ animationDelay: "0.15s" }}>
              <span className="w-6 h-px bg-primary/50" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary/70">Distinctions</span>
              <span className="w-6 h-px bg-primary/50" />
            </div>

            <h2
              className="font-black leading-[0.88] tracking-tight mb-14 animate-fade-slide-up"
              style={{ animationDelay: "0.25s" }}
            >
              <span className="block text-4xl lg:text-5xl 2xl:text-6xl text-base-content/75">Prix &</span>
              <span
                className="block text-4xl lg:text-5xl 2xl:text-6xl"
                style={{
                  backgroundImage: "linear-gradient(120deg, var(--color-base-content) 20%, var(--color-primary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                récompenses
              </span>
            </h2>

            <div className="flex flex-col items-center gap-10 w-full">
              {awards.map((award, i) => (
                <div
                  key={award.title}
                  className="animate-fade-slide-up group w-full"
                  style={{ animationDelay: `${0.35 + i * 0.12}s` }}
                >
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-base-content/30 mb-4">
                    {award.period}
                  </p>
                  <div
                    className="w-12 h-px mb-5"
                    style={{ background: "var(--color-primary)", boxShadow: "0 0 8px var(--color-primary)" }}
                  />
                  <h3 className="text-xl lg:text-2xl font-black tracking-tight text-base-content/85 mb-3 leading-snug group-hover:text-base-content transition-colors duration-300">
                    {award.title}
                  </h3>
                  <p
                    className="text-sm font-bold tracking-wide mb-5"
                    style={{
                      backgroundImage: "linear-gradient(90deg, var(--color-primary), var(--color-base-content))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {award.place}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {award.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2.5 py-1 tracking-wider uppercase border border-primary/20 text-primary/60 hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
