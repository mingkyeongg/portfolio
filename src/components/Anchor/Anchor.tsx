"use client";

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
        <Icon as={LinkIcon} width="24px" height="24px" fontWeight="bold" color={color} />
        <Text style={{ fontSize: "18px", marginTop: "4px", color: color }}>{text}</Text>
      </HStack>
    </Link>
  )
}