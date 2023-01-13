import {
  blue, blueDark,
  red, redDark,
  yellow, yellowDark,
  green, greenDark,
  orange, orangeDark,
  purple, purpleDark,
  pink, pinkDark,
  slate, slateDark
} from '@radix-ui/colors'
import tinycolor from "tinycolor2";

function expandPalette(palette: any, colorName: string, isDarkMode = false) {
  const { [`${colorName}12`]: lastColor, ...rest } = palette;
  const expansion = {
    [`${colorName}12`]: (isDarkMode ? tinycolor(lastColor).darken(18) : tinycolor(lastColor).lighten(18)).toString("hsl"),
    [`${colorName}13`]: (isDarkMode ? tinycolor(lastColor).darken(9) : tinycolor(lastColor).lighten(9)).toString("hsl"),
    [`${colorName}14`]: lastColor,
  };
  return Object.assign({}, rest, expansion);
}

const gray = {
  gray1: slate.slate1,
  gray2: slate.slate2,
  gray3: slate.slate3,
  gray4: slate.slate4,
  gray5: slate.slate5,
  gray6: slate.slate6,
  gray7: slate.slate7,
  gray8: slate.slate8,
  gray9: slate.slate9,
  gray10: slate.slate10,
  gray11: slate.slate11,
  gray12: 'hsl(206, 10%, 30%)',
  gray13: 'hsl(206, 18%, 16%)',
  gray14: slate.slate12,
} as const;

const grayDark = {
  gray1: slateDark.slate1,
  gray2: slateDark.slate2,
  gray3: slateDark.slate3,
  gray4: slateDark.slate4,
  gray5: slateDark.slate5,
  gray6: slateDark.slate6,
  gray7: slateDark.slate7,
  gray8: slateDark.slate8,
  gray9: slateDark.slate9,
  gray10: slateDark.slate10,
  gray11: slateDark.slate11,
  gray12: 'hsl(210, 6%, 73%)',
  gray13: 'hsl(210, 6%, 83%)',
  gray14: slateDark.slate12
} as const;

export const palette = {
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  light: {
    ...expandPalette(blue, "blue"),
    ...expandPalette(red, "red"),
    ...expandPalette(yellow, "yellow"),
    ...expandPalette(green, "green"),
    ...expandPalette(orange, "orange"),
    ...expandPalette(purple, "purple"),
    ...expandPalette(pink, "pink"),
    ...gray,
  },
  dark: {
    ...expandPalette(blueDark, "blue", true),
    ...expandPalette(redDark, "red", true),
    ...expandPalette(yellowDark, "yellow", true),
    ...expandPalette(greenDark, "green", true),
    ...expandPalette(orangeDark, "orange", true),
    ...expandPalette(purpleDark, "purple", true),
    ...expandPalette(pinkDark, "pink", true),
    ...grayDark
  },
} as const;
