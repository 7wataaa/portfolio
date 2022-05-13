import { SkillListWithDescription } from './SkillListWithDescription';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  title: 'molecules/SkillListWithDescription',
  component: SkillListWithDescription,
} as ComponentMeta<typeof SkillListWithDescription>;

export const Index: ComponentStoryObj<typeof SkillListWithDescription> = {
  args: {
    skillData: [
      {
        skillName: 'Git/GitHub',
        description: 'Actionsを利用したCI/CDができる程度',
      },
      {
        skillName: 'Docker',
        description: 'Docker-composeを使い自由に環境を作れる程度',
      },
      {
        skillName: 'Adobe XD',
        description: 'アプリのモックアップを作ることができる程度',
      },
      {
        skillName: 'Atomic Design',
        description: '勉強中、このポートフォリオ制作で使用',
      },
      {
        skillName: 'Storybook',
        description: 'このポートフォリオ制作で使用',
      },
    ],
  },
};
