import { SkillHeading } from './SkillHeading';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  title: 'atoms/SkillHeading',
  component: SkillHeading,
} as ComponentMeta<typeof SkillHeading>;

export const Index: ComponentStoryObj<typeof SkillHeading> = {
  args: {
    children: 'TypeScript',
  },
};
