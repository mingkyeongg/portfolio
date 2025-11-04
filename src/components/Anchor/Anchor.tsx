import { colors } from "@/utils/colors";
import { LinkIcon } from "@chakra-ui/icons";
import { HStack, Icon, Text } from "@chakra-ui/react";

export const Anchor = () => {
  return (
    <HStack
      border={`3px solid ${colors.background.dark}`}
      align="center"
      justify="center"
      width="200px"
      height="80px"
      borderRadius="30px"
      fontFamily="Aggravo"
      fontSize="24px"
    >
      <Icon as={LinkIcon} width="24px" height="24px" fontWeight="bold"s />
      <Text>ABOUT</Text>
    </HStack>
  )
}