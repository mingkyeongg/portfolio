import { Experience } from "@/types/experience";
import { Box, HStack, Text } from "@chakra-ui/react";

interface ExperienceItemProps {
  experience: Experience;
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <Box width="100%" border="1px solid #000" borderRadius="10px" padding="10px">
      <HStack justify="space-between">
        <Text fontSize="24px" fontWeight="bold" fontFamily="Aggravo">{experience.title}</Text>
        <Text >{experience.period}</Text>
      </HStack>
      <Text>
        {Array.isArray(experience.description) ? experience.description.map((description) => (
          <Text key={description}>{description}</Text>
        )) : experience.description}
      </Text>
    </Box>
  );
};