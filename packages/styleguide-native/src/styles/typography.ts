import { type TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

const baseFontSize = 16;

const fontSizes = {
  61: {
    fontSize: 61,
    lineHeight: 73,
    letterSpacing: -0.022 * baseFontSize,
  },
  53: {
    fontSize: 53,
    lineHeight: 64,
    letterSpacing: -0.022 * baseFontSize,
  },
  49: {
    fontSize: 49,
    lineHeight: 59,
    letterSpacing: -0.022 * baseFontSize,
  },
  46: {
    fontSize: 46,
    lineHeight: 55,
    letterSpacing: -0.022 * baseFontSize,
  },
  43: {
    fontSize: 43,
    lineHeight: 52,
    letterSpacing: -0.022 * baseFontSize,
  },
  39: {
    fontSize: 39,
    lineHeight: 51,
    letterSpacing: -0.022 * baseFontSize,
  },
  37: {
    fontSize: 37,
    lineHeight: 48,
    letterSpacing: -0.022 * baseFontSize,
  },
  34: {
    fontSize: 34,
    lineHeight: 44,
    letterSpacing: -0.022 * baseFontSize,
  },
  31: {
    fontSize: 31,
    lineHeight: 40,
    letterSpacing: -0.021 * baseFontSize,
  },
  29: {
    fontSize: 29,
    lineHeight: 38,
    letterSpacing: -0.021 * baseFontSize,
  },
  27: {
    fontSize: 27,
    lineHeight: 36,
    letterSpacing: -0.021 * baseFontSize,
  },
  25: {
    fontSize: 25,
    lineHeight: 35,
    letterSpacing: -0.021 * baseFontSize,
  },
  23: {
    fontSize: 23,
    lineHeight: 32,
    letterSpacing: -0.019 * baseFontSize,
  },
  22: {
    fontSize: 22,
    lineHeight: 31,
    letterSpacing: -0.018 * baseFontSize,
  },
  20: {
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -0.017 * baseFontSize,
  },
  19: {
    fontSize: 19,
    lineHeight: 29,
    letterSpacing: -0.015 * baseFontSize,
  },
  18: {
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: -0.014 * baseFontSize,
  },
  16: {
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: -0.011 * baseFontSize,
  },
  15: {
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: -0.009 * baseFontSize,
  },
  14: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: -0.006 * baseFontSize,
  },
  13: {
    fontSize: 13,
    lineHeight: 21,
    letterSpacing: -0.003 * baseFontSize,
  },
  12: {
    fontSize: 12,
    lineHeight: 19,
  },
};

const headers = {
  xl: {
    large: {
      huge: {
        fontWeight: '900' as TextStyle['fontWeight'],
        ...fontSizes[61],
      },
      h1: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[49],
      },
      h2: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[39],
      },
      h3: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[31],
      },
      h4: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[25],
      },
      h5: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[20],
      },
      h6: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[16],
      },
    },
    medium: {
      huge: {
        fontWeight: '900' as TextStyle['fontWeight'],
        ...fontSizes[53],
      },
      h1: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[43],
      },
      h2: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[34],
      },
      h3: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[27],
      },
      h4: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[22],
      },
      h5: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[18],
      },
      h6: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[16],
      },
    },
    small: {
      huge: {
        fontWeight: '900' as TextStyle['fontWeight'],
        ...fontSizes[46],
      },
      h1: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[37],
      },
      h2: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[29],
      },
      h3: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[23],
      },
      h4: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[19],
      },
      h5: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[16],
      },
      h6: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[16],
      },
    },
  },
  default: {
    large: {
      huge: {
        fontWeight: '900' as TextStyle['fontWeight'],
        ...fontSizes[39],
      },
      h1: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[31],
      },
      h2: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[25],
      },
      h3: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[20],
      },
      h4: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[16],
      },
      h5: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[13],
      },
      h6: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[12],
      },
    },
    medium: {
      huge: {
        fontWeight: '900' as TextStyle['fontWeight'],
        ...fontSizes[34],
      },
      h1: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[27],
      },
      h2: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[22],
      },
      h3: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[18],
      },
      h4: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[16],
      },
      h5: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[13],
      },
      h6: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[12],
      },
    },
    small: {
      huge: {
        fontWeight: '900' as TextStyle['fontWeight'],
        ...fontSizes[29],
      },
      h1: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[23],
      },
      h2: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[19],
      },
      h3: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[16],
      },
      h4: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[16],
      },
      h5: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[13],
      },
      h6: {
        fontWeight: '600' as TextStyle['fontWeight'],
        ...fontSizes[12],
      },
    },
  },
};

const baseStyle = {
  fontWeight: '400' as TextStyle['fontWeight'],
  ...fontSizes[16],
};

const body = {
  headline: {
    fontWeight: '500' as TextStyle['fontWeight'],
    ...fontSizes[16],
  },
  paragraph: baseStyle,
  label: {
    fontWeight: '500' as TextStyle['fontWeight'],
    ...fontSizes[15],
  },
  callout: {
    fontWeight: '400' as TextStyle['fontWeight'],
    ...fontSizes[14],
  },
  footnote: {
    fontWeight: '400' as TextStyle['fontWeight'],
    ...fontSizes[13],
  },
  caption: {
    fontWeight: '400' as TextStyle['fontWeight'],
    ...fontSizes[12],
  },
  code: {
    fontWeight: '400' as TextStyle['fontWeight'],
    ...fontSizes[13],
  },
};

export const typography = {
  baseFontSize,
  headers,
  body,
  fontSizes,
};
