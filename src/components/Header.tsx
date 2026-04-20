import { siteConfig } from "../data/siteConfig";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[rgba(7,8,13,0.62)] backdrop-blur-xl">
      <div className="site-shell flex items-center justify-between gap-6 py-4">
        <a className="group flex items-center gap-3" href="#home" aria-label="Go to hero section">
          <span className="h-3 w-3 rounded-[0.18rem] bg-[var(--color-primary)] transition-transform duration-200 group-hover:rotate-45" />
          <span className="font-heading text-sm font-bold uppercase tracking-[0.28em] text-[var(--color-text-muted)]">
            {siteConfig.name}
          </span>
        </a>

        <div className="flex items-center gap-3 md:gap-5">
          <nav aria-label="Primary navigation" className="hidden items-center gap-5 md:flex">
            {siteConfig.navLinks.map((item) => (
              <a
                key={item.href}
                className="nav-link text-sm font-semibold text-[var(--color-text-muted)]"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="button-link button-link-secondary px-4 py-3 text-sm"
            href={siteConfig.heroSecondaryCta.href}
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  );
}
