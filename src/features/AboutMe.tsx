import { ExperienceItem } from "@/components/ExperienceItem/ExperienceItem";
import { experienceData } from "@/utils/ExprienceData";

export const AboutMe = () => {
  return (
    <div>
      {experienceData.map((experience) => (
        <ExperienceItem key={experience.title} experience={experience} />
      ))}
    </div>
  );
};