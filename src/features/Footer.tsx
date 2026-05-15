"use client";
import { PaddedBox } from "@/components/PaddedBox/PaddedBox";
import { breakpoints } from "@/utils/breakpoints";
import styled from "@emotion/styled";

export const Footer = function () {
  const year = new Date().getFullYear();
  return (
    <Wrap>
      <PaddedBox>
        <Inner>
          <TopRule />
          <Row>
            <StatusGroup>
              <StatusLED />
              <StatusText>SYSTEM OPERATIONAL</StatusText>
            </StatusGroup>
            <Name>이민경 / LEE MINKYEONG</Name>
            <Copy>© {year}</Copy>
          </Row>
        </Inner>
      </PaddedBox>
    </Wrap>
  );
};

const Wrap = styled.footer`
  width: 100%;
  background: var(--bg);
`;

const Inner = styled.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

/* Neumorphic rule */
const TopRule = styled.div`
  width: 100%;
  height: 2px;
  background: var(--bg);
  box-shadow: inset 0 1px 0 var(--border-shadow), 0 1px 0 var(--border-light);
  margin-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`;

const StatusGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const StatusLED = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #34D399;
  flex-shrink: 0;
  box-shadow: 0 0 6px rgba(52,211,153,0.8);
  animation: footer-led 3s ease-in-out infinite;

  @keyframes footer-led {
    0%, 100% { box-shadow: 0 0 4px rgba(52,211,153,0.6); }
    50%       { box-shadow: 0 0 10px rgba(52,211,153,1), 0 0 20px rgba(52,211,153,0.3); }
  }
`;

const StatusText = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--fg-3);
  text-transform: uppercase;
`;

const Name = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: var(--fg-3);
  text-transform: uppercase;
`;

const Copy = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 10px;
  color: var(--fg-3);
  letter-spacing: 0.06em;

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 9px;
  }
`;
