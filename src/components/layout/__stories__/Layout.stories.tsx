import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Layout from '@/components/layout/Layout';

export default {
  title: 'Components/Layout/Layout',
  component: Layout,
  argTypes: {
    // override React.ReactNode type with this
    // children: {
    // control: { type: 'text' },
    // },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {};
