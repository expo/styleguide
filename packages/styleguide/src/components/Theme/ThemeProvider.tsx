import React, { createContext, useEffect, useState, useContext, ReactNode } from 'react';

import { getInitialColorMode, isLocalStorageAvailable } from './BlockingSetInitialColorMode';

export enum Themes {
  AUTO = 'auto',
  DARK = 'dark',
  LIGHT = 'light',
}

type ActiveTheme = Themes.LIGHT | Themes.DARK | undefined;

const ThemeContext = createContext({
  activeTheme: undefined as ActiveTheme,
  setDarkMode: () => {},
  setLightMode: () => {},
  setAutoMode: () => {},
  themeName: Themes.AUTO,
});

type ThemeProviderProps = {
  children: ReactNode;
  disabled?: boolean;
};

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, disabled = false } = props;
  const initialTheme = (process as any).browser ? (document.documentElement.dataset.expoTheme as Themes) : Themes.AUTO;
  const [themeName, setThemeName] = useState(disabled ? Themes.LIGHT : initialTheme);
  const [activeTheme, setActiveTheme] = useState<ActiveTheme>(undefined);

  useEffect(function didMount() {
    if (disabled) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setActiveTheme(themeName === Themes.AUTO ? (mediaQuery.matches ? Themes.DARK : Themes.LIGHT) : themeName);

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

  useEffect(
    function onThemeNameChange() {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setActiveTheme(themeName === Themes.AUTO ? (prefersDark ? Themes.DARK : Themes.LIGHT) : themeName);
    },
    [themeName]
  );

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

    const themeName = getInitialColorMode() as Themes.LIGHT | Themes.DARK;
    setDocumentTheme(themeName);
    setThemeName(Themes.AUTO);
  }

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        setDarkMode,
        setLightMode,
        setAutoMode,
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
