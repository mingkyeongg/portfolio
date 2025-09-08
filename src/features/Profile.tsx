import { Card } from "@/components/Card/Card";
import { HStack, Image, VStack } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Card>
      <HStack w="100%" h="100%" alignItems="space-between">
        <Image src="/images/profile.jpg" alt="profile" width={100} height={100} borderRadius="full" />
        <VStack w="100%" h="100%">Profile</VStack>
      </HStack>
    </Card>
  )
}