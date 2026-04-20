import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-anchor section-shell" id="about">
      <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeader
          eyebrow="About Me"
          title="I like building software that feels good to use and holds up technically."
          description=""
        />

        <motion.div
          className="surface-panel rounded-[2rem] p-8 md:p-10"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        >
          <div className="space-y-6 text-lg leading-8 text-[var(--color-text-muted)]">
            <p>
              I enjoy working on projects that blend strong engineering with clean user experience.
              Most of my work has been in full-stack development, but I also like building systems-heavy
              tools, experimenting with interactive visuals, working on embedded systems, and figuring out how to make complex ideas
              feel simple on the surface.
            </p>
            <p>
              A lot of the projects I gravitate toward involve real structure under the hood—things like
              dashboards, automation workflows, simulations, and platforms with multiple moving parts.
              I like thinking through both sides of the build: how it works internally and how it feels
              for the person using it.
            </p>
            <p>
              I care about writing maintainable code, designing clear interfaces, and building projects
              that feel polished rather than rushed. For me, the goal is not just to make something work,
              but to make it work well and be worth using.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}