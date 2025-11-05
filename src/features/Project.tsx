import { Anchor } from "@/components/Anchor/Anchor";
import { FlipCard } from "@/components/FlipCard/FlipCard";
import { ImageSlider } from "@/components/ImageSlider/ImageSlider";
import { PaddedBox } from "@/components/PaddedBox/PaddedBox";
import { ProjectTemplete } from "@/components/ProjectTemplete/ProjectTemplete";
import { colors } from "@/utils/colors";
import { Box, Grid, Text } from "@chakra-ui/react";

export const Project = () => {
  return (
    <Box
      backgroundColor={colors.background.light}
      width="100%"
      height="100%"
      padding="50px 0"
    >
      <PaddedBox>
        <Anchor
          text="PROJECTS"
          href="#projects"
          color={colors.background.dark}
        />
        <Box height="36px" />
        <Box
          height="4px"
          width="100%"
          backgroundColor={colors.background.dark}
        />
        <Box height="36px" />
        <Grid templateColumns="repeat(2, 1fr)" gap="24px" width="100%">
          <FlipCard
            front={
              <ProjectTemplete
                imageSrc="/images/projects/hearo-main.png"
                title="Hearo"
                period="2025.04 - 2025.11"
                introduction="청각 제약 상황을 위한 실내 소리 인식 및 상황감지 시스템"
                content={
                  <Text
                    fontFamily="Pretendard"
                    fontSize="16px"
                    fontWeight="400"
                    style={{color: colors.text.black}}
                  >
                    부산대학교 2025 학년도 전기 졸업과제로 진행한
                    프로젝트입니다. <br />
                    진해노인종합복지관 202명의 설문조사로 요구사항을 도출하여{" "}
                    <br />
                    기능 정의에 활용하였습니다.
                  </Text>
                }
                people="3명"
                role="앱 & 로봇 개발자"
                techStack="iOS (XCode), Swift, ROS2 Humble, Raspberry pi 5, Python, C++, Mosquitto"
                projectType="etc"
                projectLinkBadges={[
                  {
                    text: "Youtube",
                    href: "https://www.youtube.com/watch?v=bWdz_H-KRW0&t=1s",
                  },
                  {
                    text: "Github",
                    href: "https://github.com/orgs/Project-Hearo/repositories",
                  },
                  {text: "Website", href: "https://www.website.com"},
                  {text: "More", href: "https://www.more.com"},
                ]}
              />
            }
            back={
              <>
                <ImageSlider images={[
                  "/images/projects/hearo-main.png",
                  "/images/projects/hearo-main.png",
                  "/images/projects/hearo-main.png",
                  "/images/projects/hearo-main.png",
                ]} />
              </>
            }
          />

          <ProjectTemplete
            imageSrc="/images/projects/exitmate-main.png"
            title="ExitMate"
            period="2025.06 - 2025.09"
            introduction="폐업 소상공인을 위한 AI 서비스"
            content={
              <Text
                fontFamily="Pretendard"
                fontSize="16px"
                fontWeight="400"
                style={{color: colors.text.black}}
              >
                폐업 소상공인을 위한 플랫폼으로 크롤링을 통해 <br />
                분산된 지원 사업 정보 및 필요 서류를 한곳에서 제공합니다. <br />
                AI 챗봇을 활용하여 행정 / 법률 용어를 해설하는 기능이 있습니다.
              </Text>
            }
            people="6명"
            role="프론트엔드 개발자"
            techStack="Next.js, TypeScript, Git, GitHub, Zustand, styled-components"
            projectType="Web"
            projectLinkBadges={[
              {
                text: "Github",
                href: "https://github.com/exitmate/web/tree/mingkyeongg",
              },
              {text: "Website", href: "https://test.exitmate.kr/"},
              {text: "More", href: "https://www.more.com"},
            ]}
          />
          <ProjectTemplete
            imageSrc="/images/projects/glitter-main.png"
            title="반짝이맵"
            period="2025.03 - 2025.05"
            introduction="지도 위에 감정과 메시지를 남기고 공유할 수 있는 위치 기반 SNS"
            content={
              <Text
                fontFamily="Pretendard"
                fontSize="16px"
                fontWeight="400"
                style={{color: colors.text.black}}
              >
                같은 학교 학생들끼리 지도 위에 핀을 찍고 <br /> 1:1로 대화할 수
                있는 SNS입니다. <br />
                App Store 출시 및 80명의 사용자를 확보하였습니다.
              </Text>
            }
            people="3명"
            role="앱 개발자"
            techStack="React Native, Expo, TypeScript, Git, GitHub, Context API, react query"
            projectType="Mobile"
            projectLinkBadges={[
              {
                text: "Github",
                href: "https://github.com/banjjakme/glitters-fe",
              },
              {
                text: "AppStore",
                href: "https://apps.apple.com/kr/app/%EB%B0%98%EC%A7%9D%EC%9D%B4%EB%A7%B5/id6745518783",
              },
            ]}
          />
          <ProjectTemplete
            imageSrc="/images/projects/codemonster-main.png"
            title="CodeMonster"
            period="2025.01 - "
            introduction="코딩테스트 준비를 위한 스터디 플랫폼"
            content={
              <Text
                fontFamily="Pretendard"
                fontSize="16px"
                fontWeight="400"
                style={{color: colors.text.black}}
              >
                스터디룸 생성 및 문제 추천 기능을 제공합니다. <br />
                개인별 풀이를 아카이빙하고 <br />
                다른 사용자들의 풀이를 공유하며 학습할 수 있습니다. <br />
              </Text>
            }
            people="7명"
            role="프론트엔드 개발자"
            techStack="React, TypeScript, Git, GitHub, jotai, react query, styled-components"
            projectType="Web"
            projectLinkBadges={[
              {text: "Github", href: "https://github.com/PNUMeat/comon-fe"},
              {text: "Website", href: "https://codemonster.site/"},
              {text: "More", href: "https://www.more.com"},
            ]}
          />
        </Grid>
      </PaddedBox>
    </Box>
  );
};
