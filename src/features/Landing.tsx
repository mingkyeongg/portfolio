"use client";
import { colors } from "@/utils/colors";
import styled from "@emotion/styled";
import { motion, MotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";
import { Header } from "./Header";

const UpText = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const text = 'PORTFOLIO';
  const letter = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    style={{
      fontSize: '14vw',
      fontWeight: 'medium',
      fontFamily: 'Aggravo',
      color: colors.text.cream,
      opacity: scrollYProgress.get(),
      translateY: scrollYProgress.get(),
    }}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} style={{ display: 'inline-block' }} variants={letter} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: index * 0.1 }}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const BouncingCircles = () => {
  const circles = [1, 2, 3];
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: '20px',
      }}
    >
      {circles.map((circle) => (
        <motion.div
          key={circle}
          style={{
            width: '4vw',
            height: '4vw',
            borderRadius: '50%',
            backgroundColor: colors.text.cream,
          }}
          whileHover={{
            y: -25,
            scale: 1.05,
            boxShadow: '0 15px 25px rgba(0,0,0,0.3)',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 15,
          }}
        />
      ))}
    </div>
  );
};

export const Landing = () => {

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log(latest * 100);
  });

  return (
    <LandingContainer ref={sectionRef}>
      <Header />
      <LandingContent>
        <BouncingCircles />
        <LandingContentText>
          <UpText scrollYProgress={scrollYProgress} />
        </LandingContentText>
      </LandingContent>
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  position: relative;
  background-color: ${colors.background.dark};
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;


const LandingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
  width: 100%;
  gap: 10vh;
`; 

const LandingContentText = styled.span`
  font-size: ;
  font-weight: medium;
  font-size: 15vw;
  color: ${colors.text.cream};
  font-family: 'Aggravo';
`;