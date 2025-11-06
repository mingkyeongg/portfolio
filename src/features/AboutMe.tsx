"use client";

import { ExperienceItem } from "@/components/ExperienceItem/ExperienceItem";
import { PaddedBox } from "@/components/PaddedBox/PaddedBox";
import { experienceData } from "@/utils/ExprienceData";
import { VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const AboutMe = () => {
  return (
    <Container>
      <PaddedBox>
        <VStack width="100%" align="center" justify="center">
          {experienceData.map((experience) => (
            <ExperienceItem key={experience.title} experience={experience} />
          ))}
        </VStack>
        </PaddedBox>
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  padding: 80px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
