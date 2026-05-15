"use client";
import { PaddedBox } from "@/components/PaddedBox/PaddedBox";
import { useIsMobile } from "@/hooks/useIsMobile";
import { breakpoints } from "@/utils/breakpoints";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const contacts = [
  { name: "GitHub", href: "https://github.com/mingkyeongg" },
  { name: "Tistory", href: "https://minkylee.tistory.com/" },
  { name: "Mail", href: "mailto:ming0820@naver.com" },
];

const EASE = [0.175, 0.885, 0.32, 1.275] as const;

export const Profile = function () {
  const isMobile = useIsMobile();

  return (
    <Wrap>
      <PaddedBox>
        <Inner>
          <SectionHeader>
            <SectionLabel>About</SectionLabel>
            <Title>개발자 이민경</Title>
          </SectionHeader>

          <ContentRow isMobile={isMobile}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE }}
              style={{ flexShrink: 0 }}
            >
              <ImgFrame>
                <Image
                  src="/images/github-profile.jpeg"
                  alt="profile"
                  width={isMobile ? 88 : 160}
                  height={isMobile ? 88 : 160}
                  style={{ borderRadius: 4, display: "block", objectFit: "cover" }}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAA/9k="
                />
              </ImgFrame>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
              style={{ flex: 1 }}
            >
              <TextBlock>
                <Bio>
                  새로운 기술과 문제에 호기심을 갖고 스스로 해결하며 성장합니다.
                  작은 부분이라도 더 나은 방법을 고민하며 완성도를 높이려 노력합니다.
                </Bio>
                <ContactRow>
                  {contacts.map(function (c) {
                    return (
                      <ContactTag
                        key={c.name}
                        href={c.href}
                        target="_blank"
                        rel="noopener"
                      >
                        {c.name}
                      </ContactTag>
                    );
                  })}
                </ContactRow>
              </TextBlock>
            </motion.div>
          </ContentRow>
        </Inner>
      </PaddedBox>
    </Wrap>
  );
};

export const ProfileContent = Profile;

const Wrap = styled.div`
  width: 100%;
  background: var(--bg);
`;

const Inner = styled.div`
  padding: 120px 0 60px;
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

const ContentRow = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ isMobile }) => isMobile ? "column" : "row"};
  align-items: flex-start;
  gap: ${({ isMobile }) => isMobile ? "28px" : "52px"};
`;

/* Photo frame as industrial panel with screw corners */
const ImgFrame = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-card);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    z-index: 1;
    background:
      radial-gradient(circle at 7px 7px, var(--screw-center) 2px, var(--screw-ring) 3px, transparent 4px),
      radial-gradient(circle at calc(100% - 7px) 7px, var(--screw-center) 2px, var(--screw-ring) 3px, transparent 4px),
      radial-gradient(circle at 7px calc(100% - 7px), var(--screw-center) 2px, var(--screw-ring) 3px, transparent 4px),
      radial-gradient(circle at calc(100% - 7px) calc(100% - 7px), var(--screw-center) 2px, var(--screw-ring) 3px, transparent 4px);
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Bio = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.8;
  color: var(--fg-2);
  max-width: 480px;
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

/* Contact links as neumorphic physical tags */
const ContactTag = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 8px;
  background: var(--bg);
  box-shadow: var(--shadow-card);
  font-family: var(--font-mono), monospace;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--fg-2);
  text-decoration: none;
  transition: box-shadow 0.15s ease, color 0.15s ease, transform 0.15s ease;

  &:hover {
    box-shadow: var(--shadow-floating);
    color: var(--accent);
    transform: translateY(-1px);
  }
  &:active {
    box-shadow: var(--shadow-pressed);
    transform: translateY(1px);
  }
`;
