import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { skillGroups } from "../data/skills";

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-anchor section-shell" id="skills">
      <div className="site-shell space-y-12">
        <SectionHeader
          eyebrow="Skills / Tech Stack"
          title="Tools and technologies I’ve worked with."
          description="A mix of frontend, backend, systems, and deployment tools I’ve used across different projects."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              className="surface-panel rounded-[1.8rem] p-7 md:p-8"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              key={group.title}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.25 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            >
              <div className="space-y-5">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                  <p className="text-base leading-7 text-[var(--color-text-muted)]">
                    {group.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      className="rounded-full border border-white/8 bg-white/4 px-3.5 py-2.5 text-sm font-semibold text-[var(--color-text-muted)]"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}