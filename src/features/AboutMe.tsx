"use client";

import { ExperienceItem } from "@/components/ExperienceItem/ExperienceItem";
import { PaddedBox } from "@/components/PaddedBox/PaddedBox";
import { experienceData } from "@/utils/ExprienceData";
import { Box, HStack, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedBox = ({ children, index }: { children: React.ReactNode, index: number }) => {
  const controls = useAnimationControls();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          delay: index * 0.1,
        },
      });
    }
  }, [controls, inView, index]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}

export const AboutMe = () => {
  return (
    <Container>
      <PaddedBox>
        <HStack width="100%" align="stretch" justify="flex-start" gap="0">
          <Box width="4px" backgroundColor="black" />
          <VStack width="100%" gap="24px">
            {experienceData.map((experience, index) => (
              <HStack
                key={experience.title}
                width="100%"
                align="center"
                gap="0"
              >
                <Box
                  width="16px"
                  height="4px"
                  backgroundColor="black"
                />
                <AnimatedBox index={index}>
                  <ExperienceItem experience={experience} />
                </AnimatedBox>
              </HStack>
            ))}
          </VStack>
        </HStack>
      </PaddedBox>
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  padding: 0 0 80px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
