import { LinkButton } from './LinkButton';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  title: 'atoms/LinkButton',
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

export const Index: ComponentStoryObj<typeof LinkButton> = {
  args: {},
};
