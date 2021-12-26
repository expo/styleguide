import { theme, darkTheme } from './themes';
import { borderRadius } from './sizing';
import { spacing } from './spacing';

import { breakpoints } from './breakpoints';

const baseFontSize = 16;

function round(value: number) {
  return value
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1') // remove trailing zeroes after decimals
    .replace(/\.0$/, ''); // remove any remaining zeroes
}

function rem(px: number) {
  return `${round(px / baseFontSize)}rem`;
}

const fontFaces = {
  black: 'Inter-Black',
  semiBold: 'Inter-SemiBold',
  medium: 'Inter-Medium',
  regular: 'Inter-Regular',
  mono: 'Menlo-Regular',
};

const defaultFontStack =
  "system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'";

const defaultMonoStack =
  "Monaco,Consolas,'Liberation Mono','Courier New',monospace, 'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'";

const fontStacks = {
  black: `${fontFaces.black}, ${defaultFontStack}`,
  semiBold: `${fontFaces.semiBold}, ${defaultFontStack}`,
  medium: `${fontFaces.medium}, ${defaultFontStack}`,
  regular: `${fontFaces.regular}, ${defaultFontStack}`,
  mono: `${fontFaces.mono}, ${defaultMonoStack}`,
};

const fontSizes = {
  61: {
    fontSize: rem(61),
    lineHeight: round(73 / 61),
    letterSpacing: rem(-0.022 * baseFontSize),
  },
  53: {
    fontSize: rem(53),
    lineHeight: round(64 / 53),
    letterSpacing: rem(-0.022 * baseFontSize),
  },
  49: {
    fontSize: rem(49),
    lineHeight: round(59 / 49),
    letterSpacing: rem(-0.022 * baseFontSize),
  },
  46: {
    fontSize: rem(46),
    lineHeight: round(55 / 46),
    letterSpacing: rem(-0.022 * baseFontSize),
  },
  43: {
    fontSize: rem(43),
    lineHeight: round(52 / 43),
    letterSpacing: rem(-0.022 * baseFontSize),
  },
  39: {
    fontSize: rem(39),
    lineHeight: round(51 / 39),
    letterSpacing: rem(-0.022 * baseFontSize),
  },
  37: {
    fontSize: rem(37),
    lineHeight: round(48 / 37),
    letterSpacing: rem(-0.022 * baseFontSize),
  },
  34: {
    fontSize: rem(34),
    lineHeight: round(44 / 34),
    letterSpacing: rem(-0.022 * baseFontSize),
  },
  31: {
    fontSize: rem(31),
    lineHeight: round(40 / 31),
    letterSpacing: rem(-0.021 * baseFontSize),
  },
  29: {
    fontSize: rem(29),
    lineHeight: round(38 / 29),
    letterSpacing: rem(-0.021 * baseFontSize),
  },
  27: {
    fontSize: rem(27),
    lineHeight: round(36 / 27),
    letterSpacing: rem(-0.021 * baseFontSize),
  },
  25: {
    fontSize: rem(25),
    lineHeight: round(35 / 25),
    letterSpacing: rem(-0.021 * baseFontSize),
  },
  23: {
    fontSize: rem(23),
    lineHeight: round(32 / 23),
    letterSpacing: rem(-0.019 * baseFontSize),
  },
  22: {
    fontSize: rem(22),
    lineHeight: round(31 / 22),
    letterSpacing: rem(-0.018 * baseFontSize),
  },
  20: {
    fontSize: rem(20),
    lineHeight: round(30 / 20),
    letterSpacing: rem(-0.017 * baseFontSize),
  },
  19: {
    fontSize: rem(19),
    lineHeight: round(29 / 19),
    letterSpacing: rem(-0.015 * baseFontSize),
  },
  18: {
    fontSize: rem(18),
    lineHeight: round(28 / 18),
    letterSpacing: rem(-0.014 * baseFontSize),
  },
  16: {
    fontSize: rem(16),
    lineHeight: round(26 / 16),
    letterSpacing: rem(-0.011 * baseFontSize),
  },
  15: {
    fontSize: rem(15),
    lineHeight: round(24 / 15),
    letterSpacing: rem(-0.009 * baseFontSize),
  },
  14: {
    fontSize: rem(14),
    lineHeight: round(22 / 14),
    letterSpacing: rem(-0.006 * baseFontSize),
  },
  13: {
    fontSize: rem(13),
    lineHeight: round(21 / 13),
    letterSpacing: rem(-0.003 * baseFontSize),
  },
  12: { fontSize: rem(12), lineHeight: round(19 / 12) },
};

const headers = {
  huge: {
    fontFamily: fontStacks.black,
    fontWeight: 900,
    ...fontSizes[61],
    [`@media (max-width: ${breakpoints.medium}px)`]: fontSizes[53],
    [`@media (max-width: ${breakpoints.small}px`]: fontSizes[46],
  },
  h1: {
    fontFamily: fontStacks.semiBold,
    fontWeight: 500,
    ...fontSizes[49],
    [`@media (max-width: ${breakpoints.medium}px)`]: fontSizes[43],
    [`@media (max-width: ${breakpoints.small}px)`]: fontSizes[37],
  },
  h2: {
    fontFamily: fontStacks.semiBold,
    fontWeight: 500,
    ...fontSizes[39],
    [`@media (max-width: ${breakpoints.medium}px)`]: fontSizes[34],
    [`@media (max-width: ${breakpoints.small}px)`]: fontSizes[29],
  },
  h3: {
    fontFamily: fontStacks.semiBold,
    fontWeight: 500,
    ...fontSizes[31],
    [`@media (max-width: ${breakpoints.medium}px)`]: fontSizes[27],
    [`@media (max-width: ${breakpoints.small}px)`]: fontSizes[23],
  },
  h4: {
    fontFamily: fontStacks.medium,
    fontWeight: 500,
    ...fontSizes[25],
    [`@media (max-width: ${breakpoints.medium}px)`]: fontSizes[22],
    [`@media (max-width: ${breakpoints.small}px)`]: fontSizes[19],
  },
  h5: {
    fontFamily: fontStacks.medium,
    fontWeight: 500,
    ...fontSizes[20],
    [`@media (max-width: ${breakpoints.medium}px)`]: fontSizes[18],
    [`@media (max-width: ${breakpoints.small}px)`]: fontSizes[16],
  },
  h6: {
    fontFamily: fontStacks.medium,
    fontWeight: 500,
    ...fontSizes[16],
  },
};

const body = {
  headline: {
    fontFamily: fontStacks.medium,
    fontWeight: 400,
    ...fontSizes[16],
  },
  paragraph: {
    fontFamily: fontStacks.regular,
    fontWeight: 400,
    ...fontSizes[16],
  },
  label: {
    fontFamily: fontStacks.medium,
    fontWeight: 400,
    ...fontSizes[15],
  },
  callout: {
    fontFamily: fontStacks.regular,
    fontWeight: 400,
    ...fontSizes[14],
  },
  footnote: {
    fontFamily: fontStacks.regular,
    fontWeight: 400,
    ...fontSizes[13],
  },
  caption: {
    fontFamily: fontStacks.regular,
    fontWeight: 400,
    ...fontSizes[12],
  },
  code: {
    fontFamily: fontStacks.mono,
    fontWeight: 400,
    ...fontSizes[13],
  },
};

const utility = {
  anchor: {
    color: theme.link.default,
    fontWeight: 400,
    textDecoration: 'none',
    cursor: 'pointer',
    opacity: 1,
    // transform prevents a 1px shift on hover on Safari
    transform: 'translate3d(0,0,0)',
    ':visited': {
      color: theme.link.default,
    },
    ':hover': {
      transition: '200ms',
      opacity: 0.8,
    },
  },
  li: {
    ...fontSizes[16],
    fontWeight: 400,
    marginBottom: rem(0.5),
  },
  inlineCode: {
    ...body.code,
    fontWeight: 400,
    display: 'inline-block',
    backgroundColor: theme.background.secondary,
    border: `1px solid ${theme.border.default}`,
    borderRadius: borderRadius.medium,
    padding: '2px 4px',
    lineHeight: '130%',
  },
  terminalCode: {
    ...body.code,
    fontWeight: 400,
    display: 'inline-block',
    backgroundColor: darkTheme.background.secondary,
    color: darkTheme.text.default,
    border: `1px solid ${darkTheme.border.default}`,
    borderRadius: borderRadius.medium,
    padding: '2px 4px',
    lineHeight: '130%',
  },
  pre: {
    ...body.code,
    fontWeight: 400,
    backgroundColor: theme.background.secondary,
    borderRadius: borderRadius.medium,
    border: `1px solid ${theme.border.default}`,
    padding: spacing[4],
    whiteSpace: 'pre-wrap',
    margin: `${spacing[4]}px 0`,
  },
  terminalPre: {
    ...body.code,
    fontWeight: 400,
    backgroundColor: darkTheme.background.secondary,
    color: darkTheme.text.default,
    borderRadius: borderRadius.medium,
    border: `1px solid ${darkTheme.border.default}`,
    padding: spacing[4],
    margin: `${spacing[4]}px 0`,
    whiteSpace: 'pre-wrap',
    '&:before': {
      content: '"➜ "',
    },
  },
  hr: {
    backgroundColor: theme.border.default,
    border: 0,
    height: 1,
    display: 'block',
    width: '100%',
  },
  blockquote: {
    ...fontSizes[16],
    fontWeight: 400,
    color: theme.text.secondary,
    paddingLeft: spacing[4],
    borderLeft: `${spacing[1]}px solid ${theme.border.default}`,
  },
};

export const typography = {
  baseFontSize,
  headers,
  body,
  utility,
  fontFaces,
  fontStacks,
  fontSizes,
};
