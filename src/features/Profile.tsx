import { Card } from "@/components/Card/Card";
import { HStack, VStack } from "@chakra-ui/react";
import { Header } from "./Landing";

export const Profile = () => {
  return (
    <>
    <Header />
    <Card>
      <HStack w="100%" h="100%" alignItems="space-between">
        <VStack w="100%" h="100%">Profile</VStack>
      </HStack>
    </Card>
    </>
  )
}