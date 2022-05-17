import { Image } from './Image';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  title: 'atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

export const Index: ComponentStoryObj<typeof Image> = {
  args: {
    src: '/works/abcbot/notification.png',
  },
};
