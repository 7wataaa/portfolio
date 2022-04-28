import { ContactLink } from './ContactLink';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  title:'atoms/ContactLink',
  component: ContactLink,
} as ComponentMeta<typeof ContactLink>;

export const Index: ComponentStoryObj<typeof ContactLink> = {
  args: {
    href: 'https://example.com',
    children: 'example link',
  },
};
