"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import { colors } from "@/utils/colors";
import { Box, Text } from "@chakra-ui/react";
import { FaAppStore } from "@react-icons/all-files/fa/FaAppStore";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { MdLink } from "@react-icons/all-files/md/MdLink";
import { MdMoreHoriz } from "@react-icons/all-files/md/MdMoreHoriz";
import Link from "next/link";

interface ProjectLinkBadgeProps {
  text: "Youtube" | "Github" | "Website" | "More" | "AppStore";
  href: string;
}

const textMap = {
  Youtube: "영상",
  Github: "GITHUB",
  Website: "바로가기",
  More: "더보기",
  AppStore: "앱스토어",
};

const iconMap = {
  Youtube: <FaYoutube />,
  Github: <FaGithub />,
  Website: <MdLink />,
  More: <MdMoreHoriz />,
  AppStore: <FaAppStore />,
};

export const ProjectLinkBadge = ({text, href}: ProjectLinkBadgeProps) => {
  const isMobile = useIsMobile();
  return (
    <Link href={href} target="_blank">
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
        borderRadius="100px"
      >
        {iconMap[text]}
        <Text fontFamily="Pretendard" fontSize={isMobile ? "14px" : "16px"} fontWeight="600">
          {textMap[text]}
        </Text>
      </Box>
    </Link>
  );
};
