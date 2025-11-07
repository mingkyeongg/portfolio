"use client";
import { AboutMe } from "@/features/AboutMe";
import { Landing } from "@/features/Landing";
import { Profile } from "@/features/Profile";
import { Project } from "@/features/Project";
import { Skills } from "@/features/Skills";
import { useEffect, useRef } from "react";

export default function Home() {
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({
    landing: null,
    about: null,
    skills: null,
    projects: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const id = visible.target.id;
          if (id === "landing") {
            history.replaceState(null, "", "/");
          } else {
            history.replaceState(null, "", `#${id}`);
          }
        }
      },
      {threshold: 0.1}
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="landing"
        ref={(el) => void (sectionsRef.current.landing = el)}
      >
        <Landing />
      </section>

      <section id="about" ref={(el) => void (sectionsRef.current.about = el)}>
        <Profile />
        <AboutMe />
      </section>

      <section id="skills" ref={(el) => void (sectionsRef.current.skills = el)}>
        <Skills />
      </section>

      <section
        id="projects"
        ref={(el) => void (sectionsRef.current.projects = el)}
      >
        <Project />
      </section>
    </>
  );
}
