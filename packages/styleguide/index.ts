import { legacyColors as colors } from './src/styles/legacy-colors';
import { palette } from './src/styles/palette';
import { shadows } from './src/styles/shadows';
import { borderRadius, iconSize } from './src/styles/sizing';
import { theme, lightTheme, darkTheme } from './src/styles/themes';
import { BlockingSetInitialColorMode } from './src/components/BlockingSetInitialColorMode';
import { ThemeProvider, useTheme } from './src/components/ThemeProvider';
import { spacing } from './src/styles/spacing';

export * from './src/icons';
export {
  borderRadius,
  BlockingSetInitialColorMode,
  colors,
  darkTheme,
  iconSize,
  lightTheme,
  palette,
  shadows,
  spacing,
  theme,
  ThemeProvider,
  useTheme,
};
