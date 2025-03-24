import { typography } from '@expo/styleguide-native';
import { Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title';
};

export function ThemedText({ style, lightColor, darkColor, type = 'default', ...rest }: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, type === 'title' ? 'header' : 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? typography.body.paragraph : undefined,
        type === 'title' ? typography.headers.default.small.huge : undefined,
        style,
      ]}
      {...rest}
    />
  );
}
