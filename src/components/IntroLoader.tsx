import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RhombusField } from "./RhombusField";

interface IntroLoaderProps {
  durationMs: number;
}

export function IntroLoader({ durationMs }: IntroLoaderProps) {
  const [converged, setConverged] = useState(false);
  const [subtle, setSubtle] = useState(false);

  useEffect(() => {
    const convergeTimer = window.setTimeout(() => setConverged(true), 1500);
    const subtleTimer = window.setTimeout(() => setSubtle(true), 1780);

    return () => {
      window.clearTimeout(convergeTimer);
      window.clearTimeout(subtleTimer);
    };
  }, []);

  return (
    <motion.div
      animate={{
        opacity: subtle ? 0.22 : 1,
        filter: subtle ? "blur(12px)" : "blur(0px)",
      }}
      className="pointer-events-none fixed inset-0 z-[70] overflow-hidden bg-[rgba(6,7,11,0.98)]"
      exit={{ opacity: 0 }}
      transition={{
        duration: subtle ? 0.34 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(106,141,255,0.16),transparent_36%)]" />
      <RhombusField converged={converged} mode="loader" subtle={subtle} />
      <motion.div
        animate={{
          opacity: subtle ? 0 : 1,
          y: subtle ? -12 : 0,
        }}
        className="absolute inset-x-0 bottom-10 mx-auto flex w-fit items-center gap-4 rounded-full border border-white/8 bg-white/4 px-5 py-3 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-text-soft)]"
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="h-2.5 w-2.5 rounded-[0.15rem] bg-[var(--color-primary)]" />
        Initializing portfolio systems
      </motion.div>
      <div className="absolute inset-0 rhombus-grid-overlay" />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-40 bg-[linear-gradient(180deg,transparent_0%,rgba(9,9,15,0.92)_100%)]"
      />
      <span className="sr-only">Portfolio intro animation in progress</span>
    </motion.div>
  );
}
