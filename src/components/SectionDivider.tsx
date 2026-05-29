export default function SectionDivider() {
  return (
    <div className="relative h-px w-full overflow-visible">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-primary/30 bg-base-100" />
    </div>
  );
}
