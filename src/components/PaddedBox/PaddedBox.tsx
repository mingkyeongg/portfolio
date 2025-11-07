import { Box } from "@chakra-ui/react";

export const PaddedBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box padding="0 15vw">
      {children}
    </Box>
  )
}