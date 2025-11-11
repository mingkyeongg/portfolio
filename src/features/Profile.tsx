"use client";
import { Anchor } from "@/components/Anchor/Anchor";
import { Magnetic } from "@/components/Magnetic/Magnetic";
import { PaddedBox } from "@/components/PaddedBox/PaddedBox";
import { ScrollUpCard } from "@/components/ScrollUpCard/ScrollUpCard";
import { useIsMobile } from "@/hooks/useIsMobile";
import { breakpoints } from "@/utils/breakpoints";
import { colors } from "@/utils/colors";
import { Box, HStack, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft";
import { FaQuoteRight } from "@react-icons/all-files/fa/FaQuoteRight";
import { MdMoreHoriz } from "@react-icons/all-files/md/MdMoreHoriz";
import Image from "next/image";
import Link from "next/link";


const nameToIcon: Record<string, string> = {
  github: "/icons/github.svg",
  tistory: "/icons/tistory.svg",
  mail: "/icons/mail.svg",
};


const ContactButton = ({ url, name }: { url: string, name: string }) => {
  return (
    <HStack align="center" gap="16px">
      <Link href={url} target="_blank">
        <Image src={nameToIcon[name]} alt={name} width={36} height={36} />
      </Link>
    </HStack>
  );
};

const AboutTexts = () => {
  const isMobile = useIsMobile();
  return (
    <Box flex="1" position="relative">
      <Magnetic strength={0.12}>
        <Box
          style={{
            position: "absolute",
            top: "6px",
            left: "6px",
            width: "100%",
            height: "100%",
            backgroundColor: colors.background.dark,
            pointerEvents: "none",
          }}
        />
      </Magnetic>
      <Box
        style={{
          width: "100%",
          height: "100%",
          border: `3px solid ${colors.background.dark}`,
          backgroundColor: colors.background.light,
          padding: "32px",
          position: "relative",
          transition: "transform 0.2s ease",
        }}
      >
        <DescriptionText>
          <HStack align="flex-start" gap="8px" width="fit-content" data-cursor-target="highlight">
          <FaQuoteLeft />
          <Highlight>
            사용자 경험을 만드는
            </Highlight>
          <FaQuoteRight />
          </HStack>
          프론트엔드 개발자입니다.
        </DescriptionText>
        <Box height="16px" />
        <DescriptionText style={{ fontSize: isMobile ? "16px" : "20px", lineHeight: "1.6" }}>
          새로운 기술과 문제에 호기심을 갖고
          <br />
          스스로 해결하며 성장합니다.
          <br />
          작은 부분이라도 더 나은 방법을 고민하며
          <br />
          완성도를 높이려 노력합니다.
        </DescriptionText>
        <Box height="48px" />
        <HStack align="center" gap="36px" justify={isMobile ? "center" : "flex-end"}>
          <ContactButton url="https://minkylee.tistory.com/" name="tistory" />
          <ContactButton url="https://github.com/mingkyeongg" name="github" />
          <ContactButton url="mailto:ming0820@naver.com" name="mail" />
      </HStack>
      </Box>
    </Box>
  );
};

const Highlight = styled.span`
  font-weight: 700;
  padding-bottom: 2px;
`;

const DescriptionText = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: ${colors.text.black};
  line-height: 1.5;
  margin: 0;

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const ProfileContent = () => {
  const isMobile = useIsMobile();
  return (
    <ScrollUpCard>
      <PaddedBox>
        <Anchor text="ABOUT" href="#about" />
        <Box height="48px" />
        <HStack align="center" gap="16px">
          <AboutText>
            <VStack align="flex-start" gap="8px">
              <p style={{ margin: 0 }}>안녕하세요.</p>
              <HStack gap="12px">
                <p style={{ margin: 0 }}><span data-cursor-target="highlight">개발자 이민경</span>입니다</p>
                <Magnetic strength={0.5}>
                  <MdMoreHoriz 
                    style={{
                      fontSize: "48px", 
                      cursor: "pointer",
                      transition: "transform 0.2s ease"
                    }} 
                  />
                </Magnetic>
              </HStack>
            </VStack>
          </AboutText>
        </HStack>

        <Box height="32px" />
        <Divider />
        <Box height="48px" />

        {!isMobile && (
        <HStack align="stretch" gap="32px" width="100%">
          <Box position="relative" flexShrink={0}>
            <Magnetic strength={0.15}>
              <Box
                style={{
                  position: "absolute",
                  top: "6px",
                  left: "6px",
                  width: "100%",
                  height: "100%",
                  backgroundColor: colors.background.dark,
                  pointerEvents: "none",
                }}
              />
            </Magnetic>
            <Box position="relative">
              <Image
                src="/images/github-profile.jpeg"
                alt="profile"
                width={360}
                height={360}
                style={{
                  display: "block",
                  border: `3px solid ${colors.background.dark}`,
                  position: "relative",
                }}
              />
            </Box>
          </Box>
          <AboutTexts />
        </HStack>
        )}
        {isMobile && (
          <VStack>
            <Image
              src="/images/github-profile.jpeg"
              alt="profile"
              width={360}
              height={360}
            />
            <AboutTexts />
          </VStack>
        )}
      </PaddedBox>
    </ScrollUpCard>
  );
};

export const Profile = () => {
  return (
    <Container>
      <ProfileContent />
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 40px 0;
  }
`;

const AboutText = styled.div`
  font-size: 32px;
  font-family: var(--font-aggravo-l);
  color: ${colors.text.black};
  line-height: 1.3;
  
  p {
    margin: 0;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${colors.background.dark};
`;