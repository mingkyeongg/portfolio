"use client";
import styled from "@emotion/styled";
import { FaAppStore } from "@react-icons/all-files/fa/FaAppStore";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { MdLink } from "@react-icons/all-files/md/MdLink";
import { MdMoreHoriz } from "@react-icons/all-files/md/MdMoreHoriz";
import Link from "next/link";

interface ProjectLinkBadgeProps {
  text: "Youtube" | "Github" | "Website" | "More" | "AppStore";
  href: string;
}

const textMap = {
  Youtube: "영상", Github: "GitHub", Website: "바로가기",
  More: "더보기", AppStore: "앱스토어",
};

const iconMap = {
  Youtube: <FaYoutube />, Github: <FaGithub />, Website: <MdLink />,
  More: <MdMoreHoriz />, AppStore: <FaAppStore />,
};

export const ProjectLinkBadge = function ({ text, href }: ProjectLinkBadgeProps) {
  return (
    <Btn href={href} target="_blank" rel="noopener" className="no-flip">
      <IconWrap>{iconMap[text]}</IconWrap>
      {textMap[text]}
    </Btn>
  );
};

/* Neumorphic physical button link */
const Btn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 8px;
  background: var(--bg);
  box-shadow: var(--shadow-card);
  font-family: var(--font-mono), monospace;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--fg-2);
  text-decoration: none;
  transition: box-shadow 0.15s ease, color 0.15s ease, transform 0.15s ease;

  &:hover {
    box-shadow: var(--shadow-floating);
    color: var(--accent);
    transform: translateY(-1px);
  }
  &:active {
    box-shadow: var(--shadow-pressed);
    transform: translateY(1px);
  }
`;

const IconWrap = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
`;
