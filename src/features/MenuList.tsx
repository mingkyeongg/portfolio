"use client";
import { colors } from "@/utils/colors";
import styled from "@emotion/styled";

const ACCENT = colors.accent.blue;
const TEXT = colors.text.black;

export function MenuList() {
  return (
    <Nav>
      <MenuLink href="#about">ABOUT</MenuLink>
      <MenuLink href="#feature">SKILLS</MenuLink>
      <MenuLink href="#license">PROJECTS</MenuLink>
      <MenuLink href="#download">CONTACT</MenuLink>
    </Nav>
  );
}

function MenuLink({ href, children }: { href: string; children: string }) {
  return (
    <Item href={href}>
      <span className="label">{children}</span>
      <svg className="arrow" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 7v10M6 13l6 6 6-6" />
      </svg>
      <span className="sr-only">{children}</span>
    </Item>
  );
}

/* ── Styles ───────────────────────────────────────── */

const Nav = styled.nav`
  width: 50vw;
  display: grid;
  gap: 8px;
`;

const Item = styled.a`
  --p: 0;

  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  text-decoration: none;
  padding: 10px 40px 10px 20px;
  border-radius: 8px;

  font-weight: 900;
  font-size: clamp(28px, 4vw, 72px);
  letter-spacing: 0.02em;
  color: ${TEXT};
  line-height: 1;

  background: linear-gradient(${ACCENT}, ${ACCENT}) no-repeat;
  background-size: calc(var(--p) * 100%) 100%;
  background-position: 0 0;
  transition: background-size 420ms cubic-bezier(.2,.8,.2,1), color 240ms ease;

  .label {
    position: relative;
    z-index: 1;
    display: inline-block;
    transition: transform 0.35s ease;
  }

  .arrow {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(-50%, -50%) translateY(2px);
    width: 24px;
    height: 24px;
    opacity: 0;
    transition: opacity 260ms ease, left 420ms cubic-bezier(.2,.8,.2,1), transform 420ms cubic-bezier(.2,.8,.2,1);
    pointer-events: none;
  }
  .arrow path {
    stroke: #fff;
    stroke-width: 2.2;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  &:hover,
  &:focus-visible {
    --p: 1;
    outline: none;
    color: #fff;
  }
  &:hover .label,
  &:focus-visible .label {
    transform: scale(1.15); /* 글자만 커짐 */
  }
  &:hover .arrow,
  &:focus-visible .arrow {
    opacity: 1;
    transform: translate(-50%, -50%) translateY(0);
  }

  .sr-only {
    position: absolute !important;
    width: 1px; height: 1px;
    padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0 0 0 0);
    white-space: nowrap; border: 0;
  }
`;