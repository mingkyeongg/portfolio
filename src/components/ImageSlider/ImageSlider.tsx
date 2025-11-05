"use client";
import { Box, Button, HStack } from "@chakra-ui/react";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ImageSliderProps {
  images: string[];
}

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const [visible, setVisible] = useState(0);
  const [isBack, setIsBack] = useState(false);

  const next = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsBack(false);
    setVisible((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsBack(true);
    setVisible((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const variants = {
    enter: (isBack: boolean) => ({
      x: isBack ? -100 : 100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (isBack: boolean) => ({
      x: isBack ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <Box
      className="no-flip"
      width="100%"
      height="100%"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <AnimatePresence custom={isBack} mode="wait">
        <motion.div
          className="no-flip"
          key={visible}
          custom={isBack}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1000,
          }}
        >
          <Image
            className="no-flip"
            src={images[visible]}
            alt={`slide-${visible}`}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </motion.div>
      </AnimatePresence>

      <HStack
        className="no-flip"
        position="absolute"
        width="100%"
        justifyContent="space-between"
        px="16px"
        zIndex={1001}
      >
        <Button
          className="no-flip"
          onClick={prev}
          borderRadius="full"
          size="sm"
          backgroundColor="rgba(0,0,0,0.6)"
          _hover={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        >
          <FaArrowLeft className="no-flip"/>
        </Button>
        <Button
          className="no-flip"
          onClick={next}
          borderRadius="full"
          size="sm"
          backgroundColor="rgba(0,0,0,0.6)"
          _hover={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        >
          <FaArrowRight className="no-flip"/>
        </Button>
      </HStack>
    </Box>
  );
};