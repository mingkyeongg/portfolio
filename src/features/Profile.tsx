import { BigCard } from "@/components/Card/BigCard";
import { Box, HStack, VStack } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Box w="100%" h="100%" backgroundColor="rgba(47, 90, 255, 0.5)">
      <BigCard>
        <HStack w="100%" h="100%" alignItems="space-between">
          <VStack w="100%" h="100%">Profile</VStack>
        </HStack>
      </BigCard>
    </Box>
  )
}