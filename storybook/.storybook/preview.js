import React, { useEffect } from 'react'
import { ThemeProvider, useTheme, BlockingSetInitialColorMode, theme } from '@expo/styleguide'
import { Themes } from '@expo/styleguide/dist/components/ThemeProvider';
import '@expo/styleguide/dist/expo-theme.css';

const withTheme = (StoryFn, context) => {
  return (
    <>
    {/* <BlockingSetInitialColorMode /> */}
    <ThemeProvider>
      <StoryWrapper fn={StoryFn} context={context} />
    </ThemeProvider>
    </>
  )
}

const StoryWrapper = ({fn: StoryFn, context}) => {
  const { themeName, setAutoMode, setDarkMode, setLightMode } = useTheme();

  console.log(context.globals.theme)

  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // width: '100vw',
    // height: '100vh',
    bottom: 0,
    overflow: 'auto',
    padding: '1rem',
    background: theme.background.screen
  }

  useEffect(() => {
    if (context.globals.theme === Themes.DARK) {
      console.log('setting dark')
      setDarkMode();
    }
    if (context.globals.theme === Themes.LIGHT) {
      console.log('setting light')
      setLightMode();
    }
  }, [context.globals.theme])

  return (
    <div style={style}>
      <StoryFn />
    </div>
  )

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
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
}

export const decorators = [withTheme]
