import { siteConfig } from "../data/siteConfig";

export function ContactSection() {
  return (
    <section className="section-anchor section-shell pb-10" id="contact">
      <div className="site-shell">
        <div className="surface-panel rounded-[2.2rem] p-8 md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="space-y-5">
              <span className="section-kicker">Contact</span>
              <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                Building something ambitious, useful, or interactive?
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
                I&apos;m interested in opportunities where thoughtful engineering, polished product
                work, and technical depth all matter. Let&apos;s connect and build something strong.
              </p>
            </div>

            <div className="grid gap-3 text-base font-semibold">
              <a
                className="social-link flex items-center justify-between rounded-[1.35rem] border border-white/10 bg-white/3 px-5 py-4 text-white"
                href={`mailto:${siteConfig.email}`}
              >
                <span>Email</span>
                <span className="text-[var(--color-text-muted)]">{siteConfig.email}</span>
              </a>
              <a
                className="social-link flex items-center justify-between rounded-[1.35rem] border border-white/10 bg-white/3 px-5 py-4 text-white"
                href={siteConfig.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span>GitHub</span>
                <span className="text-[var(--color-text-muted)]">Profile</span>
              </a>
              <a
                className="social-link flex items-center justify-between rounded-[1.35rem] border border-white/10 bg-white/3 px-5 py-4 text-white"
                href={siteConfig.linkedinUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span>LinkedIn</span>
                <span className="text-[var(--color-text-muted)]">Connect</span>
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-[var(--color-text-soft)] md:flex-row md:items-center md:justify-between">
            <p>Jacob Gardner Portfolio</p>
            <p>Built with React, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
