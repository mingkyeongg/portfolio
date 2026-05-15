"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import { breakpoints } from "@/utils/breakpoints";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("portfolio-theme") as Theme | null;
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const NAV_ITEMS = [
  { href: "#about",    label: "About" },
  { href: "#skills",   label: "Skills" },
  { href: "#projects", label: "Projects" },
] as const;

export const Header = function () {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [scrolled, setScrolled] = useState(false);

  useEffect(function () {
    setMounted(true);
    setTheme(getInitialTheme());
  }, []);

  useEffect(function () {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme, mounted]);

  const onScroll = useCallback(function () {
    setScrolled(window.scrollY > 1);
  }, []);

  useEffect(function () {
    window.addEventListener("scroll", onScroll, { passive: true });
    return function () { window.removeEventListener("scroll", onScroll); };
  }, [onScroll]);

  const isDark = theme === "dark";
  const toggle = function () {
    setTheme(function (p) { return p === "dark" ? "light" : "dark"; });
  };

  return (
    <Bar scrolled={scrolled}>
      <LogoGroup>
        <StatusLED />
        <LogoLink href="#landing">
          {!mounted ? "LMK" : isMobile ? "LMK" : "LEE MINKYEONG"}
        </LogoLink>
      </LogoGroup>

      <Nav>
        {NAV_ITEMS.map(function ({ href, label }) {
          return (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          );
        })}
      </Nav>

      <ThemeBtn onClick={toggle} aria-label="테마 전환" scrolled={scrolled}>
        <ThemeLabel>{isDark ? "Light" : "Dark"}</ThemeLabel>
      </ThemeBtn>
    </Bar>
  );
};

const Bar = styled.header<{ scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  height: 56px;
  width: 100%;
  padding: 0 32px;
  background: ${({ scrolled }) => scrolled ? "var(--header-blur-bg)" : "transparent"};
  backdrop-filter: ${({ scrolled }) => scrolled ? "blur(20px)" : "none"};
  -webkit-backdrop-filter: ${({ scrolled }) => scrolled ? "blur(20px)" : "none"};
  box-shadow: ${({ scrolled }) => scrolled ? "var(--shadow-card)" : "none"};
  border-bottom: 1px solid ${({ scrolled }) => scrolled ? "var(--border-light)" : "transparent"};
  border-top: 1px solid ${({ scrolled }) => scrolled ? "var(--border-shadow)" : "transparent"};
  font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, sans-serif;
  transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  animation: ${slideDown} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 0 20px;
    height: 52px;
  }
`;

const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: auto;
`;

/* Green LED indicating "system online" */
const StatusLED = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #34D399;
  flex-shrink: 0;
  box-shadow: 0 0 6px rgba(52,211,153,0.8);
  animation: led-breathe 3s ease-in-out infinite;

  @keyframes led-breathe {
    0%, 100% { box-shadow: 0 0 4px rgba(52,211,153,0.6); }
    50%       { box-shadow: 0 0 10px rgba(52,211,153,1), 0 0 20px rgba(52,211,153,0.3); }
  }
`;

const LogoLink = styled(Link)`
  font-family: var(--font-mono), monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--fg-2);
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s ease;
  &:hover { color: var(--accent); }

  @media (max-width: ${breakpoints.mobile}px) { font-size: 10px; }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  margin-right: 12px;

  @media (max-width: ${breakpoints.mobile}px) {
    gap: 2px;
    margin-right: 8px;
  }
`;

const NavLink = styled.a`
  font-family: var(--font-mono), monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--fg-3);
  text-decoration: none;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 6px;
  transition: color 0.15s ease, background 0.15s ease;

  &:hover {
    color: var(--fg);
    background: var(--muted);
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 9px;
    padding: 5px 8px;
  }
`;

const ThemeBtn = styled.button<{ scrolled: boolean }>`
  background: var(--bg);
  border: none;
  padding: 0 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  border-radius: 6px;
  box-shadow: ${({ scrolled }) => scrolled ? "var(--shadow-card)" : "none"};
  transition: box-shadow 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    box-shadow: var(--shadow-floating);
  }
  &:active {
    box-shadow: var(--shadow-pressed);
    transform: translateY(1px);
  }
`;

const ThemeLabel = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--fg-3);
  transition: color 0.15s ease;

  ${ThemeBtn}:hover & { color: var(--fg); }
`;
