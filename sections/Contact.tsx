"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  LoaderCircle,
  Mail,
  MapPin,
} from "lucide-react";
import { profile } from "@/data/portfolio";

type FormState = "idle" | "loading" | "sent" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("loading");

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    if (!name || !email || !subject || !message) {
      setState("error");
      return;
    }

    const body = encodeURIComponent(
      `Hola Alejandro,\n\n${message}\n\n— ${name}\n${email}`,
    );
    const mailSubject = encodeURIComponent(subject);

    window.setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${mailSubject}&body=${body}`;
      setState("sent");
    }, 450);
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact__glow" aria-hidden="true" />
      <div className="container">
        <div className="contact__heading" data-reveal>
          <span>06 / INICIAR CONEXIÓN</span>
          <h2>
            ¿Tienes un proceso que pueda{" "}
            <em>automatizarse</em> o una solución que necesite desarrollarse?
          </h2>
        </div>

        <div className="contact__layout">
          <div className="contact__details" data-reveal>
            <a href={`mailto:${profile.email}`}>
              <Mail />
              <span>
                Correo
                <strong>{profile.email}</strong>
              </span>
              <ArrowUpRight />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github />
              <span>
                GitHub
                <strong>@AlejoDEV17</strong>
              </span>
              <ArrowUpRight />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin />
              <span>
                LinkedIn
                <strong>Alejandro Lozano Restrepo</strong>
              </span>
              <ArrowUpRight />
            </a>
            <div>
              <MapPin />
              <span>
                Ubicación
                <strong>{profile.location}</strong>
              </span>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} data-reveal>
            <div className="field">
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Correo</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="tu@correo.com"
                required
              />
            </div>
            <div className="field field--full">
              <label htmlFor="subject">Asunto</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="¿Qué vamos a construir?"
                required
              />
            </div>
            <div className="field field--full">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Cuéntame sobre el proceso o la idea..."
                required
              />
            </div>
            <motion.button
              type="submit"
              className="contact__submit"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              disabled={state === "loading"}
            >
              {state === "loading" ? (
                <>
                  Preparando mensaje
                  <LoaderCircle className="spin" />
                </>
              ) : (
                <>
                  Abrir correo
                  <ArrowUpRight />
                </>
              )}
            </motion.button>
            <div className="contact__state" aria-live="polite">
              {state === "sent" &&
                "Mensaje preparado. Revisa tu aplicación de correo para enviarlo."}
              {state === "error" &&
                "Completa todos los campos para preparar el mensaje."}
            </div>
          </form>
        </div>

        <footer className="footer">
          <span>© 2026 ALEJANDRO LOZANO RESTREPO</span>
          <span>DISEÑADO COMO UN SISTEMA, NO COMO UNA PLANTILLA.</span>
          <a href="#inicio">VOLVER ARRIBA ↑</a>
        </footer>
      </div>
    </section>
  );
}
