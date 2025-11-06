"use client";
import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "click" | "flip">("default");

  const variants: Variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "rgba(235,235,235,0.9)",
      border: "1px solid rgba(0,0,0,0.2)",
      mixBlendMode: "difference",
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
      },
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(255,255,255,0.7)",
      color: "#000",
      border: "1px solid #fff",
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
      },
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "#ffbcbc",
      scale: 0.9,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
      },
    },
    flip: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(255,255,255,0.7)",
      color: "#000",
      border: "1px solid #fff",
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
      },
    },
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("A") || target.closest("BUTTON") || target.closest('[data-cursor-target="flip"]')) {
        setCursorVariant("hover");
        setCursorText("👀");
      }
    };
    
    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("A") || target.closest("BUTTON")) {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const handleMouseDown = () => setCursorVariant("click");
    const handleMouseUp = () => setCursorVariant("default");

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter); // mouseover 대신 mouseenter가 더 나을 수 있습니다.
    document.addEventListener("mouseout", handleMouseLeave); // mouseout 대신 mouseleave가 더 나을 수 있습니다.
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        fontSize: "14px",
        fontWeight: 500,
        color: "#000",
        zIndex: 9999,
      }}
    >
      {cursorText}
    </motion.div>
  );
};