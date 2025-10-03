"use client";
import { colors } from "@/utils/colors";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { MenuList } from "./MenuList";

export const Landing = () => {
  return (
    <LandingContainer>
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        style={{width: "100%"}}
      >
        <Sub>FRONTEND DEVELOPER</Sub>
        <HorizontalLine />
      </motion.div>
      <Box p="40px" />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        gap="40px"
      >
        <motion.div
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.5}}
        >
          <MenuList />
        </motion.div>
        <motion.div
          initial={{opacity: 0, x: 20}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.5}}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w="100%"
            gap="40px"
          >
            <Box>
              <Text fontSize="24px">안녕하세요.</Text>
              <Text fontSize="18px">
                {" "}
                <Text as="span" fontWeight="bold">
                  프론트엔드 개발자 이민경
                </Text>
                입니다
              </Text>
              <Text fontSize="18px">
                사용자와 가장 가까운 곳에서{" "}
                <Text as="span" fontWeight="bold">
                  더 나은 경험
                </Text>
                을 만들어가고 싶습니다.
              </Text>
            </Box>
            <Box
              w="50px"
              h="50px"
              bg="white"
              transform="rotate(45deg)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="3px solid black"
            >
              <ArrowDownIcon
                w="50px"
                h="50px"
                color="black"
                transform="rotate(-45deg)"
              />
            </Box>
          </Box>
        </motion.div>
      </Box>
      <WaveWrapper>
        <WaveSVG className="wave wave1" />
        <WaveSVG className="wave wave2" />
      </WaveWrapper>
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  isolation: isolate;
  display: flex;
  padding: 40px;
  align-items: flex-start;
  flex-direction: column;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.text.black};
`;
const MainWrap = styled.div`
  position: absolute;
  inset: auto 0 0 0; /* bottom 고정 */
  padding: 40px;
  text-align: center;
  pointer-events: none;
`;

const sharedMain = `
  font-size: 8vw;
  font-weight: 800;
  line-height: 1;
  white-space: nowrap;
`;

const MainBase = styled.div`
  ${sharedMain}
  color: ${colors.text.black};
`;

const MainOverlay = styled.div`
  ${sharedMain}
  position: absolute;
  inset: 40px 0 40px 0;  /* MainBase와 패딩 맞춤 */
  color: ${colors.text.cream};        /* ▶ 파도 안쪽 컬러 */
  /* ▶ 핵심: SVG 마스크 적용 */
  -webkit-mask: url(#waveMask);
  mask: url(#waveMask);
`;

const Sub = styled.div`
  font-size: clamp(18px, 2.6vw, 32px);
  font-weight: 600;
  color: ${colors.text.black};
  opacity: 0.95;
`;

const WaveWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 200%;
  height: 70vh;
  z-index: 4;
  pointer-events: none;
  will-change: transform;

  svg.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 100%;
    fill: ${colors.accent.blue};
    mix-blend-mode: difference;
  }

  .wave1 { animation: waveSlide 12s linear infinite; opacity: 0.35; }
  .wave2 { animation: waveSlide 18s linear infinite reverse; opacity: 0.22; }

  @keyframes waveSlide {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  @media (prefers-reduced-motion: reduce) {
    .wave1, .wave2 { animation: none; }
  }
`;

type WaveSVGProps = React.SVGProps<SVGSVGElement>;
const WaveSVG = (props: WaveSVGProps) => (
  <svg
    viewBox="0 0 1200 200"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0,120 C160,80 320,160 480,120 C640,80 800,160 960,120 C1120,80 1180,140 1200,120 L1200,200 L0,200 Z" />
  </svg>
);
