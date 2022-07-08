import { palette } from './palette';

export const lightTheme = {
  background: {
    default: palette.light.white,
    screen: palette.light.gray[100],
    secondary: palette.light.gray[100],
    tertiary: palette.light.gray[200],
    quaternary: palette.light.gray[300],
    error: palette.light.red[100],
    warning: palette.light.yellow[100],
    success: palette.light.green[100],
    info: palette.light.blue[100],
    overlay: palette.light.white,
  },
  border: {
    default: palette.light.gray[300],
    error: palette.light.red[300],
    success: palette.light.green[300],
    warning: palette.light.yellow[300],
    info: palette.light.blue[300],
  },
  button: {
    primary: {
      background: palette.light.primary[500],
      foreground: palette.light.white,
    },
    secondary: {
      background: palette.light.gray[200],
      foreground: palette.light.gray[1000],
    },
    tertiary: {
      background: palette.light.gray[1000],
      foreground: palette.light.gray['000'],
    },
    transparent: {
      background: 'transparent',
      foreground: palette.light.gray[1000],
    },
    ghost: {
      background: 'transparent',
      foreground: palette.light.gray[800],
      border: palette.light.gray[400],
    },
  },
  icon: {
    default: palette.light.gray[700],
    secondary: palette.light.gray[500],
  },
  link: {
    default: palette.light.primary[500],
  },
  status: {
    default: palette.light.gray[500],
    error: palette.light.red[500],
    warning: palette.light.yellow[500],
    success: palette.light.green[500],
    info: palette.light.blue[500],
  },
  text: {
    default: palette.light.black,
    secondary: palette.light.gray[700],
    error: palette.light.red[600],
    warning: palette.light.yellow[900],
    success: palette.light.green[600],
    info: palette.light.blue[600],
  },
  code: {
    keyword: palette.light.blue[500],
    builtin: palette.light.green[600],
    property: palette.light.red[500],
    comment: palette.light.gray[600],
    punctuation: palette.light.gray[700],
    operator: palette.light.yellow[800],
    regex: palette.light.orange[600],
    string: palette.light.yellow[700],
    before: palette.light.gray[400],
  },
  highlight: {
    accent: palette.light.primary[300],
    emphasis: palette.light.yellow[300],
  },
  project: {
    blue: '#6299d9',
    green: '#54a767',
    yellow: '#e5c145',
    orange: '#d9864c',
    red: '#d95757',
    pink: '#d977b2',
    purple: '#8a66cc',
  },
};

export const darkTheme = {
  background: {
    default: palette.dark.gray[100],
    screen: palette.dark.gray['000'],
    secondary: palette.dark.gray[200],
    tertiary: palette.dark.gray[300],
    quaternary: palette.dark.gray[400],
    error: palette.dark.red['000'],
    warning: palette.dark.yellow['000'],
    success: palette.dark.green['000'],
    info: palette.dark.blue['000'],
    overlay: palette.dark.gray[200],
  },
  border: {
    default: palette.dark.gray[400],
    error: palette.dark.red[200],
    success: palette.dark.green[200],
    warning: palette.dark.yellow[200],
    info: palette.dark.blue[200],
  },
  button: {
    primary: {
      background: palette.dark.primary[500],
      foreground: palette.dark.white,
    },
    secondary: {
      background: palette.dark.gray[300],
      foreground: palette.dark.gray[800],
    },
    tertiary: {
      background: palette.dark.gray[500],
      foreground: palette.dark.gray[1000],
    },
    transparent: {
      background: 'transparent',
      foreground: palette.dark.gray[800],
    },
    ghost: {
      background: 'transparent',
      foreground: palette.dark.gray[800],
      border: palette.dark.gray[400],
    },
  },
  icon: {
    default: palette.dark.gray[800],
    secondary: palette.dark.gray[700],
  },
  link: {
    default: palette.dark.primary[700],
  },
  status: {
    default: palette.dark.gray[400],
    error: palette.dark.red[500],
    warning: palette.dark.yellow[500],
    success: palette.dark.green[500],
    info: palette.dark.blue[500],
  },
  text: {
    default: palette.dark.gray[800],
    secondary: palette.dark.gray[700],
    error: palette.dark.red[600],
    warning: palette.dark.yellow[900],
    success: palette.dark.green[600],
    info: palette.dark.blue[700],
  },
  code: {
    keyword: palette.dark.blue[600],
    builtin: palette.dark.green[600],
    property: palette.dark.red[600],
    comment: palette.dark.gray[600],
    punctuation: palette.dark.gray[700],
    operator: palette.dark.yellow[800],
    regex: palette.dark.orange[600],
    string: palette.dark.yellow[700],
    before: palette.dark.gray[400],
  },
  highlight: {
    accent: palette.dark.primary[700],
    emphasis: palette.dark.yellow[300],
  },
  project: {
    blue: '#395a80',
    green: '#32633d',
    yellow: '#8a6319',
    orange: '#8c5731',
    red: '#8c3838',
    pink: '#8a4c71',
    purple: '#4e3973',
  },
};
