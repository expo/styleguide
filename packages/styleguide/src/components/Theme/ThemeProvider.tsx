import React, { createContext, useEffect, useState, useContext, ReactNode } from 'react';

import { getInitialColorMode, isLocalStorageAvailable } from './BlockingSetInitialColorMode';

export enum Themes {
  AUTO = 'auto',
  DARK = 'dark',
  LIGHT = 'light',
}

const ThemeContext = createContext({
  setDarkMode: () => {},
  setLightMode: () => {},
  setAutoMode: () => {},
  prefersDarkMode: false,
  themeName: Themes.AUTO,
});

type ThemeProviderProps = {
  children: ReactNode;
  disabled?: boolean;
};

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, disabled = false } = props;
  let initialTheme = Themes.AUTO;

  if ((process as any).browser) {
    if (document.documentElement.classList.contains('dark-theme')) {
      initialTheme = Themes.DARK;
    } else {
      initialTheme = Themes.LIGHT;
    }
  }

  const [themeName, setThemeName] = useState(disabled ? Themes.LIGHT : initialTheme);
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);

  useEffect(function didMount() {
    if (disabled) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setPrefersDarkMode(mediaQuery.matches);

    try {
      mediaQuery.addEventListener('change', onThemeChange);
    } catch {
      // Fallback to old-style listening for changes, for Safari and IE
      mediaQuery.addListener(onThemeChange);
    }

    if (isLocalStorageAvailable()) {
      const themePreference = window.localStorage.getItem('data-expo-theme');

      if (themePreference === Themes.LIGHT || themePreference === Themes.DARK) {
        setThemeName(themePreference);
      } else {
        setThemeName(Themes.AUTO);
      }
    } else {
      setThemeName(Themes.AUTO);
    }

    return function unMount() {
      try {
        mediaQuery.removeEventListener('change', onThemeChange);
      } catch {
        // Fallback to old-style listening for changes, for Safari and IE
        mediaQuery.removeListener(onThemeChange);
      }
    };
  }, []);

  function setDocumentTheme(themeName: Themes) {
    if (disabled) return;

    if (themeName === Themes.DARK) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }

  function onThemeChange(event: MediaQueryListEvent | MediaQueryList) {
    if (isLocalStorageAvailable()) {
      const themePreference = window.localStorage.getItem('data-expo-theme');

      if (!themePreference) {
        if (event.matches) {
          setDocumentTheme(Themes.DARK);
        } else {
          setDocumentTheme(Themes.LIGHT);
        }
      }
    } else {
      setDocumentTheme(Themes.AUTO);
    }

    setPrefersDarkMode(event.matches);
  }

  function setDarkMode() {
    if (isLocalStorageAvailable()) {
      window.localStorage.setItem('data-expo-theme', Themes.DARK);
    }
    setDocumentTheme(Themes.DARK);
    setThemeName(Themes.DARK);
  }

  function setLightMode() {
    if (isLocalStorageAvailable()) {
      window.localStorage.setItem('data-expo-theme', Themes.LIGHT);
    }
    setDocumentTheme(Themes.LIGHT);
    setThemeName(Themes.LIGHT);
  }

  function setAutoMode() {
    if (isLocalStorageAvailable()) {
      window.localStorage.removeItem('data-expo-theme');
    }

    const themeName = getInitialColorMode() as Themes;
    setDocumentTheme(themeName);
    setThemeName(Themes.AUTO);
  }

  return (
    <ThemeContext.Provider
      value={{
        setDarkMode,
        setLightMode,
        setAutoMode,
        prefersDarkMode,
        themeName,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
