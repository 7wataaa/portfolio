import { WorkDescription } from './WorkDescription';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import i from '../../texts/ja.json';

export default {
  title: 'organisms/WorkDescription',
  component: WorkDescription,
} as ComponentMeta<typeof WorkDescription>;

export const Index: ComponentStoryObj<typeof WorkDescription> = {
  args: {
    data: i.WORKS.ABCBOT,
  },
};
