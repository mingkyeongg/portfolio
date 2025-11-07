"use client";

import { ExperienceItem } from "@/components/ExperienceItem/ExperienceItem";
import { PaddedBox } from "@/components/PaddedBox/PaddedBox";
import { useIsMobile } from "@/hooks/useIsMobile";
import { experienceData } from "@/utils/ExprienceData";
import { HStack, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedBox = ({ 
  children, 
  index,
  isLeft 
}: { 
  children: React.ReactNode;
  index: number;
  isLeft: boolean;
}) => {
  const controls = useAnimationControls();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay: index * 0.15,
        },
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={controls}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export const AboutMe = () => {
  const isMobile = useIsMobile();

  const MobileLayout = () => {
    return (
      <VStack width="100%" gap="40px" position="relative">
        {experienceData.map((experience, index) => {
          return (
            <ExperienceItem key={experience.title} experience={experience} />
          );
        })}
      </VStack>
    );
  };

  if (isMobile) {
    return (
      <Container>
        <PaddedBox>
          <MobileLayout />
        </PaddedBox>
      </Container>
    );
  }

  return (
    <Container>
      <PaddedBox>
        <TimelineContainer>
          <CenterLine />

          <VStack width="100%" gap="0" position="relative">
            {experienceData.map((experience, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <TimelineRow key={experience.title} isLeft={isLeft}>
                  {isLeft ? (
                    <>
                      <CardWrapper isLeft={true}>
                        <AnimatedBox index={index} isLeft={true}>
                          <ExperienceItem experience={experience} />
                        </AnimatedBox>
                      </CardWrapper>
                      <DotWrapper>
                        <Dot />
                        <HorizontalLine />
                      </DotWrapper>
                      <CardWrapper isLeft={true} />
                    </>
                  ) : (
                    <>
                      <CardWrapper isLeft={false}   />
                      <DotWrapper>
                        <HorizontalLine />
                        <Dot />
                      </DotWrapper>
                      <CardWrapper isLeft={false}>
                        <AnimatedBox index={index} isLeft={false}>
                          <ExperienceItem experience={experience} />
                        </AnimatedBox>
                      </CardWrapper>
                    </>
                  )}
                </TimelineRow>
              );
            })}
          </VStack>
        </TimelineContainer>
      </PaddedBox>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  padding: 80px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
`;

const CenterLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: black;
  transform: translateX(-50%);
`;

const TimelineRow = styled(HStack)<{ isLeft: boolean }>`
  width: 100%;
  align-items: center;
  gap: 0;
  position: relative;
`;

const CardWrapper = styled.div<{ isLeft: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: ${({ isLeft }) => isLeft ? "0 24px 0 0" : "0 0 0 24px"};
  margin-top: -84px;
`;

const DotWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  border: 4px solid white;
  box-shadow: 0 0 0 2px black;
`;

const HorizontalLine = styled.div`
  width: 40px;
  height: 4px;
  background-color: black;
`;