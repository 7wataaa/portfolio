import { SkillBox } from './SkillBox';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Center, HStack, VStack, Text } from '@chakra-ui/react';
import { SkillHeading } from './SkillHeading';

export default {
  title: 'atoms/SkillBox',
  component: SkillBox,
} as ComponentMeta<typeof SkillBox>;

export const Index: ComponentStoryObj<typeof SkillBox> = {
  args: {
    boxName: 'Languages',
  },
};
