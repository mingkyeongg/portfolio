export type ProjectFrontType = {
  imageSrc: string;
  title: string;
  period: string;
  introduction: string;
  people: string;
  role: string;
  techStack: string;
  projectType: "Web" | "Mobile" | "etc" | ("Web" | "Mobile" | "etc")[];
  projectLinkBadges: {
    text: "Youtube" | "Github" | "Website" | "More" | "AppStore";
    href: string;
  }[];
};

export type ProjectBackType = {
  content: string[];
  implementation: string[];
  images: string[];
};

export type ProjectType = {
  id: string;
  front: ProjectFrontType;
  back: ProjectBackType;
};