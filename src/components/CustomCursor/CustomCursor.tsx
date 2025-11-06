"use client";
import { colors } from "@/utils/colors";
import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

interface TargetBounds {
  width: number;
  height: number;
  top: number;
  left: number;
}

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "click" | "highlight" | "text">("default");

  // 타겟 요소 정보 저장
  const [targetBounds, setTargetBounds] = useState<TargetBounds | null>(null);

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
      borderRadius: "50%",
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
      backgroundColor: "rgba(255,255,255,0.1)", 
      mixBlendMode: "normal",
      color: "#000",
      borderRadius: "50%",
      border: `1px solid ${colors.text.gray}`,
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
      borderRadius: "50%",
      backgroundColor: "#ffbcbc",
      scale: 0.9,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28,
      },
    },
    highlight: {
      x: targetBounds?.left ?? mousePosition.x - 32,
      y: targetBounds?.top ?? mousePosition.y - 32,
      height: targetBounds?.height ?? 64,
      width: targetBounds?.width ?? 64,
      backgroundImage: "linear-gradient(135deg, rgba(180, 200, 255, 0.15), rgba(200, 180, 255, 0.15))",
      mixBlendMode: "normal",
      border: `1px solid ${colors.text.gray}`,
      borderRadius: "6px",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    text: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 12, 
    
      height: 24,
      width: 4,
      
      backgroundColor: "rgba(235,235,235,0.9)",
      mixBlendMode: "difference",
      borderRadius: "2px",
      border: "none",
      scale: 1,
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

    const handleMouseDown = () => setCursorVariant("click");
    const handleMouseUp = () => setCursorVariant("default");

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const highlightTarget = target.closest(
        '[data-cursor-target="highlight"]'
      );
      if (highlightTarget) {
        setCursorVariant((prev) => {
          if (prev === "highlight") return prev;
          
          const rect = highlightTarget.getBoundingClientRect();
          setTargetBounds({
            width: rect.width + 8,
            height: rect.height + 8,
            top: rect.top - 4,
            left: rect.left - 4,
          });
          return "highlight";
        });
        return;
      }

      const hoverTarget = target.closest(
        'A, BUTTON, [data-cursor-target="flip"]'
      );

      if (hoverTarget) {
        setCursorVariant((prev) => {
          if (prev === "hover") return prev;
          return "hover";
        });
      }

      const textTarget = target.closest(
        'P, SPAN, [data-cursor-target="text"]'
      );
      if (textTarget) {
        setCursorVariant((prev) => {
          if (prev === "text") return prev;
          return "text";
        });
        return;
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      
      if (!(target instanceof Element)) return;

      const currentTarget = target.closest(
        '[data-cursor-target="highlight"], A, BUTTON, [data-cursor-target="flip"]'
      );
      let nextTarget = null;
      if (relatedTarget instanceof Element) {
        nextTarget = relatedTarget.closest(
          '[data-cursor-target="highlight"], A, BUTTON, [data-cursor-target="flip"]'
        );
      }

      if (currentTarget && !nextTarget) {
        setCursorVariant("default");
        setCursorText("");
        setTargetBounds(null);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
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