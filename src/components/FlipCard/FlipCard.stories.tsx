import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProjectFrontCard } from '../ProjectTemplete/ProjectTemplete';
import { FlipCard } from './FlipCard';

const meta: Meta<typeof FlipCard> = {
  title: 'FlipCard',
  component: FlipCard,
  decorators: [ (Story) => <div style={{ width: '900px', height: '600px', overflow: 'visible'}}>
    <ChakraProvider value={defaultSystem}>
      <Story />
    </ChakraProvider>
    </div>,
  ],
};

export default meta;

export const Default: StoryObj<typeof FlipCard> = {
  args: {
    front: <>
    <ProjectFrontCard
    project={{
      imageSrc: "/images/projects/hearo-main.png",
      title: "Hearo",
      period: "2025.04 - 2025.11",
      introduction: "청각 제약 상황을 위한 실내 소리 인식 및 상황감지 시스템",
      people: "3명",
      projectType: "etc",
      projectLinkBadges: [
        {text: "Youtube", href: "https://www.youtube.com/watch?v=bWdz_H-KRW0&t=1s"},
        {text: "Github", href: "https://github.com/orgs/Project-Hearo/repositories"},
        {text: "Website", href: "https://www.website.com"},
        {text: "More", href: "https://www.more.com"},
      ],
      role: "앱 & 로봇 개발자",
      techStack: "iOS (XCode), Swift, ROS2 Humble, Raspberry pi 5, Python, C++, Mosquitto",
    }}  
    />  
    </>
    ,
    back: <div style={{ backgroundColor: "#2C2C2E", color: "#FFFDEE" }}>
    <h1>Back</h1>
    </div>
    },
};