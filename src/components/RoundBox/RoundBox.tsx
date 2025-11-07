import { motion } from "framer-motion";

interface RoundBoxProps {
  children: React.ReactNode;
  color: string;
}

export const RoundBox = ({ children, color }: RoundBoxProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)", }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        border: `3px solid ${color}`,
        borderRadius: "30px",
        padding: "16px 24px",
      }}
    >
        {children}
    </motion.div>
  )
}