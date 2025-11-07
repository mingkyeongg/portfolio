import { colors } from "@/utils/colors";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { MdCheckCircle } from "@react-icons/all-files/md/MdCheckCircle";

interface SkillBoxProps {
  title: string;
  description: string[];
}

export const SkillBox = ({ title, description }: SkillBoxProps) => {
  return (
    <Box position="relative">
      <Box
        style={{
          position: "absolute",
          top: "6px",
          left: "6px",
          width: "100%",
          height: "100%",
          backgroundColor: colors.background.light,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      style={{ border: `2px solid ${colors.background.light}`, backgroundColor: colors.background.dark }}
      position="relative"
      zIndex={1}
    > 
      <Box
        style={{backgroundColor: colors.background.light, padding: "8px 24px", zIndex: 1 }}
      >
        <Text fontFamily="Aggravo" fontSize="18px" fontWeight="500">{title}</Text>
      </Box>
      <Box style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: "4px", zIndex: 1, backgroundColor: colors.background.dark }}>
        {description.map((item, index) => (
          <HStack key={index} align="flex-start" justify="flex-start" gap="12px">
            <Icon key={index + "check"} as={MdCheckCircle} color={colors.text.cream} marginTop="4px"/>
            <Text key={index + "text"} fontFamily="Pretendard" fontSize="16px" fontWeight="400" style={{ color: colors.text.cream }}>{item}</Text>
          </HStack>
        ))}
      </Box>
      </Box>
    </Box>
  )
}