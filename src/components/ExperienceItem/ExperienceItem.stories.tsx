import { experienceData } from '@/utils/ExprienceData';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ExperienceItem } from './ExperienceItem';

const meta: Meta<typeof ExperienceItem> = {
  title: 'ExperienceItem',
  component: ExperienceItem,
  decorators: [ (Story) => <div style={{ width: '100%', height: '100%', overflow: 'visible'}}>
    <ChakraProvider value={defaultSystem}>
      <Story />
    </ChakraProvider>
    </div>,
  ],
};

export default meta;

export const Default: StoryObj<typeof ExperienceItem> = {
  args: {
    experience: experienceData[0],
  },
};