import React, { createContext, useEffect, useState, useContext, PropsWithChildren } from 'react';

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
  themeName: Themes.AUTO,
});

const LOCAL_STORAGE_KEY = 'data-expo-theme';

type ThemeProviderProps = PropsWithChildren<{
  disabled?: boolean;
}>;

function getInitialTheme() {
  if (isLocalStorageAvailable()) {
    return window.localStorage.getItem(LOCAL_STORAGE_KEY) as Themes;
  } else if ((process as any).browser) {
    return document.documentElement.dataset.expoTheme as Themes;
  }
  return Themes.AUTO;
}

export function ThemeProvider({ children, disabled = false }: ThemeProviderProps) {
  const initialTheme = getInitialTheme();
  const [themeName, setThemeName] = useState(disabled ? Themes.LIGHT : initialTheme);

  useEffect(function didMount() {
    if (disabled) return;

    setDocumentTheme(initialTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    try {
      mediaQuery.addEventListener('change', onThemeChange);
    } catch {
      // Fallback to old-style listening for changes, for Safari and IE
      mediaQuery.addListener(onThemeChange);
    }

    if (isLocalStorageAvailable()) {
      const themePreference = window.localStorage.getItem(LOCAL_STORAGE_KEY);

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
      const themePreference = window.localStorage.getItem(LOCAL_STORAGE_KEY);

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
      window.localStorage.setItem(LOCAL_STORAGE_KEY, Themes.DARK);
    }
    setDocumentTheme(Themes.DARK);
    setThemeName(Themes.DARK);
  }

  function setLightMode() {
    if (isLocalStorageAvailable()) {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, Themes.LIGHT);
    }
    setDocumentTheme(Themes.LIGHT);
    setThemeName(Themes.LIGHT);
  }

  function setAutoMode() {
    if (isLocalStorageAvailable()) {
      window.localStorage.removeItem(LOCAL_STORAGE_KEY);
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
