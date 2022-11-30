import { palette } from './palette';

export const lightTheme = {
  success: {
    background: palette.light.green3,
    border: palette.light.green7,
    icon: palette.light.green10,
    text: palette.light.green11,
  },
  warning: {
    background: palette.light.yellow3,
    border: palette.light.yellow7,
    icon: palette.light.yellow11,
    text: palette.light.yellow11,
  },
  danger: {
    background: palette.light.red3,
    border: palette.light.red7,
    icon: palette.light.red10,
    text: palette.light.red11,
  },
  info: {
    background: palette.light.blue3,
    border: palette.light.blue7,
    icon: palette.light.blue10,
    text: palette.light.blue11,
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
      border: palette.light.gray7,
      hover: palette.light.gray2,
      icon: palette.light.gray10,
      text: palette.light.gray11,
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
        text: palette.light.blue7,
      }
    },
    quaternary: {
      background: 'transparent',
      border: 'transparent',
      hover: palette.light.gray4,
      icon: palette.light.gray10,
      text: palette.light.gray11,
      disabled: {
        background: 'transparent',
        border: 'transparent',
        text: palette.light.gray9,
      }
    },
  },
  background: {
    default: palette.white,
    screen: palette.light.gray1,
    subtle: palette.light.gray2,
    element: palette.light.gray3,
    hover: palette.light.gray4,
    selected: palette.light.gray5,
    overlay: palette.white,
  },
  icon: {
    default: palette.light.gray11,
    secondary: palette.light.gray10,
    tertiary: palette.light.gray9,
    quaternary: palette.light.gray8,
  },
  text: {
    default: palette.light.gray12,
    secondary: palette.light.gray11,
    tertiary: palette.light.gray10,
    quaternary: palette.light.gray9,
    link: palette.light.blue10,
  },
  border: {
    default: palette.light.gray7,
    secondary: palette.light.gray6,
  },
};

export const darkTheme = {
  success: {
    background: palette.dark.green3,
    border: palette.dark.green7,
    icon: palette.dark.green10,
    text: palette.dark.green11,
  },
  warning: {
    background: palette.dark.yellow3,
    border: palette.dark.yellow7,
    icon: palette.dark.yellow11,
    text: palette.dark.yellow11,
  },
  danger: {
    background: palette.dark.red3,
    border: palette.dark.red7,
    icon: palette.dark.red10,
    text: palette.dark.red11,
  },
  info: {
    background: palette.dark.blue3,
    border: palette.dark.blue7,
    icon: palette.dark.blue10,
    text: palette.dark.blue11,
  },
  button: {
    primary: {
      background: palette.dark.blue9,
      border: palette.dark.blue9,
      hover: palette.dark.blue8,
      icon: palette.dark.blue3,
      text: palette.white,
      disabled: {
        background: palette.dark.blue7,
        border: palette.dark.blue7,
        text: palette.white,
      },
      destructive: {
        background: palette.dark.red10,
        border: palette.dark.red10,
        hover: palette.dark.red9,
        icon: palette.dark.red3,
        text: palette.black,
        disabled: {
          background: palette.dark.red7,
          border: palette.dark.red7,
          text: palette.black,
        }
      }
    },
    secondary: {
      background: palette.light.gray2,
      border: palette.dark.gray7,
      hover: palette.dark.gray3,
      icon: palette.dark.gray10,
      text: palette.dark.gray11,
      disabled: {
        background: palette.light.gray1,
        border: palette.dark.gray6,
        text: palette.dark.gray9,
      },
      destructive: {
        background: palette.light.gray2,
        border: palette.dark.red7,
        hover: palette.dark.red3,
        icon: palette.dark.red9,
        text: palette.dark.red11,
        disabled: {
          background: palette.light.gray2,
          border: palette.dark.red5,
          text: palette.dark.red8,
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
  background: {
    default: palette.dark.gray1,
    screen: palette.black,
    subtle: palette.dark.gray2,
    element: palette.dark.gray3,
    hover: palette.dark.gray4,
    selected: palette.dark.gray5,
    overlay: palette.dark.gray2,
  },
  icon: {
    default: palette.dark.gray11,
    secondary: palette.dark.gray10,
    tertiary: palette.dark.gray9,
    quaternary: palette.dark.gray8,
  },
  text: {
    default: palette.dark.gray12,
    secondary: palette.dark.gray11,
    tertiary: palette.dark.gray10,
    quaternary: palette.dark.gray9,
    link: palette.dark.blue10,
  },
  border: {
    default: palette.dark.gray7,
    secondary: palette.dark.gray6,
  },
};