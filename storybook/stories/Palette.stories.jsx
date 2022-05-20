import React from 'react';

import { borderRadius, palette, shadows } from '../../packages/styleguide/src';

export default {
  title: 'Theme/Palette',
  argTypes: {
    colorName: {
      options: ['primary', 'gray', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'purple'],
      control: { type: 'select' },
    },
  },
};

const Palette = ({ title, colors }) => {
  return (
    <div>
      {colors.map(({ key, color }) => (
        <div style={{
          display: 'inline-block',
          minWidth: '10%',
          textAlign: 'center'
        }} key={`swatch-${key}-${color}`}>
          <div style={{
            width: 64,
            height: 64,
            margin: 4,
            borderRadius: borderRadius.medium,
            boxShadow: shadows.micro,
            backgroundColor: color,
          }} />
          <small>{title}<br/>{key}</small>
        </div>
      ))}
    </div>
  )
}

const Template = ({ colorName }, { globals: { theme }}) => {
  return palette[theme][colorName] ? (
    <Palette
      title={colorName}
      colors={[...Array(10).keys()].map(key => ({
        key: `${key}00`,
        color: palette[theme][colorName][`${key}00`],
      }))}
    />
  ) : undefined;
}

export const Primary = Template.bind({});
Primary.args = {
  colorName: 'primary'
}

export const Gray = Template.bind({});
Gray.args = {
  colorName: 'gray'
}

export const Blue = Template.bind({});
Blue.args = {
  colorName: 'blue'
}

export const Green = Template.bind({});
Green.args = {
  colorName: 'green'
}

export const Yellow = Template.bind({});
Yellow.args = {
  colorName: 'yellow'
}

export const Orange = Template.bind({});
Orange.args = {
  colorName: 'orange'
}

export const Red = Template.bind({});
Red.args = {
  colorName: 'red'
}

export const Pink = Template.bind({});
Pink.args = {
  colorName: 'pink'
}

export const Purple = Template.bind({});
Purple.args = {
  colorName: 'purple'
}