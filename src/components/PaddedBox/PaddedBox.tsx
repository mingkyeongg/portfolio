import { Box } from "@chakra-ui/react";

interface PaddedBoxProps {
  children: React.ReactNode;
}

export const PaddedBox = ({ children }: PaddedBoxProps) => {
  return (
    <Box padding="0 15vw">
      {children}
    </Box>
  )
}