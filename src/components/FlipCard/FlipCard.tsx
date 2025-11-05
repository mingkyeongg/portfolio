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
      onClick={handleClick}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: flipped ? "none" : "auto",
          }}
        >
          {front}
        </motion.div>

        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: flipped ? "auto" : "none",
          }}
        >
          {back}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};