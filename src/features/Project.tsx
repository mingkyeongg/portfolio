import { Anchor } from "@/components/Anchor/Anchor";
import { FlipCard } from "@/components/FlipCard/FlipCard";
import { PaddedBox } from "@/components/PaddedBox/PaddedBox";
import { ProjectBackCard, ProjectFrontCard } from "@/components/ProjectTemplete/ProjectTemplete";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ProjectType } from "@/types/projects";
import { projectData } from "@/utils/ProjectData";
import { colors } from "@/utils/colors";
import { Box, Grid } from "@chakra-ui/react";

export const Project = () => {
  const isMobile = useIsMobile();
  return (
    <Box
      backgroundColor={colors.background.light}
      width="100%"
      padding="100px 0"
    >
      <PaddedBox>
        <Anchor
          text="PROJECTS"
          href="#projects"
          color={colors.background.dark}
        />
        <Box height="36px" />
        <Box
          height="4px"
          width="100%"
          backgroundColor={colors.background.dark}
        />
        <Box height="36px" />
        <Grid templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"} gap="40px" width="100%" height="100%">
          {projectData.map((project: ProjectType) => (
            <FlipCard
              key={project.id}
              front={<ProjectFrontCard project={project.front} />}
              back={<ProjectBackCard project={project.back} />}
            />
          ))}
        </Grid>
      </PaddedBox>
    </Box>
  );
};
