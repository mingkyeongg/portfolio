import { colors } from "@/utils/colors";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { MdCheckCircle } from "@react-icons/all-files/md/MdCheckCircle";

interface SkillBoxProps {
  title: string;
  description: string[];
}

export const SkillBox = ({ title, description }: SkillBoxProps) => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      style={{ borderRadius: "30px", border: `3px solid ${colors.background.light}` }}
    >
      <Box
        style={{backgroundColor: colors.background.light, padding: "8px 24px" }}
      >
        <Text fontFamily="Aggravo" fontSize="18px" fontWeight="500">{title}</Text>
      </Box>
      <Box style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
        {description.map((item, index) => (
          <HStack key={index} align="flex-start" justify="flex-start" gap="12px">
            <Icon key={index} as={MdCheckCircle} color={colors.text.cream} marginTop="4px"/>
            <Text key={index} fontFamily="Pretendard" fontSize="16px" fontWeight="400" style={{ color: colors.text.cream }}>{item}</Text>
          </HStack>
        ))}
      </Box>
    </Box>
  )
}