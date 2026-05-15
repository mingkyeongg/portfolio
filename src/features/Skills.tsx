"use client";
import { PaddedBox } from "@/components/PaddedBox/PaddedBox";
import { breakpoints } from "@/utils/breakpoints";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const HIT = [0.175, 0.885, 0.32, 1.275] as const;

const capabilityData = [
  {
    num: "01",
    title: "UX & Product Thinking",
    description:
      "사용자와 운영 환경의 문제를 분석하고\n정보 구조와 UI 흐름으로 해결합니다.",
    keywords: [
      "UX Flow", "Information Architecture", "Accessibility",
      "User Research", "Dashboard UX", "Problem Framing",
    ],
  },
  {
    num: "02",
    title: "Frontend Engineering",
    description:
      "유지보수성과 확장성을 고려한\n프론트엔드 아키텍처를 설계합니다.",
    keywords: [
      "React", "Next.js", "TypeScript", "Zustand", "Jotai",
      "React Query", "Component Architecture",
    ],
  },
  {
    num: "03",
    title: "Design System",
    description:
      "일관된 사용자 경험을 위해\n공통 컴포넌트와 디자인 기준을 구축합니다.",
    keywords: [
      "Storybook", "Reusable Components", "Tailwind CSS",
      "Design Tokens", "UI Consistency",
    ],
  },
  {
    num: "04",
    title: "Backend & Infrastructure Understanding",
    description:
      "서비스 동작 구조와 운영 환경을 이해하고\n프론트엔드와 연결합니다.",
    keywords: [
      "Node.js", "FastAPI", "PostgreSQL", "REST API", "Docker",
      "GitLab CI/CD", "GitHub Actions", "Linux", "Playwright", "LXC",
    ],
  },
];

/* Inline vent slot decoration */
const VentGroup = function () {
  return (
    <VentRow>
      <Vent /><Vent /><Vent />
    </VentRow>
  );
};

export const Skills = function () {
  return (
    <Wrap>
      <PaddedBox>
        <Inner>
          <SectionHeader>
            <SectionLabel>Core Capabilities</SectionLabel>
            <TitleRow>
              <Title>역량 구조</Title>
              <TitleSub>Frontend with Backend &amp; Infrastructure Understanding</TitleSub>
            </TitleRow>
          </SectionHeader>

          <CardGrid>
            {capabilityData.map(function (cap, i) {
              return (
                <motion.div
                  key={cap.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, ease: HIT, delay: i * 0.07 }}
                >
                  <CapCard>
                    <CardTopRow>
                      <NumStamp>{cap.num}</NumStamp>
                      <VentGroup />
                    </CardTopRow>
                    <CapTitle>{cap.title}</CapTitle>
                    <CapDesc>{cap.description}</CapDesc>
                    <Keywords>
                      {cap.keywords.map(function (kw) {
                        return <Keyword key={kw}>{kw}</Keyword>;
                      })}
                    </Keywords>
                  </CapCard>
                </motion.div>
              );
            })}
          </CardGrid>
        </Inner>
      </PaddedBox>
    </Wrap>
  );
};

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
  color: var(--accent);
  opacity: 0.8;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: clamp(36px, 5.5vw, 60px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.0;
  color: var(--fg);
  text-shadow: 0 1px 0 var(--border-light);
  flex-shrink: 0;

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: clamp(32px, 9vw, 48px);
  }
`;

const TitleSub = styled.p`
  font-size: 12px;
  color: var(--fg-3);
  letter-spacing: 0.01em;
  padding-top: 4px;

  @media (max-width: ${breakpoints.mobile}px) {
    display: none;
  }
`;

/* 2-column grid of industrial panels */
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: ${breakpoints.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

/* Industrial panel card with neumorphic shadow + screw corners */
const CapCard = styled.div`
  position: relative;
  background: var(--bg);
  border-radius: 16px;
  padding: 28px 28px 24px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: var(--shadow-floating);
    transform: translateY(-2px);
  }

  /* Corner screw decorations */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background:
      radial-gradient(circle at 10px 10px, var(--screw-center) 2.5px, var(--screw-ring) 3.5px, transparent 5px),
      radial-gradient(circle at calc(100% - 10px) 10px, var(--screw-center) 2.5px, var(--screw-ring) 3.5px, transparent 5px),
      radial-gradient(circle at 10px calc(100% - 10px), var(--screw-center) 2.5px, var(--screw-ring) 3.5px, transparent 5px),
      radial-gradient(circle at calc(100% - 10px) calc(100% - 10px), var(--screw-center) 2.5px, var(--screw-ring) 3.5px, transparent 5px);
  }
`;

const CardTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NumStamp = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--accent);
  opacity: 0.75;
`;

/* Vent slots in top-right corner of card */
const VentRow = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
`;

const Vent = styled.div`
  width: 3px;
  height: 18px;
  border-radius: 99px;
  background: var(--muted);
  box-shadow: var(--shadow-recessed);
`;

const CapTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--fg);
  line-height: 1.2;
`;

const CapDesc = styled.p`
  font-size: 13px;
  line-height: 1.7;
  color: var(--fg-2);
  white-space: pre-line;
  flex: 1;
`;

const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding-top: 4px;
`;

/* Recessed keyword chip — sits below the panel surface */
const Keyword = styled.span`
  padding: 4px 10px;
  border-radius: 6px;
  font-family: var(--font-mono), monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--fg-2);
  background: var(--muted);
  box-shadow: var(--shadow-recessed);
  transition: color 0.15s ease;

  &:hover { color: var(--accent); }
`;
