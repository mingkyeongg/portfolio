"use client";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface BigCardProps {
  children: React.ReactNode;
}

export const BigCard = ({ children }: BigCardProps) => {
  return (
    <CardWrapper>
      <motion.div
        className="card"
        initial={{ opacity: 0, scale: 0.5, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </CardWrapper>
  );
};

const CardWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .card {
    background: white;
    border-radius: 24px;
    padding: 60px;
    width: 95vw;
    height: 95vh;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    text-align: center;

    /* 내부 콘텐츠가 넘칠 경우 스크롤 */
    overflow-y: auto;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 16px;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #333;
  }
`;