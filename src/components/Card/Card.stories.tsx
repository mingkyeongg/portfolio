import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  decorators: [ (Story) => <div style={{ width: '300px', height: '300px', backgroundImage: 'linear-gradient(135deg, #0F2027, #203A43, #2C5364)'}}>
    <Story />
    </div>,
  ],
};

export default meta;

export const Default: StoryObj<typeof Card> = {
  args: {
    children: <div>Card</div>,
  },
};