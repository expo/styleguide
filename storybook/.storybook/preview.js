import React from 'react'
import { theme } from '@expo/styleguide'
import { Themes } from '@expo/styleguide/dist/components/ThemeProvider';
import '@expo/styleguide/dist/expo-theme.css';

const withTheme = (StoryFn, context) => {
  const base = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0, 
    right:0,
    overflow: 'auto',
    padding: '1rem',
    background: theme.background[context.globals.background]
  }

  const styleLeft = {
    ...base,
    marginRight: '50%',
  }

  const styleRight = {
    ...base,
    marginLeft: '50%',
  }

  switch (context.globals.theme) {
    case Themes.LIGHT:
    case Themes.DARK:
      return (<div data-expo-theme={context.globals.theme} style={base}>
        <StoryFn />
      </div>)
    case 'side-by-side':
      return (
        <>
        <div data-expo-theme='dark' style={styleLeft}>
          <StoryFn />
        </div>
        <div data-expo-theme='light' style={styleRight}>
          <StoryFn />
        </div>
        </>
      )
    default:
      return <div/>
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: Themes.LIGHT, icon: 'circlehollow', title: 'light' },
        { value: Themes.DARK, icon: 'circle', title: 'dark' },
        { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
  background: {
    name: 'Background',
    description: 'Background for components',
    defaultValue: 'default',
    toolbar: {
      items: [
        { value: 'default', title: 'default'},
        { value: 'screen', title: 'screen'},
        { value: 'secondary', title: 'secondary'},
        { value: 'tertiary', title: 'tertiary'},
        { value: 'quaternary', title: 'quaternary'},
        { value: 'error', title: 'error'},
        { value: 'warning', title: 'warning'},
        { value: 'success', title: 'success'},
        { value: 'overlay', title: 'overlay'}
      ],
      showName: true
    }
  }
}

export const decorators = [withTheme]
