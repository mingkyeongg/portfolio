"use client";
import { PaddedBox } from "@/components/PaddedBox/PaddedBox";
import { breakpoints } from "@/utils/breakpoints";
import { experienceData } from "@/utils/ExprienceData";
import { Experience } from "@/types/experience";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const EASE = [0.175, 0.885, 0.32, 1.275] as const;

const ExpRow = function ({ experience, index }: {
  experience: Experience; index: number;
}) {
  const descs = Array.isArray(experience.description)
    ? experience.description
    : [experience.description];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.42, ease: EASE, delay: index * 0.05 }}
    >
      <ExpCard>
        <ExpTop>
          <TitleGroup>
            <OrgTitle>{experience.title}</OrgTitle>
            <RoleTag>{experience.role}</RoleTag>
          </TitleGroup>
          <PeriodStamp>{experience.period}</PeriodStamp>
        </ExpTop>
        <DescList>
          {descs.map(function (d, i) {
            return (
              <DescItem key={i}>
                <DescDot />
                {d}
              </DescItem>
            );
          })}
        </DescList>
      </ExpCard>
    </motion.div>
  );
};

export const AboutMe = function () {
  return (
    <Wrap>
      <PaddedBox>
        <Inner>
          <SectionHeader>
            <SectionLabel>Experience</SectionLabel>
            <Title>경력 및 활동</Title>
          </SectionHeader>

          <ExpList>
            {experienceData.map(function (exp, i) {
              return <ExpRow key={exp.title} experience={exp} index={i} />;
            })}
          </ExpList>
        </Inner>
      </PaddedBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  background: var(--bg);
  padding-bottom: 100px;
`;

const Inner = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SectionLabel = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.20em;
  text-transform: uppercase;
  color: var(--fg-3);
`;

const Title = styled.h2`
  font-size: clamp(36px, 5.5vw, 60px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.0;
  color: var(--fg);
  text-shadow: 0 1px 0 var(--border-light);

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: clamp(32px, 9vw, 48px);
  }
`;

const ExpList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

/* Industrial experience panel — neumorphic card */
const ExpCard = styled.div`
  position: relative;
  background: var(--bg);
  border-radius: 14px;
  padding: 24px 28px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    box-shadow: var(--shadow-floating);
    transform: translateY(-1px);
  }

  /* Corner screw details */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background:
      radial-gradient(circle at 10px 10px, var(--screw-center) 2px, var(--screw-ring) 3px, transparent 4px),
      radial-gradient(circle at calc(100% - 10px) calc(100% - 10px), var(--screw-center) 2px, var(--screw-ring) 3px, transparent 4px);
  }
`;

const ExpTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const OrgTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--fg);
`;

/* Role shown as small accent label */
const RoleTag = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  opacity: 0.8;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(255,71,87,0.08);
`;

const PeriodStamp = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: var(--fg-3);
  white-space: nowrap;
  flex-shrink: 0;
`;

const DescList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const DescItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  line-height: 1.65;
  color: var(--fg-2);
`;

const DescDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.5;
  flex-shrink: 0;
  margin-top: 7px;
`;
