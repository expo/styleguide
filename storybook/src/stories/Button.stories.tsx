import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ActivityIcon, theme } from '@expo/styleguide';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Icons/Activity',
  component: ActivityIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ActivityIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ActivityIcon> = (args) => <ActivityIcon color={theme.icon.default} {...args} />;

export const Activity = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Activity.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/wbPwIN1kV7wMgMtwHFvZrZ/Design-System?node-id=1166%3A345",
  },
};

Activity.args = {
  title: 'test'
}