"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section className="section experience" id="experiencia">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Experiencia"
          title="Del control de calidad a la automatización inteligente."
          description="Una evolución profesional construida desde la precisión: primero validar, luego optimizar y finalmente crear sistemas completos."
        />

        <div className="experience__timeline" data-reveal>
          <div className="experience__years">
            <span>2023</span>
            <i data-line />
            <span>2026</span>
          </div>
          <div className="experience__entries">
            {experience.map((item, index) => (
              <article
                className={active === index ? "is-active" : ""}
                key={item.company}
              >
                <button
                  type="button"
                  aria-expanded={active === index}
                  onClick={() => setActive(index)}
                >
                  <span className="experience__index">0{index + 1}</span>
                  <span className="experience__main">
                    <small>{item.period}</small>
                    <strong>{item.role}</strong>
                    <em>{item.company}</em>
                  </span>
                  <ChevronDown aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {active === index && (
                    <motion.div
                      className="experience__details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div>
                        <ul>
                          {item.responsibilities.map((responsibility) => (
                            <li key={responsibility}>{responsibility}</li>
                          ))}
                        </ul>
                        <div className="tag-list">
                          {item.stack.map((technology) => (
                            <span key={technology}>{technology}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
