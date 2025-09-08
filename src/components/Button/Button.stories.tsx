import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  decorators: [ (Story) => <div style={{ width: '300px', height: '300px', backgroundImage: 'linear-gradient(135deg, #0F2027, #203A43, #2C5364)'}}>
    <Story />
    </div>,
  ],
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    label: 'Button',
  },
};