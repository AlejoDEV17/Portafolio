import { Contact } from "@/sections/Contact";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Profile } from "@/sections/Profile";
import { Projects } from "@/sections/Projects";
import { Technology } from "@/sections/Technology";

export default function Home() {
  return (
    <main id="contenido">
      <Hero />
      <Profile />
      <Technology />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
