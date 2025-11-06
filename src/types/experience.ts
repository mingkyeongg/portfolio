export type Experience = {
  type: "education" | "experience" | "internship";
  title: string;
  period: string;
  description: string | string[];
};