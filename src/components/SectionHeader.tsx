interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <span className="section-kicker">{eyebrow}</span>
      <div className="space-y-4">
        <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
          {description}
        </p>
      </div>
    </div>
  );
}
