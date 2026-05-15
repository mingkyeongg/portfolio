"use client";
import { PaddedBox } from "@/components/PaddedBox/PaddedBox";
import { breakpoints } from "@/utils/breakpoints";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const HIT = [0.175, 0.885, 0.32, 1.275] as const;

const pipeline = [
  "Markdown",
  "HTML",
  "Chromium",
  "PDF Rendering",
];

const principles = [
  {
    num: "01",
    keyword: "문서 구조",
    desc: "정보의 계층과 흐름을 설계합니다",
  },
  {
    num: "02",
    keyword: "상태 흐름",
    desc: "데이터가 화면에 닿는 경로를 파악합니다",
  },
  {
    num: "03",
    keyword: "배포 환경",
    desc: "Docker · CI/CD · 서버 운영을 이해합니다",
  },
  {
    num: "04",
    keyword: "렌더링 구조",
    desc: "서버 렌더링과 클라이언트 사이의 경계를 설계합니다",
  },
  {
    num: "05",
    keyword: "협업 프로세스",
    desc: "코드 리뷰, 문서화, 컨벤션으로 팀을 연결합니다",
  },
];

export const SystemThinking = function () {
  return (
    <Wrap>
      <PaddedBox>
        <Inner>
          <TopRule />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: HIT }}
          >
            <HeaderRow>
              <SectionLabel>System Thinking</SectionLabel>
              <Statement>
                단순 화면 구현보다<br />
                서비스가 실제로 운영되는<br />
                흐름을 함께 고민합니다
              </Statement>
            </HeaderRow>
          </motion.div>

          {/* Physical pipeline visualization */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: HIT, delay: 0.08 }}
          >
            <PipelinePanel>
              <PipelineLabel>예시 · PDF 렌더링 파이프라인</PipelineLabel>
              <PipelineRow>
                {pipeline.map(function (step, i) {
                  return (
                    <PipelineItem key={step}>
                      <PipelineStep>{step}</PipelineStep>
                      {i < pipeline.length - 1 && (
                        <>
                          {/* Physical cylindrical pipe connector */}
                          <Pipe />
                          <PipeArrow>▶</PipeArrow>
                          <Pipe />
                        </>
                      )}
                    </PipelineItem>
                  );
                })}
              </PipelineRow>
            </PipelinePanel>
          </motion.div>

          {/* Principle cards as industrial panels */}
          <PrinciplesGrid>
            {principles.map(function (p, i) {
              return (
                <motion.div
                  key={p.keyword}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.38, ease: HIT, delay: i * 0.05 }}
                >
                  <PrincipleCard>
                    <PrincipleNum>{p.num}</PrincipleNum>
                    <PrincipleKeyword>{p.keyword}</PrincipleKeyword>
                    <PrincipleDesc>{p.desc}</PrincipleDesc>
                  </PrincipleCard>
                </motion.div>
              );
            })}
          </PrinciplesGrid>

          <BottomRule />
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
  padding: 0 0 100px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const TopRule = styled.div`
  width: 100%;
  height: 2px;
  background: var(--bg);
  box-shadow: inset 0 1px 0 var(--border-shadow), 0 1px 0 var(--border-light);
`;

const BottomRule = styled.div`
  width: 100%;
  height: 2px;
  background: var(--bg);
  box-shadow: inset 0 1px 0 var(--border-shadow), 0 1px 0 var(--border-light);
`;

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: ${breakpoints.tablet}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const SectionLabel = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.20em;
  text-transform: uppercase;
  color: var(--accent);
  opacity: 0.8;
  padding-top: 6px;
`;

const Statement = styled.p`
  font-family: var(--font-aggravo-b), serif;
  font-size: clamp(22px, 3.5vw, 38px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: var(--fg);
  text-shadow: 0 1px 0 var(--border-light);
`;

/* Pipeline as neumorphic panel */
const PipelinePanel = styled.div`
  position: relative;
  background: var(--bg);
  border-radius: 14px;
  padding: 24px 28px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  gap: 18px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background:
      radial-gradient(circle at 10px 10px, var(--screw-center) 2px, var(--screw-ring) 3px, transparent 4px),
      radial-gradient(circle at calc(100% - 10px) 10px, var(--screw-center) 2px, var(--screw-ring) 3px, transparent 4px),
      radial-gradient(circle at 10px calc(100% - 10px), var(--screw-center) 2px, var(--screw-ring) 3px, transparent 4px),
      radial-gradient(circle at calc(100% - 10px) calc(100% - 10px), var(--screw-center) 2px, var(--screw-ring) 3px, transparent 4px);
  }
`;

const PipelineLabel = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--fg-3);
`;

const PipelineRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
`;

const PipelineItem = styled.div`
  display: flex;
  align-items: center;
`;

const PipelineStep = styled.span`
  padding: 8px 16px;
  border-radius: 8px;
  font-family: var(--font-mono), monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--fg-2);
  background: var(--bg);
  box-shadow: var(--shadow-card);
`;

/* Cylindrical pipe connector */
const Pipe = styled.span`
  display: block;
  width: 12px;
  height: 8px;
  background: var(--muted);
  box-shadow: inset 0 2px 3px var(--border-shadow), 0 1px 0 var(--border-light);

  @media (max-width: ${breakpoints.mobile}px) {
    display: none;
  }
`;

const PipeArrow = styled.span`
  font-size: 8px;
  color: var(--accent);
  opacity: 0.6;
  padding: 0 2px;

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 0 8px;
    font-size: 10px;
    opacity: 0.4;
  }
`;

/* Grid of industrial principle cards */
const PrinciplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
`;

const PrincipleCard = styled.div`
  position: relative;
  background: var(--bg);
  border-radius: 12px;
  padding: 20px 20px 18px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    box-shadow: var(--shadow-floating);
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background:
      radial-gradient(circle at 8px 8px, var(--screw-center) 1.5px, var(--screw-ring) 2.5px, transparent 3.5px),
      radial-gradient(circle at calc(100% - 8px) calc(100% - 8px), var(--screw-center) 1.5px, var(--screw-ring) 2.5px, transparent 3.5px);
  }
`;

const PrincipleNum = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--accent);
  opacity: 0.6;
`;

const PrincipleKeyword = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: var(--fg);
  letter-spacing: -0.01em;
`;

const PrincipleDesc = styled.p`
  font-size: 12px;
  line-height: 1.6;
  color: var(--fg-3);
`;
