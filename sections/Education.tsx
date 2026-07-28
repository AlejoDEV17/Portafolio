import { Check, MoveUpRight } from "lucide-react";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section className="education" aria-labelledby="education-title">
      <div className="container">
        <div className="education__head" data-reveal>
          <div>
            <span>05 / FORMACIÓN</span>
            <h2 id="education-title">Aprender también es parte del sistema.</h2>
          </div>
          <MoveUpRight aria-hidden="true" />
        </div>
        <div className="education__track">
          {education.map((item, index) => (
            <article key={item.degree} data-reveal>
              <div className="education__marker">
                {index === 0 ? <span /> : <Check size={16} />}
              </div>
              <div>
                <span>{item.status}</span>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
              </div>
            </article>
          ))}
          <div className="education__line" data-line />
        </div>
      </div>
    </section>
  );
}
