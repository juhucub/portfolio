import { useEffect, useState } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import { Header } from "./components/Header";
import { IntroLoader } from "./components/IntroLoader";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

const INTRO_DURATION_MS = 2150;

export default function App() {
  const shouldReduceMotion = useReducedMotion();
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setIntroComplete(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setIntroComplete(true);
    }, INTRO_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <AnimatePresence>
        {!introComplete && !shouldReduceMotion ? (
          <IntroLoader key="intro-loader" durationMs={INTRO_DURATION_MS} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
