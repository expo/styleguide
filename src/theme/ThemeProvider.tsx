import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from 'react';
import { getInitialColorMode } from './BlockingSetInitialColorMode';

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

type ThemeProviderProps = {
  children: ReactNode;
  disabled?: boolean;
};

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, disabled = false } = props;
  const initialTheme = (process as any).browser
    ? (document.documentElement.dataset.expoTheme as Themes)
    : Themes.AUTO;
  const [themeName, setThemeName] = useState(initialTheme);

  useEffect(function didMount() {
    if (disabled) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', onThemeChange);

    const themePreference = window.localStorage.getItem('data-expo-theme');

    if (themePreference === Themes.LIGHT || themePreference === Themes.DARK) {
      setThemeName(themePreference);
    } else {
      setThemeName(Themes.AUTO);
    }

    return function unMount() {
      mediaQuery.removeEventListener('change', onThemeChange);
    };
  }, []);

  function setDocumentTheme(themeName: Themes) {
    if (disabled) return;

    if ([Themes.LIGHT, Themes.DARK].includes(themeName)) {
      document.documentElement.setAttribute('data-expo-theme', themeName);
    } else {
      document.documentElement.setAttribute('data-expo-theme', '');
    }
  }

  function onThemeChange(event: MediaQueryListEvent | MediaQueryList) {
    const themePreference = window.localStorage.getItem('data-expo-theme');

    if (!themePreference) {
      if (event.matches) {
        setDocumentTheme(Themes.DARK);
      } else {
        setDocumentTheme(Themes.LIGHT);
      }
    }
  }

  function setDarkMode() {
    (process as any).browser &&
      window.localStorage.setItem('data-expo-theme', Themes.DARK);
    setDocumentTheme(Themes.DARK);
    setThemeName(Themes.DARK);
  }

  function setLightMode() {
    (process as any).browser &&
      window.localStorage.setItem('data-expo-theme', Themes.LIGHT);
    setDocumentTheme(Themes.LIGHT);
    setThemeName(Themes.LIGHT);
  }

  function setAutoMode() {
    (process as any).browser &&
      window.localStorage.removeItem('data-expo-theme');

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
      }}
    >
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
