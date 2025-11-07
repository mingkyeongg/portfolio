"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { colors } from "@/utils/colors";
import { LinkIcon } from "@chakra-ui/icons";
import { HStack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";

interface AnchorProps {
  text: string;
  href: string;
  color?: string;
}

export const Anchor = ({ text, href, color = colors.background.dark }: AnchorProps) => {
  const isMobile = useIsMobile();
  return (
    <Link href={href}>
      <HStack
        border={`3px solid ${color}`}
        align="center"
        justify="center"
        borderRadius="30px"
        fontFamily="Aggravo"
        padding="10px 20px"
        width="fit-content"
        >
        <Icon as={LinkIcon} width={isMobile ? "20px" : "24px"} height={isMobile ? "20px" : "24px"} fontWeight="bold" color={color} />
        <Text style={{ fontSize: isMobile ? "14px" : "18px", marginTop: "4px", color: color }}>{text}</Text>
      </HStack>
    </Link>
  )
}