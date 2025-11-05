"use client";
import { colors } from "@/utils/colors";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { MdBuild } from "@react-icons/all-files/md/MdBuild";
import { MdPerson } from "@react-icons/all-files/md/MdPerson";
import Image from "next/image";

interface ProjectTempleteProps {
  imageSrc: string;
  title: string;
  period: string;
  introduction: string;
  people: string;
  role: string;
  techStack: string;
  content: React.ReactNode;
}

export const ProjectTemplete = ({
  imageSrc,
  title,
  period,
  introduction,
  people,
  role,
  techStack,
  content,
}: ProjectTempleteProps) => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      
      overflow="hidden"
      style={{
        borderRadius: "16px",
        border: `3px solid ${colors.background.dark}`,
      }}
    >
      <Box position="relative" width="100%" height="250px">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
      <Box width="100%" height="2px" backgroundColor={colors.background.dark} />
      <Box
        position="relative"
        zIndex={1}
        width="100%"
        padding="24px"
        display="flex"
        flexDirection="column"
        gap="8px"
      >
        <HStack align="center" justify="flex-start" gap="12px">
          <Text fontFamily="Aggravo" fontSize="24px" fontWeight="600">
            {title}
          </Text>
          <Text fontFamily="Pretendard" fontSize="16px" fontWeight="400" style={{ color: colors.text.gray }}>
            {period}
          </Text>
        </HStack>
        <HStack align="center" justify="flex-start" gap="12px">
          <Box width="4px" height="24px" backgroundColor={colors.text.gray} />
          <Text fontFamily="Pretendard" fontSize="16px" fontWeight="400">
            {introduction}
          </Text>
        </HStack>
        <Box mt="12px">{content}</Box>
        <HStack align="center" justify="flex-start" gap="12px">
          <Icon as={MdPerson} width="20px" height="20px" color={colors.text.gray} />
          <Text fontFamily="Pretendard" fontSize="16px" fontWeight="400">
            {people}
          </Text>
        </HStack>
        <HStack align="center" justify="flex-start" gap="12px">
          <Icon as={MdBuild} width="20px" height="20px" color={colors.text.gray} />
          <Text fontFamily="Pretendard" fontSize="16px" fontWeight="400">
            {role}
          </Text>
        </HStack>
        <Box width="100%"
        height="80px"
        backgroundColor="rgba(255, 221, 87, 0.35)"
        padding="12px 24px"
        borderRadius="12px"
        >
          <Text fontFamily="Pretendard" fontSize="16px" fontWeight="400" style={{ display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",}}>
            {techStack}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};