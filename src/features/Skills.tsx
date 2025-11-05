"use client";
import { Anchor } from "@/components/Anchor/Anchor";
import { ScrollUpCard } from "@/components/ScrollUpCard/ScrollUpCard";
import { colors } from "@/utils/colors";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Skills = () => {
  return (
    <Container>
      <ScrollUpCard backgroundColor={colors.background.dark}>
        <Anchor text="SKILLS" href="#skills" color={colors.background.light} />
        <Box height="24px" />
        <Box height="4px" width="100%" backgroundColor={colors.background.light} />
        <Box height="36px" />
      </ScrollUpCard>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;
`; 