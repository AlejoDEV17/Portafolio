"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { assetPath } from "@/data/site";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => <div className="hero-scene hero-scene--fallback" />,
});

export function Hero() {
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(
      () => setFocusIndex((index) => (index + 1) % profile.focus.length),
      2300,
    );
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="inicio">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__noise" aria-hidden="true" />
      <HeroScene />
      <div className="hero__rail">
        <span>PORTFOLIO / 2026</span>
        <span>SCROLL TO EXPLORE</span>
      </div>
      <div className="hero__content">
        <motion.div
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.42, duration: 0.65 }}
        >
          <span className="live-dot" />
          Sistemas · Software · Automatización · IA
        </motion.div>

        <div className="hero__title" aria-label="Alejandro Lozano Restrepo">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              delay: 1.25,
              duration: 0.95,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            ALEJANDRO
          </motion.span>
          <motion.span
            className="hero__title-outline"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              delay: 1.34,
              duration: 0.95,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            LOZANO
          </motion.span>
        </div>

        <motion.div
          className="hero__lower"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.72, duration: 0.7 }}
        >
          <div className="hero__intro">
            <p>{profile.statement}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#proyectos">
                Ver proyectos
                <ArrowDown size={17} />
              </a>
              <a
                className="button button--ghost"
                href={assetPath("/hoja-de-vida-alejandro-lozano.pdf")}
                download
              >
                Descargar CV
                <Download size={16} />
              </a>
            </div>
          </div>
          <div className="hero__role" aria-live="polite">
            <span>Actualmente</span>
            <AnimatePresence mode="wait">
              <motion.strong
                key={profile.focus[focusIndex]}
                initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                transition={{ duration: 0.35 }}
              >
                {profile.focus[focusIndex]}
              </motion.strong>
            </AnimatePresence>
            <a href="#contacto">
              Disponible para conectar <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>
      </div>
      <a className="hero__scroll" href="#perfil" aria-label="Explorar el perfil">
        <span>01</span>
        <i />
      </a>
    </section>
  );
}
