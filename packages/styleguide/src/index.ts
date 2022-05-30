import { legacyColors as colors } from './styles/legacy-colors';
import { palette } from './styles/palette';
import { shadows } from './styles/shadows';
import { borderRadius, iconSize } from './styles/sizing';
import { theme, lightTheme, darkTheme } from './styles/themes';
import { BlockingSetInitialColorMode } from './components/BlockingSetInitialColorMode';
import { ThemeProvider, useTheme } from './components/ThemeProvider';
import { spacing } from './styles/spacing';
import { breakpoints } from './styles/breakpoints';
import { typography } from './styles/typography';

export * from './icons';
export * from './logos';
export {
  borderRadius,
  BlockingSetInitialColorMode,
  breakpoints,
  colors,
  darkTheme,
  iconSize,
  lightTheme,
  palette,
  shadows,
  spacing,
  theme,
  ThemeProvider,
  typography,
  useTheme,
};
