import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "../components/ButtonLink";
import { RhombusField } from "../components/RhombusField";
import { StatusPill } from "../components/StatusPill";
import { siteConfig } from "../data/siteConfig";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="section-anchor relative isolate min-h-screen overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(106,141,255,0.16),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,15,0.2),rgba(9,9,15,0.9))]" />
        <RhombusField mode="background" />
        <div className="absolute inset-0 rhombus-grid-overlay opacity-70" />
      </div>

      <div className="site-shell relative flex min-h-screen items-center py-24">
        <motion.div
          className="grid w-full gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          transition={{ duration: 0.75, delay: shouldReduceMotion ? 0 : 1.68, ease: [0.22, 1, 0.36, 1] }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        >
          <div className="relative z-10 max-w-3xl space-y-8">
            <StatusPill>Open to opportunities</StatusPill>

            <div className="space-y-6">
              <p className="font-heading text-sm font-bold uppercase tracking-[0.35em] text-[var(--color-text-soft)]">
                Jacob Gardner
              </p>
              <div className="relative">
                <div className="headline-emphasis absolute -left-3 top-6 h-[70%] w-[82%] rounded-[2rem] blur-2xl" />
                <h1 className="relative max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  I build full-stack apps, systems, and interactive software.
                </h1>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-text-muted)] sm:text-xl">
                I like working on projects that combine strong engineering, clean user experience,
                and real technical depth—from product builds to simulations, embedded work, and
                systems-heavy tools.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#projects">View Projects</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Contact Me
              </ButtonLink>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-sm font-semibold text-[var(--color-text-muted)]">
              <a
                className="social-link rounded-full border border-white/10 px-4 py-2.5"
                href={siteConfig.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="social-link rounded-full border border-white/10 px-4 py-2.5"
                href={siteConfig.linkedinUrl}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="social-link rounded-full border border-white/10 px-4 py-2.5"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="surface-panel relative ml-auto max-w-md rounded-[2.25rem] p-7">
              <div className="absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_top_left,rgba(106,141,255,0.12),transparent_44%)]" />
              <div className="relative space-y-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-text-soft)]">
                    Focus
                  </span>
                  <span className="rounded-full border border-[rgba(110,231,200,0.16)] bg-[rgba(110,231,200,0.06)] px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                    Current
                  </span>
                </div>

                <div className="grid gap-4">
                  {[
                    "Full-stack apps",
                    "Backend systems and tooling",
                    "Interactive visuals",
                    "Embedded and technical projects",
                  ].map((item) => (
                    <div
                      className="flex items-center gap-4 rounded-[1.4rem] border border-white/8 bg-white/3 px-4 py-4"
                      key={item}
                    >
                      <span className="h-3.5 w-3.5 rounded-[0.18rem] bg-[var(--color-primary)]" />
                      <span className="text-base font-semibold text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}