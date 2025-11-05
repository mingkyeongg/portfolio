"use client";
import { colors } from "@/utils/colors";
import { Box, Text } from "@chakra-ui/react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { MdLink } from "@react-icons/all-files/md/MdLink";
import { MdMoreHoriz } from "@react-icons/all-files/md/MdMoreHoriz";
import Link from "next/link";

interface ProjectLinkBadgeProps {
  text: "Youtube" | "Github" | "Website" | "More";
  href: string;
}

const textMap = {
  Youtube: "영상",
  Github: "GITHUB",
  Website: "바로가기",
  More: "더보기",
};

const iconMap = {
  Youtube: <FaYoutube />,
  Github: <FaGithub />,
  Website: <MdLink />,
  More: <MdMoreHoriz />,
};

export const ProjectLinkBadge = ({text, href}: ProjectLinkBadgeProps) => {
  return (
    <Link href={href}>
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
        <Text fontFamily="Pretendard" fontSize="16px" fontWeight="600">
          {textMap[text]}
        </Text>
      </Box>
    </Link>
  );
};
