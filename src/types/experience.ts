export type Experience = {
  type: "education" | "experience" | "internship";
  title: string;
  role: string;
  period: string;
  description: string | string[];
};