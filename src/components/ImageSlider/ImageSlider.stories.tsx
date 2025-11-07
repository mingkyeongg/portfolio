import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ImageSlider } from './ImageSlider';

const meta: Meta<typeof ImageSlider> = {
  title: 'ImageSlider',
  component: ImageSlider,
  decorators: [ (Story) => <div style={{ width: '400px', height: '400px'}}>
    <ChakraProvider value={defaultSystem}>
      <Story />
    </ChakraProvider>
  </div>,
  ],
};

export default meta;
export const Default: StoryObj<typeof ImageSlider> = {  args: {
  images: [
    '/images/projects/hearo-main.png',
    '/images/projects/hearo-main.png',
    '/images/projects/hearo-main.png',
    '/images/projects/hearo-main.png',
  ],
}, };