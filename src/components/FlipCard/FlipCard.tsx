"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

export const FlipCard = ({ front, back }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest(".no-flip")) {
      return;
    }
    setFlipped((f) => !f);
  };

  return (
    <motion.div
      data-cursor-target="flip"
      onClick={handleClick}
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{
        width: "100%",
        position: "relative",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          width: "100%",
          backfaceVisibility: "hidden",
          borderRadius: "20px",
        }}
      >
        {front}
      </motion.div>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          borderRadius: "20px",
        }}
      >
        {back}
      </motion.div>
    </motion.div>
  );
};