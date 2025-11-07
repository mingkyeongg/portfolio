export type Experience = {
  type: "education" | "experience" | "internship";
  title: string;
  titleColor: string;
  role: string;
  period: string;
  description: string | string[];
};