import { Anchor } from "@/components/Anchor/Anchor";
import { ProjectTemplete } from "@/components/ProjectTemplete/ProjectTemplete";
import { colors } from "@/utils/colors";
import { Box, Grid, Text } from "@chakra-ui/react";

export const Project = () => {
  return (
    <Box backgroundColor={colors.background.light} width="100%" height="100%" padding="50px">
      <Anchor text="PROJECTS" href="#projects" color={colors.background.dark} />
      <Box height="36px" />
      <Box height="4px" width="100%" backgroundColor={colors.background.dark} />
      <Box height="36px" />
      <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" gap="24px">

      <Grid templateColumns="repeat(2, 1fr)" gap="24px" width="100%">
        <ProjectTemplete imageSrc="/images/projects/hearo-main.png" title="Hearo" period="2021.01.01 - 2021.01.01" introduction="Project 1 Description" content={
        <Text fontFamily="Pretendard" fontSize="16px" fontWeight="400" style={{ color: colors.text.black }}>부산대학교 2025 학년도 전기 졸업과제로 진행한 프로젝트입니다.
          진해노인종합복지관 202명의 설문조사로 요구사항을 도출하여 
          기능 정의에 활용하였습니다.</Text>
      } people="2명" role="프론트엔드 개발자" techStack="React, Next.js, TypeScript, Tailwind CSS, Redux, Redux Toolkit, React Router, React Query, React Hook Form, React Testing Library, Jest, React Testing Library, Jest, React Testing Library, Jest" />
      <ProjectTemplete imageSrc="/images/projects/hearo-main.png" title="Hearo" period="2021.01.01 - 2021.01.01" introduction="Project 1 Description" content={
        <Text fontFamily="Pretendard" fontSize="16px" fontWeight="400" style={{ color: colors.text.black }}>부산대학교 2025 학년도 전기 졸업과제로 진행한 프로젝트입니다.
          진해노인종합복지관 202명의 설문조사로 요구사항을 도출하여 
          기능 정의에 활용하였습니다.</Text>
      } people="2명" role="프론트엔드 개발자" techStack="iOS (XCode), Swift, ROS2 Humble, Raspberry pi 5
Python, C++, Mosquitto" />
      </Grid>
      </Box>
    </Box>
  )
}