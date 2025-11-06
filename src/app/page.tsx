import { AboutMe } from "@/features/AboutMe";
import { Landing } from "@/features/Landing";
import { Profile } from "@/features/Profile";
import { Project } from "@/features/Project";
import { Skills } from "@/features/Skills";

export default function Home() {
  return (
    <>
      <section id="landing">
      <Landing />
      </section>
      <section id="about">
      <Profile />
      <AboutMe />
      </section>
      <section id="skills">
      <Skills />
      </section>
      <section id="projects">
        <Project />
      </section>
    </>
  );
}
