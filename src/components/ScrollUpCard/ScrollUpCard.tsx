import { colors } from "@/utils/colors";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollUpCardProps {
  children: React.ReactNode;
}
export const ScrollUpCard = ({ children }: ScrollUpCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 0, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.background.light,
        borderRadius: "30px",
        margin: "-30px auto",
        display: "flex",
        padding: "50px",
        fontWeight: 600,
        flexDirection: "column",
      }}
    >
      {children}
    </motion.div>
  )
}