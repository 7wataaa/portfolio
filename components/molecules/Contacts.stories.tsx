import { Contacts } from './Contacts';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  title: 'molecules/Contacts',
  component: Contacts,
} as ComponentMeta<typeof Contacts>;

export const Index: ComponentStoryObj<typeof Contacts> = {
  args: {
    items: [
      {
        itemName: 'GitHub',
        urlLabel: '@7wataaa',
        url: 'https://github.com/7wataaa',
      },
      {
        itemName: 'Email',
        urlLabel: '7wataaa@gmail.com',
        url: 'mailto:7wataaa@gmail.com',
      },
    ],
  },
};
