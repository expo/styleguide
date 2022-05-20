import { themes } from '@storybook/theming';

import { darkTheme, lightTheme } from "../../packages/styleguide/src";

import "../assets/customizations.css";
import "../assets/expo-theme.css";

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Expo theme toggler',
    defaultValue: 'light',
    toolbar: {
      items: ['light', 'dark'],
      showName: true,
    },
  },
};

export const parameters = {
  docs: {
    theme: themes.dark,
  },
  backgrounds: {
    disable: true,
    grid: {
      disable: true,
    }
  }
}

const withTheme = (Story, context) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: context.globals.theme === 'dark' ? darkTheme.background.default : lightTheme.background.default,
    color: context.globals.theme === 'dark' ? darkTheme.text.default : lightTheme.text.default,
    padding: 32,
    marginTop: -30,
    marginBottom: -30,
    marginLeft: -20,
    marginRight: -20,
  }}>
    <Story {...context} />
  </div>
);

export const decorators = [withTheme];