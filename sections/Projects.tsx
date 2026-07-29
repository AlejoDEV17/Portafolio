"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Database,
  GitBranch,
  Workflow,
} from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

const projectIcons = [Workflow, GitBranch, Database, Cpu, Workflow, CheckCircle2];

export function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];
  const Icon = projectIcons[active];

  const move = (direction: number) => {
    setActive((current) => (current + direction + projects.length) % projects.length);
  };

  return (
    <section className="section projects" id="proyectos">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Proyectos"
          title="Sistemas que mueven información y trabajo."
          description="Casos presentados sin datos confidenciales ni métricas inventadas. El foco está en el problema, la arquitectura y el efecto operativo."
        />

        <div className={`project-stage project-stage--${project.accent}`} data-reveal>
          <div className="project-stage__top">
            <span>{project.label}</span>
            <span>{project.index} / 0{projects.length}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              className="project-stage__content"
              key={project.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="project-stage__copy">
                <h3>{project.title}</h3>
                <div className="project-stage__brief">
                  <div>
                    <span>El reto</span>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <span>La solución</span>
                    <p>{project.solution}</p>
                  </div>
                  <div>
                    <span>El efecto</span>
                    <p>{project.result}</p>
                  </div>
                </div>
                <div className="project-stage__meta">
                  <div>
                    <small>Rol</small>
                    <strong>{project.role}</strong>
                  </div>
                  <div className="tag-list">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </div>

              {project.media ? (
                <div className="project-proof">
                  <div className="project-proof__header">
                    <span>CASE STUDY / {project.index}</span>
                    <span>DATOS PROTEGIDOS</span>
                  </div>
                  <div className="project-proof__media">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      poster={project.media.poster}
                      aria-label={`Demostración de ${project.title}`}
                    >
                      <source src={project.media.video} type="video/mp4" />
                    </video>
                    <div className="project-proof__overlay">
                      <span>
                        <i />
                        RPA / CAPTURA REAL
                      </span>
                      <span>{project.media.duration}</span>
                    </div>
                  </div>
                  <div className="project-proof__status">
                    <div>
                      <span>FLUJO AUTOMATIZADO</span>
                      <p>
                        La demostración fue editada y anonimizada para proteger
                        información médica y de facturación.
                      </p>
                    </div>
                    <ol>
                      {["Esculapio", "Respuesta", "PDF", "Drive"].map(
                        (stage, index) => (
                          <li key={stage}>
                            <span>0{index + 1}</span>
                            <strong>{stage}</strong>
                          </li>
                        ),
                      )}
                    </ol>
                  </div>
                </div>
              ) : (
                <div className="project-machine" aria-hidden="true">
                  <div className="project-machine__header">
                    <span>PROCESS / {project.index}</span>
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="project-machine__core">
                    <div className="project-machine__orbit">
                      <span />
                      <span />
                      <span />
                    </div>
                    <Icon size={62} strokeWidth={1.2} />
                    <b>RUNNING</b>
                  </div>
                  <div className="project-machine__flow">
                    <span>INPUT</span>
                    <i />
                    <span>LOGIC</span>
                    <i />
                    <span>OUTPUT</span>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="project-stage__controls">
            <div className="project-stage__dots">
              {projects.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={active === index ? "is-active" : ""}
                  onClick={() => setActive(index)}
                  aria-label={`Ver ${item.title}`}
                />
              ))}
            </div>
            <div>
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Proyecto anterior"
              >
                <ArrowLeft />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Proyecto siguiente"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        <a
          className="projects__github"
          href="https://github.com/AlejoDEV17"
          target="_blank"
          rel="noreferrer"
        >
          Explorar perfil de GitHub
          <ArrowUpRight />
        </a>
      </div>
    </section>
  );
}
