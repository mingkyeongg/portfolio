"use client";
import { Anchor } from "@/components/Anchor/Anchor";
import { PaddedBox } from "@/components/PaddedBox/PaddedBox";
import { ScrollUpCard } from "@/components/ScrollUpCard/ScrollUpCard";
import { SkillBox } from "@/components/SkillBox/SkillBox";
import { useIsMobile } from "@/hooks/useIsMobile";
import { colors } from "@/utils/colors";
import { Box, Grid, HStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const skills = [
  {
    title: "React / Next.js",
    description: [
      "React 기반의 SPA와 Next.js 기반의 SSR 환경을 모두 경험했습니다.",
      "Zustand, Jotai, Context API를 활용한 전역 상태 관리 경험이 있습니다.",
      "React Hook을 활용하여 재사용 가능한 컴포넌트를 설계합니다.",
    ],
  },
  {
    title: "HTML / CSS",
    description: [
      "웹 표준과 접근성을 준수하며 반응형 / 크로스브라우저 환경을 고려합니다.",
      "Emotion, Chakra UI를 활용해 일관된 디자인 시스템을 구축했습니다.",
      "Storybook을 통해 UI 컴포넌트를 문서화 한 경험이 있습니다.",
      "CSS keyframe 및 Framer Motion을 활용한 애니메이션 구현이 가능합니다.",
    ],
  },
  {
    title: "JavaScript / TypeScript",
    description: [
      "ES6+ 문법 및 비동기 처리에 익숙합니다.",
      "TypeScript를 활용하여 타입 안정성을 확보합니다.",
      "Jest를 활용한 단위 테스트 작성 경험이 있습니다.",
      "Webpack, Vite를 활용한 번들링 설정 및 최적화 경험이 있습니다.",
    ],
  },
  {
    title: "Git / Github & AWS",
    description: [
      "Git을 활용한 버전 관리 및 협업 경험이 있습니다.",
      "GitHub Actions를 통한 CI/CD 파이프라인 구축 경험이 있습니다.",
      "AWS S3, CloudFront를 활용한 정적 사이트 배포 경험이 있습니다.",
    ],
  },
];

const SkillIcons = [
  "/icons/skills/React-Light.svg",
  "/icons/skills/NextJS-Light.svg",
  "/icons/skills/HTML.svg",
  "/icons/skills/CSS.svg",
  "/icons/skills/JavaScript.svg",
  "/icons/skills/TypeScript.svg",
  "/icons/skills/C.svg",
  "/icons/skills/CPP.svg",
  "/icons/skills/Git.svg",
  "/icons/skills/AWS-Light.svg",
];

const SkillIcon = ({icon}: {icon: string}) => {
  return (
    <Box className="skill-icon">
      <Image src={icon} alt={icon} width={24} height={24} />
    </Box>
  );
};

export const AnimatedGrid = ({children}: {children: React.ReactNode[]}) => {
  const ref = useRef<HTMLDivElement>(null);
  const MotionGrid = motion(Grid);
  const isInView = useInView(ref, {once: true, amount: 0.2});
  const isMobile = useIsMobile();

  return (
    <MotionGrid
      ref={ref}
      templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
      gap="32px"
      width="100%"
      height="100%"
      initial="hidden"
      alignItems="stretch"
      animate={isInView ? "visible" : "hidden"}
    >
      {children.map((child, index) => {
        const isLeft = index % 2 === 0;
        return (
          <motion.div
            key={index}
            style={{
              display: "grid",
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: isLeft ? -120 : 120,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </MotionGrid>
  );
};

export const Skills = () => {
  return (
    <Container>
      <ScrollUpCard backgroundColor={colors.background.dark}>
        <PaddedBox>
          <Box padding="40px 0 60px 0">
            <HStack justify="space-between">
              <Anchor
                text="SKILLS"
                href="#skills"
                color={colors.background.light}
              />
              <Box display="flex" gap="12px">
                {SkillIcons.map((icon) => (
                  <SkillIcon key={icon} icon={icon} />
                ))}
              </Box>
            </HStack>
            <Box height="24px" />
            <Box
              height="4px"
              width="100%"
              backgroundColor={colors.background.light}
            />
            <Box height="36px" />
            <AnimatedGrid>
              {skills.map((skill) => (
                <SkillBox
                  key={skill.title}
                  title={skill.title}
                  description={skill.description}
                />
              ))}
            </AnimatedGrid>
          </Box>
        </PaddedBox>
      </ScrollUpCard>
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  position: relative;
  width: 100%;
`;
