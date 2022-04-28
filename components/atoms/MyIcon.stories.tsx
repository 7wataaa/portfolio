import { MyIcon } from './MyIcon';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  title: 'atoms/MyIcon',
  component: MyIcon,
} as ComponentMeta<typeof MyIcon>;

export const Index: ComponentStoryObj<typeof MyIcon> = {
  args: {},
};
