"use client";
import { breakpoints } from "@/utils/breakpoints";
import styled from "@emotion/styled";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Header } from "./Header";

const FAST = [0.16, 1, 0.3, 1] as const;

export const Landing = function () {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const y       = useTransform(scrollYProgress, [0, 0.45], [0, -28]);

  return (
    <Stage ref={ref}>
      <SchematicGrid />
      <Header />

      <HeroWrap style={{ opacity, y }}>
        <HeroArea>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: FAST, delay: 0.06 }}
          >
            <IndexRow>
              <IndexNum>SYS/01</IndexNum>
              <IndexLine />
              <IndexText>Portfolio · 2025</IndexText>
            </IndexRow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, ease: [0.175, 0.885, 0.32, 1.275], delay: 0.16 }}
          >
            <Name>이민경</Name>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.68, ease: FAST, delay: 0.34 }}
            style={{ transformOrigin: "left center", marginBottom: "22px" }}
          >
            <HRule />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: FAST, delay: 0.46 }}
          >
            <SubRow>
              <PositionText>
                서비스 구조를 이해하는<br />프론트엔드 개발자
              </PositionText>

              <ActionSide>
                <RoleChip>Frontend Developer</RoleChip>
                <Buttons>
                  <BtnPrimary
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97, y: 2 }}
                    onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    프로젝트 보기
                  </BtnPrimary>
                  <BtnGhost
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97, y: 2 }}
                    onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    소개 보기
                  </BtnGhost>
                </Buttons>
              </ActionSide>
            </SubRow>
          </motion.div>
        </HeroArea>
      </HeroWrap>

      <BottomBar>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: FAST, delay: 0.9 }}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <AvailDot />
          <AvailText>Available for work</AvailText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: FAST, delay: 1.1 }}
        >
          <ScrollCue
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          >
            <ScrollText>scroll</ScrollText>
            <ScrollArrow>↓</ScrollArrow>
          </ScrollCue>
        </motion.div>
      </BottomBar>
    </Stage>
  );
};

const Stage = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--bg);
  transition: background 0.3s ease;
`;

/* Industrial blueprint schematic grid */
const SchematicGrid = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background-image:
    linear-gradient(var(--rule) 1px, transparent 1px),
    linear-gradient(90deg, var(--rule) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.5;
`;

const HeroWrap = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 10;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const HeroArea = styled.div`
  padding: 0 64px 72px;
  pointer-events: auto;

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 0 24px 56px;
  }
`;

const IndexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const IndexNum = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.16em;
  color: var(--accent);
  opacity: 0.8;
`;

const IndexLine = styled.span`
  width: 20px;
  height: 1px;
  background: var(--border-shadow);
  box-shadow: 0 1px 0 var(--border-light);
  flex-shrink: 0;
`;

const IndexText = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--fg-3);
`;

/* Name with emboss effect */
const Name = styled.h1`
  font-family: var(--font-aggravo-b), serif;
  font-size: clamp(72px, 12vw, 152px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 0.88;
  color: var(--fg);
  margin-bottom: 20px;
  text-shadow: 0 1px 0 var(--border-light);

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: clamp(56px, 17vw, 92px);
  }
`;

/* Neumorphic divider rule */
const HRule = styled.div`
  width: 100%;
  height: 2px;
  background: var(--bg);
  box-shadow: inset 0 1px 0 var(--border-shadow), 0 1px 0 var(--border-light);
`;

const SubRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: flex-end;

  @media (max-width: ${breakpoints.tablet}px) {
    grid-template-columns: 1fr;
    gap: 24px;
    align-items: flex-start;
  }
`;

const PositionText = styled.p`
  font-size: clamp(13px, 1.2vw, 16px);
  line-height: 1.75;
  color: var(--fg-2);
  letter-spacing: 0.01em;
`;

const ActionSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;

  @media (max-width: ${breakpoints.tablet}px) {
    align-items: flex-start;
  }
`;

const RoleChip = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.20em;
  text-transform: uppercase;
  color: var(--fg-3);
`;

const Buttons = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;
  }
`;

/* Primary: accent red physical button */
const BtnPrimary = styled(motion.button)`
  height: 44px;
  padding: 0 24px;
  border-radius: 8px;
  background: var(--accent);
  color: var(--accent-fg);
  border: 1px solid rgba(255,255,255,0.15);
  cursor: pointer;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  box-shadow: var(--shadow-btn-accent);
  transition: box-shadow 0.15s ease, filter 0.15s ease;

  &:hover {
    filter: brightness(1.08);
  }
  &:active {
    box-shadow: var(--shadow-pressed);
    transform: translateY(2px);
  }

  @media (max-width: ${breakpoints.mobile}px) { flex: 1; }
`;

/* Ghost: neumorphic chassis button */
const BtnGhost = styled(motion.button)`
  height: 44px;
  padding: 0 24px;
  border-radius: 8px;
  background: var(--bg);
  color: var(--fg-2);
  border: none;
  cursor: pointer;
  font-family: 'Pretendard Variable', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  box-shadow: var(--shadow-card);
  transition: box-shadow 0.15s ease, color 0.15s ease;

  &:hover {
    color: var(--fg);
    box-shadow: var(--shadow-floating);
  }
  &:active {
    box-shadow: var(--shadow-pressed);
    transform: translateY(2px);
  }

  @media (max-width: ${breakpoints.mobile}px) { flex: 1; }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  padding: 0 64px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 0 24px 20px;
  }
`;

const AvailDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34D399;
  flex-shrink: 0;
  box-shadow: 0 0 8px rgba(52,211,153,0.7), 0 0 16px rgba(52,211,153,0.3);
  animation: pulse-led 2.4s ease-in-out infinite;

  @keyframes pulse-led {
    0%, 100% { box-shadow: 0 0 6px rgba(52,211,153,0.7); }
    50%       { box-shadow: 0 0 12px rgba(52,211,153,1), 0 0 24px rgba(52,211,153,0.4); }
  }
`;

const AvailText = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.20em;
  text-transform: uppercase;
  color: var(--fg-3);
`;

const ScrollCue = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

const ScrollText = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--fg-3);
`;

const ScrollArrow = styled.span`
  font-size: 11px;
  color: var(--fg-3);
`;
