import { blue, blueDark, red, redDark, yellow, yellowDark, green, greenDark, slate, slateDark } from '@radix-ui/colors'

export const palette = {
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  light: {
    ...blue,
    ...red,
    ...yellow,
    ...green,
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
    gray12: slate.slate12
  },
  dark: {
    ...blueDark,
    ...redDark,
    ...yellowDark,
    ...greenDark,
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
    gray12: slateDark.slate12
  },
};
