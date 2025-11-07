import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProjectTypeBadge } from './ProjectTypeBadge';

const meta: Meta<typeof ProjectTypeBadge> = {
  title: 'ProjectTypeBadge',
  component: ProjectTypeBadge,
  decorators: [ (Story) => <div style={{ width: '300px', height: '300px'}}>
    <ChakraProvider value={defaultSystem}>
      <Story />
    </ChakraProvider>
    </div>,
  ],
};

export default meta;

export const Default: StoryObj<typeof ProjectTypeBadge> = {
  args: {
    text: 'Web',
  },
};  