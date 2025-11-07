import { Magnetic } from "@/components/Magnetic/Magnetic";
import { Experience } from "@/types/experience";
import { colors } from "@/utils/colors";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface ExperienceItemProps {
  experience: Experience;
}

export const ExperienceItem = ({experience}: ExperienceItemProps) => {
  return (
    <WrapperBox titleColor={experience.titleColor}>
      <Magnetic strength={0.08}>
        <Shadow className="shadow" />
      </Magnetic>
      <Container>
        <HStack justify="space-between" align="flex-start" marginBottom="16px">
          <VStack align="flex-start" gap="8px">
            <Title>{experience.title}</Title>
            <Role>{experience.role}</Role>
          </VStack>
          <Period>{experience.period}</Period>
        </HStack>

        <Divider />

        <DescriptionContainer>
          {Array.isArray(experience.description) ? (
            experience.description.map((desc, index) => (
              <DescriptionItem key={index}>
                <Bullet>•</Bullet>
                <DescriptionText>{desc}</DescriptionText>
              </DescriptionItem>
            ))
          ) : (
            <DescriptionText>{experience.description}</DescriptionText>
          )}
        </DescriptionContainer>
      </Container>
    </WrapperBox>
  );
};

const Shadow = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
  width: 100%;
  height: 100%;
  background-color: ${colors.background.dark};
  pointer-events: none;
  transition: all 0.3s ease;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  font-family: 'Aggravo';
  color: ${colors.text.black};
  line-height: 1.2;
`;

const Container = styled(Box)`
  width: 100%;
  border: 3px solid ${colors.background.dark};
  background-color: ${colors.background.light};
  padding: 24px 28px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translate(-2px, -2px);
  }

  `;

const WrapperBox = styled(Box)<{titleColor: string}>`
  position: relative;
  width: 100%;
  
  &:hover .shadow {
    transform: translate(4px, 4px);
    }
    
    &:hover ${Title} {
      color: ${({titleColor}) => titleColor};
    }
  &:hover ${Shadow} {
    background-color: ${({titleColor}) => titleColor};
  }
`;

const Role = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.text.gray};
  padding: 4px 12px;
  background-color: ${colors.background.dark};
  color: ${colors.text.cream};
  display: inline-block;
`;

const Period = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.text.gray};
  white-space: nowrap;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.background.dark};
  margin-bottom: 20px;
`;

const DescriptionContainer = styled(VStack)`
  align-items: flex-start;
  width: 100%;
`;

const DescriptionItem = styled(HStack)`
  align-items: flex-start;
  width: 100%;
`;

const Bullet = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.background.dark};
  line-height: 1;
  flex-shrink: 0;
`;

const DescriptionText = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.text.black};
  line-height: 1.6;
  flex: 1;
`;
