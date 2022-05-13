import { SkillList } from './SkillList';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  title: 'molecules/SkillList',
  component: SkillList,
} as ComponentMeta<typeof SkillList>;

export const Index: ComponentStoryObj<typeof SkillList> = {
  args: {
    skillList: ['Express.js', 'Next.js', 'Prisma DB'],
  },
};
