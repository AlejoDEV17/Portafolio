"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Braces,
  Database,
  UsersRound,
  BadgeCheck,
  Workflow,
} from "lucide-react";
import { capabilities } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

const icons = [Braces, Workflow, Database, BadgeCheck, UsersRound];

export function Technology() {
  const [active, setActive] = useState(0);

  return (
    <section className="section technology" id="tecnologias">
      <div className="technology__orb" data-orbit aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Stack"
          title="Del código a la automatización: tecnologías que convierten procesos en sistemas."
          description="Mi stack reúne desarrollo, integración, datos y QA para construir soluciones empresariales escalables, automatizadas y listas para operar."
        />

        <div className="technology__system" data-reveal>
          <div className="technology__nav" role="tablist" aria-label="Categorías">
            {capabilities.map((capability, index) => {
              const Icon = icons[index];
              return (
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  key={capability.title}
                  className={active === index ? "is-active" : ""}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                >
                  <span>{capability.id}</span>
                  <Icon size={20} />
                  <strong>{capability.title}</strong>
                </button>
              );
            })}
          </div>

          <div className="technology__stage">
            <div className="technology__radar" aria-hidden="true">
              <i />
              <i />
              <i />
              <b />
            </div>
            <motion.div
              className="technology__content"
              key={capabilities[active].title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="technology__count">
                {capabilities[active].id} / 0{capabilities.length}
              </span>
              <h3>{capabilities[active].title}</h3>
              <p>{capabilities[active].description}</p>
              <div className="technology__nodes">
                {capabilities[active].items.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.035 }}
                  >
                    <i />
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
