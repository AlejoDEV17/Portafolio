"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Database,
  FileText,
  Folder,
  GitBranch,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

const projectIcons = [Workflow, GitBranch, Database, Cpu, Workflow, CheckCircle2];
const workflowIcons = [Database, Workflow, FileText, Folder];

export function Projects() {
  const [active, setActive] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const project = projects[active];
  const Icon = projectIcons[active];

  const move = (direction: number) => {
    setGalleryIndex(0);
    setActive((current) => (current + direction + projects.length) % projects.length);
  };

  const selectProject = (index: number) => {
    setGalleryIndex(0);
    setActive(index);
  };

  const moveGallery = (direction: number) => {
    const media = project.media;
    if (media?.type !== "gallery") return;
    const imageCount = media.images.length;

    setGalleryIndex(
      (current) =>
        (current + direction + imageCount) % imageCount,
    );
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

              {project.media?.type === "workflow" ? (
                <div className="project-proof project-workflow">
                  <div className="project-proof__header">
                    <span>ARQUITECTURA DEL FLUJO / {project.index}</span>
                    <span>VISTA SEGURA</span>
                  </div>
                  <div className="project-workflow__body">
                    <div className="project-workflow__intro">
                      <span>RPA / PROCESO DOCUMENTADO</span>
                      <strong>De la glosa al soporte clasificado</strong>
                    </div>
                    <div
                      className="project-workflow__diagram"
                      aria-label="Flujo automatizado de respuesta de glosas"
                    >
                      {project.media.steps.map((step, index, steps) => {
                        const StepIcon = workflowIcons[index] ?? Workflow;

                        return (
                          <div className="project-workflow__step" key={step.title}>
                            <div className="project-workflow__icon">
                              <StepIcon aria-hidden="true" />
                            </div>
                            <small>0{index + 1} / {step.label}</small>
                            <strong>{step.title}</strong>
                            <p>{step.description}</p>
                            {index < steps.length - 1 && (
                              <span className="project-workflow__connector" aria-hidden="true">
                                <i />
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="project-workflow__impact">
                      <span>Impacto operativo</span>
                      <strong>Horas de trabajo manual → minutos de ejecución</strong>
                      <p>{project.media.impact}</p>
                    </div>
                  </div>
                  <div className="project-workflow__notice">
                    <ShieldCheck aria-hidden="true" />
                    <div>
                      <strong>Demostración reservada por confidencialidad</strong>
                      <p>{project.media.notice}</p>
                    </div>
                  </div>
                  <div className="project-proof__facts">
                    {project.media.facts.map((fact, index) => (
                      <div key={fact.label}>
                        <small>0{index + 1}</small>
                        <span>{fact.label}</span>
                        <strong>{fact.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              ) : project.media?.type === "gallery" ? (
                <div className="project-proof project-gallery">
                  <div className="project-proof__header">
                    <span>PLATFORM VIEW / {project.index}</span>
                    <span>CAPTURAS REALES</span>
                  </div>
                  <div className="project-gallery__viewport">
                    <div className="project-media-frame">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={project.media.images[galleryIndex].src}
                          src={project.media.images[galleryIndex].src}
                          alt={project.media.images[galleryIndex].alt}
                          initial={{ opacity: 0, scale: 1.015 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </AnimatePresence>
                    </div>
                    <div className="project-proof__overlay">
                      <span>
                        <i />
                        CAMPUS / VISTA REAL
                      </span>
                      <span>
                        0{galleryIndex + 1} / 0{project.media.images.length}
                      </span>
                    </div>
                    <div className="project-gallery__arrows">
                      <button
                        type="button"
                        onClick={() => moveGallery(-1)}
                        aria-label="Captura anterior"
                      >
                        <ArrowLeft />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveGallery(1)}
                        aria-label="Captura siguiente"
                      >
                        <ArrowRight />
                      </button>
                    </div>
                  </div>
                  <div className="project-gallery__rail">
                    {project.media.images.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        className={galleryIndex === index ? "is-active" : ""}
                        onClick={() => setGalleryIndex(index)}
                        aria-label={`Ver captura: ${image.label}`}
                      >
                        <Image
                          src={image.src}
                          alt=""
                          width={240}
                          height={135}
                          aria-hidden="true"
                        />
                        <span>
                          <small>0{index + 1}</small>
                          {image.label}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="project-proof__facts">
                    {project.media.facts.map((fact, index) => (
                      <div key={fact.label}>
                        <small>0{index + 1}</small>
                        <span>{fact.label}</span>
                        <strong>{fact.value}</strong>
                      </div>
                    ))}
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
                  onClick={() => selectProject(index)}
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
