"use client";
import { Anchor } from "@/components/Anchor/Anchor";
import { PaddedBox } from "@/components/PaddedBox/PaddedBox";
import { ScrollUpCard } from "@/components/ScrollUpCard/ScrollUpCard";
import { SkillBox } from "@/components/SkillBox/SkillBox";
import { colors } from "@/utils/colors";
import { Box, Grid } from "@chakra-ui/react";
import styled from "@emotion/styled";

const skills = [
  {
    title: "React / Next.js",
    description: ["React 기반의 SPA와 Next.js 기반의 SSR 환경을 모두 경험했습니다.",
        "Zustand, Jotai, Context API를 활용한 전역 상태 관리 경험이 있습니다.",
        "React Hook을 활용한 컴포넌트 설계 경험이 있습니다."],
  },
  {
    title: "Styling",
    description: ["Emotion, Chakra UI를 활용해 일관된 디자인 시스템을 구축했습니다.",
        "Storybook을 통해 UI 컴포넌트를 문서화 한 경험이 있습니다.",
        "CSS keyframe 및 Framer Motion을 활용한 인터랙티브 애니메이션 구현이 가능합니다."],
  },
  {
    title: "JavaScript / TypeScript",
    description: ["ES6+ 문법 및 비동기 처리(Promise, async/await)에 익숙합니다.", 
        "TypeScript를 활용하여 타입 안정성을 확보합니다.",
        "Jest를 활용한 단위 테스트 작성 경험이 있습니다.",
        "Webpack, Vite를 활용한 번들링 설정 및 최적화 경험이 있습니다."],
  },
  {
    title: "Git / Github & AWS",
    description: ["Git을 활용한 버전 관리 및 협업 경험이 있습니다.",
        "GitHub Actions를 통한 CI/CD 파이프라인 구축 경험이 있습니다.",
        "AWS S3, CloudFront를 활용한 정적 사이트 배포 경험이 있습니다."],
  },
]

export const Skills = () => {
  return (
    <Container>
      <ScrollUpCard backgroundColor={colors.background.dark}>
        <PaddedBox>
        <Anchor text="SKILLS" href="#skills" color={colors.background.light} />
        <Box height="24px" />
        <Box height="4px" width="100%" backgroundColor={colors.background.light} />
        <Box height="36px" />
        <Grid
          templateColumns="repeat(2, 1fr)" // 한 줄에 2개
          gap="24px"                       // 칸 사이 간격
          width="100%"
          height="100%"
        >
          {skills.map((skill) => (
            <SkillBox key={skill.title} title={skill.title} description={skill.description} />
          ))}
        </Grid>
        </PaddedBox>
      </ScrollUpCard>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;
`; 