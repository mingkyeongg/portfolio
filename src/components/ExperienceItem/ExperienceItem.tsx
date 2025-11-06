import { Experience } from "@/types/experience";

interface ExperienceItemProps {
  experience: Experience;
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <div>
      <h1>{experience.title}</h1>
      <p>{experience.period}</p>
      <p>{experience.description}</p>
    </div>
  );
};