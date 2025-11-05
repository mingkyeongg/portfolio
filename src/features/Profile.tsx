"use client";
import { Anchor } from "@/components/Anchor/Anchor";
import { PaddedBox } from "@/components/PaddedBox/PaddedBox";
import { RoundBox } from "@/components/RoundBox/RoundBox";
import { ScrollUpCard } from "@/components/ScrollUpCard/ScrollUpCard";
import { colors } from "@/utils/colors";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { MdMoreHoriz } from "@react-icons/all-files/md/MdMoreHoriz";
import Image from "next/image";

const AboutTexts = () => {
  return (
    <VStack align="flex-start" justify="flex-start" width="100%" gap="24px">
      <Box flex="1">
        <RoundBox color={colors.background.dark}>
          <Text fontFamily="Aggravo" fontSize="20px" fontWeight="500">
            사용자 경험을 완성
          </Text>
          <DescriptionText>
            개발 결과를 시각적으로 확인하고 사용자 피드백을 바로 반영할 수
            있다는 점에 매력을 느껴 프론트엔드 개발을 시작했습니다.
          </DescriptionText>
          <DescriptionText>
            사용자와 가까운 곳에서 더 나은 경험을 만들어가고 싶습니다.
          </DescriptionText>
        </RoundBox>
      </Box>
      <Box flex="1">
        <RoundBox color={colors.background.dark}>
          <Text fontFamily="Aggravo" fontSize="20px" fontWeight="500">
            도전 정신과 실행력
          </Text>
          <DescriptionText>
            새로운 기술이나 문제 상황과 마주했을 때 호기심이 앞섭니다.{" "}
          </DescriptionText>
          <DescriptionText>
            스스로 부딪히고 해결하는 과정에서 쌓인 경험이 저를 한 단계
            성장시키는 원동력이 됩니다.
          </DescriptionText>
        </RoundBox>
      </Box>
      <Box flex="1">
        <RoundBox color={colors.background.dark}>
          <Text fontFamily="Aggravo" fontSize="20px" fontWeight="500">
            후회 없는 개발
          </Text>
          <DescriptionText>
            “이 정도면 됐다”는 생각보다는, “더 나은 방법은 없을까?”를 먼저
            떠올립니다.{" "}
          </DescriptionText>
          <DescriptionText>
            작은 부분이라도 개선할 수 있다면 끝까지 고민하며 완성도를 높이려
            노력합니다.
          </DescriptionText>
        </RoundBox>
      </Box>
    </VStack>
  );
};

const DescriptionText = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.text.black};
  line-height: 1.2;
`;

export const ProfileContent = () => {
  return (
    <ScrollUpCard>
      <PaddedBox>
        <Anchor text="ABOUT" href="#about" />
        <HStack align="flex-end" justify="center" gap="24px" width="100%">
          <Box flex="1">
            <Box height="36px" />
            <AboutText>
              <p>안녕하세요</p>
              <HStack>
                <p>프론트엔드 개발자 이민경입니다.</p>
                <MdMoreHoriz style={{fontSize: "60px", cursor: "pointer"}} />
              </HStack>
            </AboutText>
            <Box height="24px" />
            <Box
              height="4px"
              width="100%"
              backgroundColor={colors.background.dark}
            />
            <Box height="36px" />
            <Box
              borderRadius="30px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)"}}
            >
              <Image
                src="/images/github-profile.jpeg"
                alt="profile"
                width={400}
                height={400}
                style={{
                  borderRadius: "30px",
                  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                }}
              />
            </Box>
          </Box>
          <Box flex="1">
            <AboutTexts />
          </Box>
        </HStack>
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
  height: 100vh;
  position: relative;
  width: 100%;
`;

const AboutText = styled.div`
  font-size: 24px;
  font-family: 'Aggravo';
  font-weight: 300;
  color: ${colors.text.black};
  line-height: 1.2;
`;
