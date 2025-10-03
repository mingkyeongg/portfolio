import { Card } from "@/components/Card/Card";
import { HStack, VStack } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Card>
      <HStack w="100%" h="100%" alignItems="space-between">
        <VStack w="100%" h="100%">Profile</VStack>
      </HStack>
    </Card>
  )
}