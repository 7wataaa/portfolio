import { Heading } from './Heading';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  title:'atoms/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const Index: ComponentStoryObj<typeof Heading> = {
  args: {
    children: 'Portfolio',
  },
};
