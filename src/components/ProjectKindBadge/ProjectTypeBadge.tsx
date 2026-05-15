import styled from "@emotion/styled";

interface ProjectTypeBadgeProps {
  text: "Web" | "Mobile" | "etc";
}

const textMap = { Web: "WEB", Mobile: "MOBILE", etc: "ETC" };

export const ProjectTypeBadge = function ({ text }: ProjectTypeBadgeProps) {
  return <Badge>{textMap[text]}</Badge>;
};

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: var(--font-mono), monospace;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--accent);
  opacity: 0.7;
  background: rgba(255,71,87,0.08);
`;
