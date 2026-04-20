import { motion, useReducedMotion } from "framer-motion";
import { rhombusColors, rhombusField } from "../utils/rhombusField";

interface RhombusFieldProps {
  mode: "loader" | "background";
  converged?: boolean;
  subtle?: boolean;
}

export function RhombusField({
  mode,
  converged = false,
  subtle = false,
}: RhombusFieldProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden ${mode === "background" ? "opacity-100" : ""}`}
    >
      {rhombusField.map((tile) => {
        const initialColor = rhombusColors[tile.colorToken];
        const finalColor = rhombusColors.primary;
        const loaderInitial = {
          opacity: 0,
          x: -180 + tile.left * 1.6,
          y: 180 - tile.top * 1.3,
          rotate: 18,
          scale: 0.72,
          backgroundColor: initialColor,
        };
        const loaderAnimate = {
          opacity: subtle ? 0.5 : 0.98,
          x: 0,
          y: 0,
          rotate: 45,
          scale: 1,
          backgroundColor: converged ? finalColor : initialColor,
        };

        if (mode === "background") {
          return (
            <motion.div
              initial={{
                rotate: 45,
                opacity: 0.14,
                scale: 1,
                x: 0,
                y: 0,
              }}
              animate={
                shouldReduceMotion || !tile.drift
                  ? {
                      rotate: 45,
                      x: 0,
                      y: 0,
                      opacity: 0.14,
                      scale: 1,
                    }
                  : {
                      rotate: 45,
                      x: [0, 10, -8, 0],
                      y: [0, -12, 7, 0],
                      opacity: [0.12, 0.17, 0.14, 0.12],
                      scale: [1, 1.03, 0.98, 1],
                    }
              }
              className="absolute rounded-[0.45rem] border border-white/6 bg-[rgba(110,231,200,0.12)] shadow-[0_0_50px_rgba(110,231,200,0.06)]"
              key={tile.id}
              style={{
                left: `${tile.left}%`,
                top: `${tile.top}%`,
                width: tile.size,
                height: tile.size,
                filter: "blur(1.2px)",
              }}
              transition={
                shouldReduceMotion || !tile.drift
                  ? { duration: 0 }
                  : {
                      duration: tile.driftDuration,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "mirror",
                    }
              }
            />
          );
        }

        return (
          <motion.div
            animate={shouldReduceMotion ? { opacity: 0.22, rotate: 45, scale: 1 } : loaderAnimate}
            className="absolute rounded-[0.45rem] shadow-[0_0_36px_rgba(110,231,200,0.08)]"
            initial={shouldReduceMotion ? false : loaderInitial}
            key={tile.id}
            style={{
              left: `${tile.left}%`,
              top: `${tile.top}%`,
              width: tile.size,
              height: tile.size,
              border: subtle ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(255,255,255,0.1)",
            }}
            transition={{
              delay: shouldReduceMotion ? 0 : tile.delay,
              duration: converged ? 0.22 : 0.7,
              ease: [0.22, 1, 0.36, 1],
              backgroundColor: {
                duration: 0.22,
                ease: "easeOut",
              },
            }}
          />
        );
      })}
    </div>
  );
}
