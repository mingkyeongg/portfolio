import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProjectLinkBadge } from './ProjectLinkBadge';

const meta: Meta<typeof ProjectLinkBadge> = {
  title: 'ProjectLinkBadge',
  component: ProjectLinkBadge,
  decorators: [ (Story) => <div style={{ width: '300px', height: '300px'}}>
    <ChakraProvider value={defaultSystem}>
      <Story />
    </ChakraProvider>
    </div>,
  ],
};

export default meta;

export const Default: StoryObj<typeof ProjectLinkBadge> = {
  args: {
    text: 'Youtube',
    href: 'https://www.youtube.com',
  },
};

export const More: StoryObj<typeof ProjectLinkBadge> = {
  args: {
    text: 'More',
    href: 'https://www.google.com',
  },
  
};