import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FlipCard } from './FlipCard';

const meta: Meta<typeof FlipCard> = {
  title: 'FlipCard',
  component: FlipCard,
  decorators: [(Story) => (
    <div style={{ width: '900px', height: '600px', overflow: 'visible' }}>
      <ChakraProvider value={defaultSystem}>
        <Story />
      </ChakraProvider>
    </div>
  )],
};

export default meta;

export const Default: StoryObj<typeof FlipCard> = {
  args: {
    front: (
      <div style={{ width: '100%', height: '100%', background: '#111112', color: '#EDE8DF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Front
      </div>
    ),
    back: (
      <div style={{ width: '100%', height: '100%', background: '#2C2C2E', color: '#EDE8DF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Back
      </div>
    ),
  },
};