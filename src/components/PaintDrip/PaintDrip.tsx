"use client";
import { useEffect, useRef } from "react";
import styled from "@emotion/styled";

interface Drip {
  x: number;
  tipY: number;       // 드립 끝점 y
  bodyW: number;      // 몸통 너비 (px)
  dropR: number;      // 맺힘 방울 반지름
  speed: number;      // 하강 속도 (px/frame)
  opacity: number;
  maxTipY: number;    // 최대 하강 지점
  phase: number;      // 진입 딜레이용 (negative = 아직 화면 위)
  color: string;
}

const COLORS = [
  "237,232,223",   // cream
  "220,215,205",   // warm white
  "200,195,188",   // light warm gray
];

function makeDrip(width: number, height: number, index: number): Drip {
  const i = index;
  // 결정적(deterministic) 위치 — SSR hydration 안전
  const xFrac = [0.04, 0.11, 0.19, 0.27, 0.35, 0.44, 0.53, 0.61, 0.70, 0.79, 0.87, 0.94][i % 12];
  const bodyW = [18, 10, 22, 8, 14, 20, 9, 16, 12, 24, 7, 15][i % 12];
  const speed = [0.18, 0.28, 0.14, 0.32, 0.22, 0.16, 0.26, 0.20, 0.30, 0.12, 0.24, 0.19][i % 12];
  const opBase = [0.28, 0.18, 0.35, 0.14, 0.22, 0.30, 0.16, 0.26, 0.20, 0.38, 0.12, 0.24][i % 12];
  const maxFrac = [0.55, 0.38, 0.70, 0.42, 0.60, 0.48, 0.65, 0.35, 0.75, 0.50, 0.44, 0.68][i % 12];
  const delayFrames = [0, 80, 20, 140, 50, 110, 30, 170, 60, 95, 155, 10][i % 12];

  return {
    x: xFrac * width,
    tipY: -delayFrames * speed,   // 딜레이만큼 화면 위에서 시작
    bodyW,
    dropR: bodyW * 0.88,
    speed,
    opacity: opBase,
    maxTipY: maxFrac * height,
    phase: 0,
    color: COLORS[i % COLORS.length],
  };
}

function drawDrip(ctx: CanvasRenderingContext2D, d: Drip) {
  const tipY = d.tipY;
  if (tipY < -d.dropR * 2) return; // 아직 화면 위

  const clampedTip = Math.min(tipY, d.maxTipY);
  const { x, bodyW, dropR, opacity, color } = d;

  // 끝이 maxTipY에 가까워질수록 opacity 서서히 감소
  const fade = tipY > d.maxTipY * 0.85
    ? Math.max(0, 1 - (tipY - d.maxTipY * 0.85) / (d.maxTipY * 0.15 + 1))
    : 1;
  const a = opacity * fade;
  if (a <= 0.005) return;

  const fillColor = `rgba(${color},${a.toFixed(3)})`;
  ctx.fillStyle = fillColor;

  // ── 몸통 (teardrop path) ──
  // 상단: 넓게 / 중단 2/3 지점: 좁아지는 neck / 하단: 둥근 방울
  const topY = 0;
  const neckY = clampedTip - dropR * 1.2;
  const neckW = bodyW * 0.28;

  ctx.beginPath();

  if (neckY > topY + 2) {
    // 왼쪽 윤곽: top-left → neck-left → drop-left
    ctx.moveTo(x - bodyW * 0.5, topY);
    ctx.bezierCurveTo(
      x - bodyW * 0.5, topY + (neckY - topY) * 0.5,
      x - neckW,       neckY - dropR * 0.4,
      x - neckW,       neckY,
    );
    // 방울 하단 호
    ctx.arc(x, clampedTip, dropR, Math.PI, 0, false);
    // 오른쪽 윤곽: drop-right → neck-right → top-right
    ctx.bezierCurveTo(
      x + neckW,       neckY,
      x + bodyW * 0.5, topY + (neckY - topY) * 0.5,
      x + bodyW * 0.5, topY,
    );
  } else {
    // 아직 짧은 구간 — 그냥 방울만
    ctx.arc(x, clampedTip, Math.max(0, dropR * Math.min(1, (tipY + dropR) / (dropR * 2 + 1))), 0, Math.PI * 2);
  }

  ctx.closePath();
  ctx.fill();
}

export const PaintDrip = function () {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(function () {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    const drips: Drip[] = [];

    const resize = function () {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width  = w;
      canvas.height = h;
      // 드립 재생성
      drips.length = 0;
      for (let i = 0; i < 12; i++) {
        drips.push(makeDrip(w, h, i));
      }
    };

    resize();
    window.addEventListener("resize", resize);

    let raf = 0;

    const tick = function () {
      ctx.clearRect(0, 0, w, h);

      for (const d of drips) {
        // 끝에 도달하면 화면 위로 리셋
        if (d.tipY > d.maxTipY + d.dropR * 3) {
          d.tipY = -(20 + Math.random() * 80);
          d.maxTipY = h * (0.35 + Math.random() * 0.40);
        }
        d.tipY += d.speed;
        drawDrip(ctx, d);
      }

      raf = requestAnimationFrame(tick);
    };

    tick();

    return function () {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  width: 100%;
  height: 100%;
`;
