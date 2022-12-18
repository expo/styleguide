import { palette } from './palette';

export const lightTheme = {
  background: {
    default: palette.white,
    screen: palette.light.gray1,
    subtle: palette.light.gray2,
    element: palette.light.gray3,
    hover: palette.light.gray4,
    selected: palette.light.gray5,
    overlay: palette.white,
    success: palette.light.green3,
    warning: palette.light.yellow3,
    danger: palette.light.red3,
    info: palette.light.blue3,
  },
  icon: {
    default: palette.light.gray11,
    secondary: palette.light.gray10,
    tertiary: palette.light.gray9,
    quaternary: palette.light.gray8,
    success: palette.light.green10,
    warning: palette.light.yellow11,
    danger: palette.light.red10,
    info: palette.light.blue10,
  },
  text: {
    default: palette.light.gray12,
    secondary: palette.light.gray11,
    tertiary: palette.light.gray10,
    quaternary: palette.light.gray9,
    link: palette.light.blue10,
    success: palette.light.green11,
    warning: palette.light.yellow11,
    danger: palette.light.red11,
    info: palette.light.blue11,
  },
  border: {
    default: palette.light.gray7,
    secondary: palette.light.gray6,
    success: palette.light.green7,
    warning: palette.light.yellow7,
    danger: palette.light.red7,
    info: palette.light.blue7,
  },
  button: {
    primary: {
      background: palette.light.blue10,
      border: palette.light.blue10,
      hover: palette.light.blue11,
      icon: palette.light.blue3,
      text: palette.white,
      disabled: {
        background: palette.light.blue7,
        border: palette.light.blue7,
        text: palette.white,
      },
      destructive: {
        background: palette.light.red10,
        border: palette.light.red10,
        hover: palette.light.red11,
        icon: palette.light.red3,
        text: palette.white,
        disabled: {
          background: palette.light.red7,
          border: palette.light.red7,
          text: palette.white,
        }
      }
    },
    secondary: {
      background: palette.white,
      border: palette.light.gray8,
      hover: palette.light.gray3,
      icon: palette.light.gray11,
      text: palette.light.gray12,
      disabled: {
        background: palette.white,
        border: palette.light.gray6,
        text: palette.light.gray9,
      },
      destructive: {
        background: palette.white,
        border: palette.light.red7,
        hover: palette.light.red3,
        icon: palette.light.red9,
        text: palette.light.red11,
        disabled: {
          background: palette.white,
          border: palette.light.red5,
          text: palette.light.red8,
        }
      }
    },
    tertiary: {
      background: 'transparent',
      border: 'transparent',
      hover: palette.light.blue4,
      icon: palette.light.blue9,
      text: palette.light.blue10,
      disabled: {
        background: 'transparent',
        border: 'transparent',
        text: palette.light.blue8,
      }
    },
    quaternary: {
      background: 'transparent',
      border: 'transparent',
      hover: palette.light.gray4,
      icon: palette.light.gray11,
      text: palette.light.gray12,
      disabled: {
        background: 'transparent',
        border: 'transparent',
        text: palette.light.gray9,
      }
    },
  },
};

export const darkTheme = {
  background: {
    default: palette.dark.gray1,
    screen: palette.black,
    subtle: palette.dark.gray2,
    element: palette.dark.gray3,
    hover: palette.dark.gray4,
    selected: palette.dark.gray5,
    overlay: palette.dark.gray2,
    success: palette.dark.green3,
    warning: palette.dark.yellow3,
    danger: palette.dark.red3,
    info: palette.dark.blue3,
  },
  icon: {
    default: palette.dark.gray11,
    secondary: palette.dark.gray10,
    tertiary: palette.dark.gray9,
    quaternary: palette.dark.gray8,
    success: palette.dark.green10,
    warning: palette.dark.yellow11,
    danger: palette.dark.red10,
    info: palette.dark.blue10,
  },
  text: {
    default: palette.dark.gray12,
    secondary: palette.dark.gray11,
    tertiary: palette.dark.gray10,
    quaternary: palette.dark.gray9,
    link: palette.dark.blue10,
    success: palette.dark.green11,
    warning: palette.dark.yellow11,
    danger: palette.dark.red11,
    info: palette.dark.blue11,
  },
  border: {
    default: palette.dark.gray7,
    secondary: palette.dark.gray6,
    success: palette.dark.green7,
    warning: palette.dark.yellow7,
    danger: palette.dark.red7,
    info: palette.dark.blue7,
  },
  button: {
    primary: {
      background: palette.dark.blue8,
      border: palette.dark.blue8,
      hover: palette.dark.blue7,
      icon: palette.dark.blue12,
      text: palette.white,
      disabled: {
        background: palette.dark.blue7,
        border: palette.dark.blue7,
        text: palette.dark.gray11,
      },
      destructive: {
        background: palette.dark.red8,
        border: palette.dark.red8,
        hover: palette.dark.red7,
        icon: palette.dark.red12,
        text: palette.white,
        disabled: {
          background: palette.dark.red6,
          border: palette.dark.red6,
          text: palette.dark.red11,
        }
      }
    },
    secondary: {
      background: palette.dark.gray3,
      border: palette.dark.gray8,
      hover: palette.dark.gray4,
      icon: palette.dark.gray12,
      text: palette.white,
      disabled: {
        background: palette.dark.gray1,
        border: palette.dark.gray7,
        text: palette.dark.gray11,
      },
      destructive: {
        background: palette.dark.red3,
        border: palette.dark.red7,
        hover: palette.dark.red2,
        icon: palette.dark.red9,
        text: palette.white,
        disabled: {
          background: palette.dark.red2,
          border: palette.dark.red6,
          text: palette.dark.red10,
        }
      }
    },
    tertiary: {
      background: 'transparent',
      border: 'transparent',
      hover: palette.dark.blue4,
      icon: palette.dark.blue10,
      text: palette.dark.blue11,
      disabled: {
        background: 'transparent',
        border: 'transparent',
        text: palette.dark.blue8,
      }
    },
    quaternary: {
      background: 'transparent',
      border: 'transparent',
      hover: palette.dark.gray4,
      icon: palette.dark.gray10,
      text: palette.dark.gray11,
      disabled: {
        background: 'transparent',
        border: 'transparent',
        text: palette.dark.gray9,
      }
    },
  },
};