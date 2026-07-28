import Image from "next/image";
import { ArrowDownRight, MapPin } from "lucide-react";
import { impact, profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function Profile() {
  return (
    <section className="section profile" id="perfil">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="Perfil"
          title="Ingeniería aplicada a procesos que sí importan."
          description="Conecto análisis, código y contexto de negocio para convertir operaciones manuales en sistemas claros y sostenibles."
        />

        <div className="profile__layout">
          <div className="profile__portrait" data-reveal>
            <div className="profile__image-frame">
              <Image
                src="/alejandro.webp"
                alt="Retrato profesional de Alejandro Lozano Restrepo"
                fill
                sizes="(max-width: 768px) 86vw, 36vw"
                priority
              />
              <span className="profile__image-code">AL—017</span>
            </div>
            <div className="profile__location">
              <MapPin size={15} />
              {profile.location}
              <span>UTC −05:00</span>
            </div>
          </div>

          <div className="profile__story" data-reveal>
            <p className="profile__lead">{profile.about}</p>
            <div className="profile__path" aria-label="Evolución profesional">
              {["QA", "Automatización", "Desarrollo", "IA"].map(
                (item, index) => (
                  <div key={item}>
                    <span>0{index + 1}</span>
                    <strong>{item}</strong>
                    {index < 3 && <ArrowDownRight aria-hidden="true" />}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="impact-grid">
          {impact.map((item, index) => (
            <article key={item.title} data-reveal>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
