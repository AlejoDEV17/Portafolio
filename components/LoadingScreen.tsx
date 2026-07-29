"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timeout = window.setTimeout(() => setVisible(false), reduced ? 100 : 1500);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
          aria-hidden="true"
        >
          <div className="loader__identity">
            <div className="loader__word" aria-label="Alejandro">
              {"ALEJANDRO".split("").map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.12 + index * 0.045,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.span
              className="loader__role"
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.28em" }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              DEVELOPER
            </motion.span>
          </div>
          <motion.div
            className="loader__bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.05, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
