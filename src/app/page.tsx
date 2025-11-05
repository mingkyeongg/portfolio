import { Landing } from "@/features/Landing";
import { Profile } from "@/features/Profile";
import { Skills } from "@/features/Skills";
export default function Home() {
  return (
    <>
      <section id="landing">
      <Landing />
      </section>
      <section id="about">
      <Profile />
      </section>
      <section id="skills">
      <Skills />
      </section>
    </>
  );
}
