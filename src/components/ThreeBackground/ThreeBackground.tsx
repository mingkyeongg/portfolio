"use client";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

/* ──────────────────────────────────────────
   Keyframes — 각 오브가 서로 다른 타이밍으로 drift
────────────────────────────────────────── */
const drift1 = keyframes`
  0%   { transform: translate(0%,    0%)    scale(1); }
  33%  { transform: translate(8%,   -12%)   scale(1.08); }
  66%  { transform: translate(-6%,   10%)   scale(0.96); }
  100% { transform: translate(0%,    0%)    scale(1); }
`;

const drift2 = keyframes`
  0%   { transform: translate(0%,    0%)    scale(1); }
  40%  { transform: translate(-10%,  8%)    scale(1.05); }
  70%  { transform: translate(7%,   -6%)    scale(1.1); }
  100% { transform: translate(0%,    0%)    scale(1); }
`;

const drift3 = keyframes`
  0%   { transform: translate(0%,    0%)    scale(1); }
  30%  { transform: translate(5%,    14%)   scale(0.94); }
  65%  { transform: translate(-8%,  -5%)    scale(1.06); }
  100% { transform: translate(0%,    0%)    scale(1); }
`;

const drift4 = keyframes`
  0%   { transform: translate(0%,    0%)    scale(1); }
  45%  { transform: translate(-5%,  -10%)   scale(1.1); }
  80%  { transform: translate(9%,    6%)    scale(0.97); }
  100% { transform: translate(0%,    0%)    scale(1); }
`;

/* ──────────────────────────────────────────
   Container
────────────────────────────────────────── */
const Container = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  background: #080810;
`;

/* ──────────────────────────────────────────
   Orb base
────────────────────────────────────────── */
interface OrbProps {
  size: string;
  top: string;
  left: string;
  color: string;
  duration: string;
  opacity: number;
  anim: ReturnType<typeof keyframes>;
}

const Orb = styled.div<OrbProps>`
  position: absolute;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  border-radius: 50%;
  background: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  filter: blur(80px);
  will-change: transform;
  animation: ${({ anim }) => anim} ${({ duration }) => duration} ease-in-out infinite;
`;

/* ──────────────────────────────────────────
   Subtle noise grid overlay (CSS only)
────────────────────────────────────────── */
const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(237,232,223,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(237,232,223,0.03) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
`;

/* ──────────────────────────────────────────
   Component
────────────────────────────────────────── */
export const ThreeBackground = function () {
  return (
    <Container>
      {/* Primary orb — deep slate, center-left */}
      <Orb
        size="70vmax"
        top="-20%"
        left="-15%"
        color="radial-gradient(circle, rgba(30,28,40,0.90) 0%, rgba(18,17,24,0.50) 50%, transparent 70%)"
        opacity={1}
        duration="22s"
        anim={drift1}
      />

      {/* Secondary orb — dark cool, center-right */}
      <Orb
        size="55vmax"
        top="10%"
        left="50%"
        color="radial-gradient(circle, rgba(22,22,32,0.75) 0%, rgba(14,14,20,0.40) 50%, transparent 70%)"
        opacity={1}
        duration="28s"
        anim={drift2}
      />

      {/* Accent orb — neutral dark, bottom */}
      <Orb
        size="45vmax"
        top="45%"
        left="20%"
        color="radial-gradient(circle, rgba(25,22,35,0.60) 0%, rgba(15,14,20,0.25) 50%, transparent 70%)"
        opacity={1}
        duration="34s"
        anim={drift3}
      />

      {/* Highlight orb — faint warm, top-right */}
      <Orb
        size="35vmax"
        top="-10%"
        left="60%"
        color="radial-gradient(circle, rgba(40,36,28,0.35) 0%, rgba(25,22,18,0.12) 50%, transparent 70%)"
        opacity={1}
        duration="19s"
        anim={drift4}
      />

      {/* Subtle grid */}
      <GridOverlay />
    </Container>
  );
};
