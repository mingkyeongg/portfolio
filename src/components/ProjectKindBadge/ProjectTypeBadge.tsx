import { colors } from "@/utils/colors";
import { Box, Text } from "@chakra-ui/react";

interface ProjectTypeBadgeProps {
  text: "Web" | "Mobile" | "etc";
}

const textMap = {
  Web: "WEB",
  Mobile: "MOBILE",
  etc: "ETC",
};

const colorMap = {
  Web: colors.kind.web,
  Mobile: colors.kind.mobile,
  etc: colors.kind.etc,
};

export const ProjectTypeBadge = ({text}: ProjectTypeBadgeProps) => {
  return (
    <Box
      width="fit-content"
      height="fit-content"
      padding="4px 8px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="4px"
      border="2px solid"
      borderColor={colors.background.dark}
      backgroundColor={colorMap[text]}
      borderRadius="100px"
    >
      <Text fontFamily="var(--font-aggravo-b)" fontSize="12px" fontWeight="700" style={{ color: colors.absolute.white, marginTop: "2px" }}>
        {textMap[text]}
      </Text>
    </Box>
  );
};
