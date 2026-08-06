import Image from "next/image";
import { ArrowDownRight, MapPin } from "lucide-react";
import { impact, profile } from "@/data/portfolio";
import { assetPath } from "@/data/site";
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
                src={assetPath("/alejandro.jpeg")}
                alt="Retrato profesional de Alejandro Lozano Restrepo"
                fill
                sizes="(max-width: 768px) 86vw, 36vw"
                priority
              />
            </div>
            <div className="profile__location">
              <MapPin size={15} />
              {profile.location}
            </div>
          </div>

          <div className="profile__story" data-reveal>
            <p className="profile__lead">{profile.about}</p>
            <div className="profile__path" aria-label="Evolución profesional">
              {["QA", "Integración", "Automatización", "Desarrollo"].map(
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
