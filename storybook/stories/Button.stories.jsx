import React from 'react';

import { borderRadius, spacing, lightTheme, darkTheme, typography } from '../../packages/styleguide/src';

const Button = ({ buttonTheme, globalTheme }) => {
  const currentTheme = globalTheme === 'light' ? lightTheme : darkTheme;
  return (
    <button style={{
      ...typography.fontSizes[16],
      borderRadius: borderRadius.small,
      padding: `${spacing[1]}px ${spacing[5]}px`,
      backgroundColor: currentTheme.button[buttonTheme].background,
      color: currentTheme.button[buttonTheme].foreground,
      border: currentTheme.button[buttonTheme].border || 0,
    }}>
      Test Button
    </button>
  );
};

export default {
  title: 'Components/Button',
  argTypes: {
    buttonTheme: {
      options: ['primary', 'secondary', 'tertiary', 'transparent', 'ghost'],
      control: { type: 'select' },
    },
  },
};

const Template = (args, { globals: { theme }}) => <Button globalTheme={theme} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonTheme: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonTheme: 'secondary'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  buttonTheme: 'tertiary'
};

export const Transparent = Template.bind({});
Transparent.args = {
  buttonTheme: 'transparent'
};

export const Ghost = Template.bind({});
Ghost.args = {
  buttonTheme: 'ghost'
};