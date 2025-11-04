"use client";
import { Anchor } from "@/components/Anchor/Anchor";
import { colors } from "@/utils/colors";
import styled from "@emotion/styled";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ScrollUpCard = () => {
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
        padding: "30px",
        fontWeight: 600,
      }}
    >
      <Anchor />
    </motion.div>
  );
};

export const Profile = () => {
  return (
  <Container>
    <ScrollUpCard />
  </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;
`;  