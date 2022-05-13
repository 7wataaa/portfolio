import { Header } from './Header';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  title: 'organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const Index: ComponentStoryObj<typeof Header> = {};
