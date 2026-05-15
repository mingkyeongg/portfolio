"use client";
import { ImageSlider } from "@/components/ImageSlider/ImageSlider";
import { PaddedBox } from "@/components/PaddedBox/PaddedBox";
import { ProjectLinkBadge } from "@/components/ProjectLinkBadge/ProjectLinkBadge";
import { ProjectTypeBadge } from "@/components/ProjectKindBadge/ProjectTypeBadge";
import { breakpoints } from "@/utils/breakpoints";
import { projectData } from "@/utils/ProjectData";
import { ProjectType } from "@/types/projects";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import NextImage from "next/image";

const N = projectData.length;
const HIT = [0.175, 0.885, 0.32, 1.275] as const;

export const Project = function () {
  return (
    <Wrap>
      <PaddedBox>
        <Inner>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: HIT }}
          >
            <SectionLabel>Projects</SectionLabel>
            <HeaderRow>
              <SectionTitle>작업물</SectionTitle>
              <SectionSub>직접 설계하고 구현한 {N}개의 프로젝트</SectionSub>
            </HeaderRow>
          </motion.div>

          <CardGrid>
            {projectData.map(function (project: ProjectType, i: number) {
              return (
                <CardSlot
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{ duration: 0.48, ease: HIT, delay: (i % 3) * 0.07 }}
                >
                  <ProjectCard project={project} index={i} />
                </CardSlot>
              );
            })}
          </CardGrid>
        </Inner>
      </PaddedBox>
    </Wrap>
  );
};

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  const { front, back } = project;
  const types = Array.isArray(front.projectType) ? front.projectType : [front.projectType];
  const chips = front.techStack.split(/,\s*/);
  const cardNum = String(index + 1).padStart(2, "0");

  return (
    <Card>
      {/* Corner screw decorations */}
      <CardScrews />

      {/* Image area — recessed screen */}
      <ImageArea>
        {back.images.length > 1
          ? <SliderWrap><ImageSlider images={back.images} /></SliderWrap>
          : <NextImage
              src={front.imageSrc}
              alt={front.title}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAA/9k="
            />
        }
        <BezelOverlay />
      </ImageArea>

      {/* Info area */}
      <InfoArea>
        <InfoTop>
          <MetaRow>
            <NumStamp>{cardNum}</NumStamp>
            <MetaDivider />
            <BadgeGroup>
              {types.map(function (t) { return <ProjectTypeBadge key={t} text={t} />; })}
            </BadgeGroup>
            <Period>{front.period}</Period>
          </MetaRow>

          <CardTitle>{front.title}</CardTitle>
          <CardIntro>{front.introduction}</CardIntro>
        </InfoTop>

        <InfoMid>
          <TeamRow>
            <TeamItem>
              <TeamKey>인원</TeamKey>
              <TeamVal>{front.people}</TeamVal>
            </TeamItem>
            <TeamItem>
              <TeamKey>역할</TeamKey>
              <TeamVal>{front.role}</TeamVal>
            </TeamItem>
          </TeamRow>

          <ImplRule />

          <ImplList>
            {back.implementation.slice(0, 3).map(function (item, i) {
              return (
                <ImplItem key={i}>
                  <ImplDot />
                  {item}
                </ImplItem>
              );
            })}
          </ImplList>
        </InfoMid>

        <InfoBottom>
          <ChipRow>
            {chips.slice(0, 4).map(function (chip) {
              return <TechChip key={chip}>{chip}</TechChip>;
            })}
            {chips.length > 4 && <TechChipMore>+{chips.length - 4}</TechChipMore>}
          </ChipRow>
          <LinkRow>
            {front.projectLinkBadges.map(function (b) {
              return <ProjectLinkBadge key={b.text} text={b.text} href={b.href} />;
            })}
          </LinkRow>
        </InfoBottom>
      </InfoArea>
    </Card>
  );
}

const Wrap = styled.div`
  width: 100%;
  background: var(--bg);
`;

const Inner = styled.div`
  padding: 120px 0 110px;
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

const SectionLabel = styled.span`
  display: block;
  font-family: var(--font-mono), monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.20em;
  text-transform: uppercase;
  color: var(--accent);
  opacity: 0.8;
  margin-bottom: 10px;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
  flex-wrap: wrap;
`;

const SectionTitle = styled.h2`
  font-size: clamp(36px, 5.5vw, 60px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.0;
  color: var(--fg);
  text-shadow: 0 1px 0 var(--border-light);
`;

const SectionSub = styled.p`
  font-size: 13px;
  color: var(--fg-3);
  padding-top: 2px;
`;

/* 3-column uniform grid — 6 projects = 2 perfect rows */
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 520px;
  gap: 16px;

  @media (max-width: ${breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 540px;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`;

/* Grid cell — fills the row height so Card can use height: 100% */
const CardSlot = styled(motion.div)`
  height: 100%;

  @media (max-width: ${breakpoints.mobile}px) {
    height: auto;
  }
`;

/* Industrial card panel — fills grid cell height */
const Card = styled.div`
  position: relative;
  background: var(--bg);
  border-radius: 16px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: var(--shadow-floating);
    transform: translateY(-3px);
  }

  @media (max-width: ${breakpoints.mobile}px) {
    height: auto;
  }
`;

/* Screw corners via pseudo — sits on top layer */
const CardScrews = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
  border-radius: 16px;
  background:
    radial-gradient(circle at 11px 11px, var(--screw-center) 2.5px, var(--screw-ring) 3.5px, transparent 5px),
    radial-gradient(circle at calc(100% - 11px) 11px, var(--screw-center) 2.5px, var(--screw-ring) 3.5px, transparent 5px),
    radial-gradient(circle at 11px calc(100% - 11px), var(--screw-center) 2.5px, var(--screw-ring) 3.5px, transparent 5px),
    radial-gradient(circle at calc(100% - 11px) calc(100% - 11px), var(--screw-center) 2.5px, var(--screw-ring) 3.5px, transparent 5px);
`;

/* Image as recessed display — fixed height so info area fills the rest */
const ImageArea = styled.div`
  position: relative;
  width: 100%;
  height: 190px;
  flex-shrink: 0;
  background: var(--muted);
  box-shadow: inset 0 2px 8px var(--border-shadow);
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--border-shadow);
    pointer-events: none;
    z-index: 2;
  }
`;

const SliderWrap = styled.div`
  position: absolute; inset: 0;
`;

/* Inner vignette + bezel on image */
const BezelOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.18) 100%);
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  padding: 18px 20px 18px;
  gap: 10px;
  overflow: hidden;
`;

const InfoTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const NumStamp = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.10em;
  color: var(--accent);
  opacity: 0.7;
`;

const MetaDivider = styled.span`
  width: 14px;
  height: 2px;
  background: var(--bg);
  box-shadow: inset 0 1px 0 var(--border-shadow), 0 1px 0 var(--border-light);
  flex-shrink: 0;
`;

const BadgeGroup = styled.div`
  display: flex;
  gap: 4px;
`;

const Period = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 9px;
  letter-spacing: 0.06em;
  color: var(--fg-3);
  margin-left: auto;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--fg);
  text-shadow: 0 1px 0 var(--border-light);
`;

const CardIntro = styled.p`
  font-size: 12px;
  line-height: 1.6;
  color: var(--fg-2);
`;

const InfoMid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`;

const TeamRow = styled.div`
  display: flex;
  gap: 16px;
`;

const TeamItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const TeamKey = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--fg-3);
`;

const TeamVal = styled.span`
  font-size: 11px;
  color: var(--fg-2);
`;

const ImplRule = styled.div`
  width: 100%;
  height: 2px;
  background: var(--bg);
  box-shadow: inset 0 1px 0 var(--border-shadow), 0 1px 0 var(--border-light);
`;

const ImplList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ImplItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 11px;
  line-height: 1.6;
  color: var(--fg-2);
`;

const ImplDot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.5;
  flex-shrink: 0;
  margin-top: 6px;
`;

const InfoBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 4px;
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const TechChip = styled.span`
  padding: 3px 8px;
  border-radius: 5px;
  font-family: var(--font-mono), monospace;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--fg-2);
  background: var(--muted);
  box-shadow: var(--shadow-recessed);
  transition: color 0.15s;

  &:hover { color: var(--accent); }
`;

const TechChipMore = styled.span`
  padding: 3px 8px;
  border-radius: 5px;
  font-family: var(--font-mono), monospace;
  font-size: 9px;
  color: var(--fg-3);
`;

const LinkRow = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;
