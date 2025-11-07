"use client";
import { ProjectBackType, ProjectFrontType } from "@/types/projects";
import { colors } from "@/utils/colors";
import { Box, HStack, Icon, List, Text } from "@chakra-ui/react";
import { MdBuild } from "@react-icons/all-files/md/MdBuild";
import { MdPerson } from "@react-icons/all-files/md/MdPerson";
import Image from "next/image";
import { ImageSlider } from "../ImageSlider/ImageSlider";
import { ProjectTypeBadge } from "../ProjectKindBadge/ProjectTypeBadge";
import { ProjectLinkBadge } from "../ProjectLinkBadge/ProjectLinkBadge";

interface ProjectFrontCardProps {
  project: ProjectFrontType;
}

export const ProjectFrontCard = ({project}: ProjectFrontCardProps) => {
  const {
    imageSrc,
    title,
    period,
    introduction,
    people,
    role,
    techStack,
    projectType,
    projectLinkBadges,
  } = project;
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
        border: `2px solid ${colors.background.dark}`,
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
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
        backgroundColor={colors.background.light}
        gap="8px"
      >
        {Array.isArray(projectType) ? (
          projectType.map((type) => (
            <ProjectTypeBadge
              key={type}
              text={type as "Web" | "Mobile" | "etc"}
            />
          ))
        ) : (
          <ProjectTypeBadge text={projectType as "Web" | "Mobile" | "etc"} />
        )}
        <HStack align="center" justify="flex-start" gap="12px">
          <Text fontFamily="Aggravo" fontSize="24px" fontWeight="600">
            {title}
          </Text>
          <Text
            fontFamily="Pretendard"
            fontSize="16px"
            fontWeight="400"
            style={{color: colors.text.gray}}
          >
            {period}
          </Text>
        </HStack>
        <HStack align="center" justify="flex-start" gap="12px">
          <Box
            width="4px"
            height="24px"
            backgroundColor={colors.background.dark}
          />
          <Text fontFamily="Pretendard" fontSize="16px" fontWeight="400">
            {introduction}
          </Text>
        </HStack>
        <HStack align="center" justify="flex-start" gap="12px">
          <Icon
            as={MdPerson}
            width="20px"
            height="20px"
            color={colors.text.gray}
          />
          <Text fontFamily="Pretendard" fontSize="16px" fontWeight="400">
            {people}
          </Text>
        </HStack>
        <HStack align="center" justify="flex-start" gap="12px">
          <Icon
            as={MdBuild}
            width="20px"
            height="20px"
            color={colors.text.gray}
          />
          <Text fontFamily="Pretendard" fontSize="16px" fontWeight="400">
            {role}
          </Text>
        </HStack>
        <Box
          width="100%"
          height="80px"
          backgroundColor="rgba(255, 221, 87, 0.35)"
          padding="12px 24px"
          borderRadius="12px"
        >
          <Text
            fontFamily="Pretendard"
            fontSize="16px"
            fontWeight="400"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {techStack}
          </Text>
        </Box>
        <Box
          width="100%"
          height="fit-content"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          gap="12px"
        >
          {projectLinkBadges.map((badge) => (
            <ProjectLinkBadge
              key={badge.text}
              text={badge.text}
              href={badge.href}
            />
          ))}
        </Box>
      </Box>
      <Box
        position="absolute"
        top="4px"
        left="4px"
        width="100%"
        height="100%"
        backgroundColor={colors.background.dark}
        zIndex={-1}
      />
    </Box>
  );
};

interface ProjectBackCardProps {
  project: ProjectBackType;
}

export const ProjectBackCard = ({project}: ProjectBackCardProps) => {
  const {images, content, implementation} = project;
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      backgroundColor={colors.background.light}
      border={`2px solid ${colors.background.dark}`}
      boxShadow="0 6px 15px rgba(0,0,0,0.15)"
    >
      <Box
        width="100%"
        height="250px"
        borderBottom={`2px solid ${colors.background.dark}`}
        overflow="hidden"
      >
        <ImageSlider images={images} />
      </Box>

      <Box width="100%" px="24px" py="16px">
        <Text fontFamily="Aggravo" fontSize="18px" fontWeight="600" mb="8px">
          프로젝트 개요
        </Text>
        <Box fontFamily="Pretendard" fontSize="15px" fontWeight="400">
          {content.map((item) => (
            <Text key={item}>{item}</Text>
          ))}
        </Box>
      </Box>
      <Box width="100%" px="24px" py="16px" bg="white">
        <Text fontFamily="Aggravo" fontSize="18px" fontWeight="600" mb="8px">
          구현 내용
        </Text>
        <Box padding="0 12px">
          <List.Root>
            {implementation.map((item) => (
              <List.Item key={item}>{item}</List.Item>
            ))}
          </List.Root>
        </Box>
      </Box>
      <Box
        position="absolute"
        top="4px"
        left="4px"
        width="100%"
        height="100%"
        backgroundColor={colors.background.dark}
        zIndex={-1}
      />
    </Box>
  );
};
