type Diploma = {
  period: string;
  title: string;
  school: string;
  current?: boolean;
};

const diplomas: Diploma[] = [
  {
    period: "2023 – 2025",
    title: "Master 2 — Génie Logiciel et Systèmes d'Information",
    school: "Ecole Nationale d'Informatique, Fianarantsoa",
  },
  {
    period: "2020 – 2023",
    title: "Licence — Informatique et Génie Logiciel",
    school: "Ecole Nationale d'Informatique, Fianarantsoa",
  },
  {
    period: "2018 – 2019",
    title: "Baccalauréat Scientifique — Série C",
    school: "SJC, Fianarantsoa",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative bg-base-100 overflow-hidden py-24 lg:py-36"
    >
      {/* ── Diagonales subtiles ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(0.4 0 0) 0, oklch(0.4 0 0) 1px, transparent 0, transparent 50%)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Filigrane "04" ── */}
      <div className="absolute bottom-0 left-0 overflow-hidden pointer-events-none select-none leading-none">
        <p className="text-[22vw] font-black tracking-tighter text-primary/[0.03]">
          04
        </p>
      </div>

      {/* ── Blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[20%] right-[-6%] w-[380px] h-[380px] bg-primary/5 rounded-full blur-[130px] animate-blob-float"
          style={{ animationDuration: "17s" }}
        />
        <div
          className="absolute bottom-[8%] left-[8%] w-[260px] h-[260px] bg-secondary/4 rounded-full blur-[100px] animate-blob-float"
          style={{ animationDelay: "-10s", animationDuration: "21s" }}
        />
      </div>

      {/* ── Ligne verticale décorative ── */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <span className="text-[9px] font-bold tracking-[0.3em] text-primary/30 [writing-mode:vertical-rl]">
          04
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="relative z-10 px-8 lg:px-20 2xl:px-32">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">

          {/* ─ Colonne gauche : titre ─ */}
          <div className="lg:sticky lg:top-32">
            {/* Label */}
            <div
              className="flex items-center gap-3 mb-5 animate-fade-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-6 h-px bg-primary/50" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary/70">
                Formation
              </span>
              <span className="w-6 h-px bg-primary/50" />
            </div>

            {/* Titre */}
            <h2
              className="font-black leading-[0.88] tracking-tight mb-10 animate-fade-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="block text-4xl lg:text-6xl 2xl:text-7xl text-base-content/75">
                Mon
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
                parcours
              </span>
            </h2>

            {/* Phrase décorative */}
            <p
              className="text-sm text-base-content/30 leading-relaxed max-w-xs animate-fade-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              Formé à l&apos;École Nationale d&apos;Informatique de Fianarantsoa — du baccalauréat au master.
            </p>
          </div>

          {/* ─ Colonne droite : timeline ─ */}
          <div className="relative flex flex-col">
            {/* Ligne verticale */}
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          {diplomas.map((diploma, i) => (
            <div
              key={diploma.title}
              className="relative pl-10 pb-14 last:pb-0 animate-fade-slide-up group"
              style={{ animationDelay: `${0.3 + i * 0.12}s` }}
            >
              {/* Dot sur la ligne */}
              <div className={`absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 transition-all duration-300 ${
                diploma.current
                  ? "border-primary bg-primary shadow-[0_0_10px_var(--color-primary)]"
                  : "border-base-content/25 bg-base-100 group-hover:border-primary/60"
              }`} />

              {/* Badge en cours */}
              {diploma.current && (
                <span className="inline-flex items-center gap-1.5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-primary/70">En cours</span>
                </span>
              )}

              {/* Période */}
              <p className={`text-[11px] font-semibold tracking-[0.2em] uppercase mb-2 ${diploma.current ? "text-primary/70" : "text-base-content/30"}`}>
                {diploma.period}
              </p>

              {/* Titre */}
              <h3 className={`text-lg lg:text-xl font-black tracking-tight leading-snug mb-3 transition-colors duration-300 ${
                diploma.current ? "text-base-content" : "text-base-content/55 group-hover:text-base-content/80"
              }`}>
                {diploma.title}
              </h3>

              {/* École */}
              <span className="flex items-center gap-1.5 text-xs text-base-content/30 group-hover:text-base-content/50 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {diploma.school}
              </span>
            </div>
          ))}
          </div>{/* fin timeline */}
        </div>{/* fin grid 2 colonnes */}
      </div>
    </section>
  );
}
