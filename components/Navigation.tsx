"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems } from "@/data/portfolio";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];
    let frame = 0;

    const updateNavigation = () => {
      const scrollPosition =
        window.scrollY + Math.min(window.innerHeight * 0.35, 320);
      let currentSection = sections[0]?.id ?? "inicio";

      for (const section of sections) {
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= scrollPosition) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      const isAtPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4;
      if (isAtPageEnd && sections.at(-1)?.id) {
        currentSection = sections.at(-1)!.id;
      }

      setScrolled(window.scrollY > 32);
      setActive((value) =>
        value === currentSection ? value : currentSection,
      );
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateNavigation);
    };

    updateNavigation();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav" aria-label="Navegación principal">
        <a className="nav__brand" href="#inicio" aria-label="Ir al inicio">
          <span className="nav__monogram">AL</span>
          <span className="nav__status">
            <i />
            Cali / COL
          </span>
        </a>
        <div className="nav__links">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            return (
              <a
                key={item.href}
                className={active === id ? "is-active" : ""}
                href={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </div>
        <a className="nav__cta" href="#contacto">
          Hablemos
          <ArrowUpRight size={15} />
        </a>
        <button
          className="nav__menu"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                <span>0{index + 1}</span>
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
