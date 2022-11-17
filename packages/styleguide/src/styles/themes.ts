import { palette } from "./palette";

export const theme = {
  success: {
    background: 'var(--expo-theme-success-background)',
    border: 'var(--expo-theme-success-border)',
    icon: 'var(--expo-theme-success-icon)',
    text: 'var(--expo-theme-success-text)',
  },
  warning: {
    background: 'var(--expo-theme-warning-background)',
    border: 'var(--expo-theme-warning-border)',
    icon: 'var(--expo-theme-warning-icon)',
    text: 'var(--expo-theme-warning-text)',
  },
  danger: {
    background: 'var(--expo-theme-danger-background)',
    border: 'var(--expo-theme-danger-border)',
    icon: 'var(--expo-theme-danger-icon)',
    text: 'var(--expo-theme-danger-text)',
  },
  info: {
    background: 'var(--expo-theme-info-background)',
    border: 'var(--expo-theme-info-border)',
    icon: 'var(--expo-theme-info-icon)',
    text: 'var(--expo-theme-info-text)',
  },
  button: {
    primary: {
      background: 'var(--expo-theme-button-primary-background)',
      border: 'var(--expo-theme-button-primary-border)',
      hover: 'var(--expo-theme-button-primary-hover)',
      icon: 'var(--expo-theme-button-primary-icon)',
      text: 'var(--expo-theme-button-primary-text)',
      disabled: {
        background: 'var(--expo-theme-button-primary-disabled-background)',
        border: 'var(--expo-theme-button-primary-disabled-border)',
        text: 'var(--expo-theme-button-primary-disabled-text)',
      },
      destructive: {
        background: 'var(--expo-theme-button-primary-destructive-background)',
        border: 'var(--expo-theme-button-primary-destructive-border)',
        hover: 'var(--expo-theme-button-primary-destructive-hover)',
        icon: 'var(--expo-theme-button-primary-destructive-icon)',
        text: 'var(--expo-theme-button-primary-destructive-text)',
        disabled: {
          background: 'var(--expo-theme-button-primary-destructive-disabled-background)',
          border: 'var(--expo-theme-button-primary-destructive-disabled-border)',
          text: 'var(--expo-theme-button-primary-destructive-disabled-text)',
        }
      }
    },
    secondary: {
      background: 'var(--expo-theme-button-secondary-background)',
      border: 'var(--expo-theme-button-secondary-border)',
      hover: 'var(--expo-theme-button-secondary-hover)',
      icon: 'var(--expo-theme-button-secondary-icon)',
      text: 'var(--expo-theme-button-secondary-text)',
      disabled: {
        background: 'var(--expo-theme-button-secondary-disabled-background)',
        border: 'var(--expo-theme-button-secondary-disabled-border)',
        text: 'var(--expo-theme-button-secondary-disabled-text)',
      },
      destructive: {
        background: 'var(--expo-theme-button-secondary-destructive-background)',
        border: 'var(--expo-theme-button-secondary-destructive-border)',
        hover: 'var(--expo-theme-button-secondary-destructive-hover)',
        icon: 'var(--expo-theme-button-secondary-destructive-icon)',
        text: 'var(--expo-theme-button-secondary-destructive-text)',
        disabled: {
          background: 'var(--expo-theme-button-secondary-destructive-disabled-background)',
          border: 'var(--expo-theme-button-secondary-destructive-disabled-border)',
          text: 'var(--expo-theme-button-secondary-destructive-disabled-text)',
        }
      }
    },
    tertiary: {
      background: 'var(--expo-theme-button-tertiary-background)',
      border: 'var(--expo-theme-button-tertiary-border)',
      hover: 'var(--expo-theme-button-tertiary-hover)',
      icon: 'var(--expo-theme-button-tertiary-icon)',
      text: 'var(--expo-theme-button-tertiary-text)',
      disabled: {
        background: 'var(--expo-theme-button-tertiary-disabled-background)',
        border: 'var(--expo-theme-button-tertiary-disabled-border)',
        text: 'var(--expo-theme-button-tertiary-disabled-text)',
      }
    },
    quaternary: {
      background: 'var(--expo-theme-button-quaternary-background)',
      border: 'var(--expo-theme-button-quaternary-border)',
      hover: 'var(--expo-theme-button-quaternary-hover)',
      icon: 'var(--expo-theme-button-quaternary-icon)',
      text: 'var(--expo-theme-button-quaternary-text)',
      disabled: {
        background: 'var(--expo-theme-button-quaternary-disabled-background)',
        border: 'var(--expo-theme-button-quaternary-disabled-border)',
        text: 'var(--expo-theme-button-quaternary-disabled-text)',
      }
    },
  },
  background: {
    default: 'var(--expo-theme-background-default)',
    screen: 'var(--expo-theme-background-screen)',
    subtle: 'var(--expo-theme-background-subtle)',
    element: 'var(--expo-theme-background-element)',
    hover: 'var(--expo-theme-background-hover)',
    selected: 'var(--expo-theme-background-selected)',
    overlay: 'var(--expo-theme-background-overlay)',
  },
  icon: {
    default: 'var(--expo-theme-icon-default)',
    secondary: 'var(--expo-theme-icon-secondary)',
    tertiary: 'var(--expo-theme-icon-tertiary)',
    quaternary: 'var(--expo-theme-icon-quaternary)',
  },
  text: {
    default: 'var(--expo-theme-text-default)',
    secondary: 'var(--expo-theme-text-secondary)',
    tertiary: 'var(--expo-theme-text-tertiary)',
    quaternary: 'var(--expo-theme-text-quaternary)',
    link: 'var(--expo-theme-text-link)',
  },
  border: {
    default: 'var(--expo-theme-border-default)',
    secondary: 'var(--expo-theme-border-secondary)',
  },
  project: {
    blue: 'var(--expo-theme-project-blue)',
    green: 'var(--expo-theme-project-green)',
    yellow: 'var(--expo-theme-project-yellow)',
    orange: 'var(--expo-theme-project-orange)',
    red: 'var(--expo-theme-project-red)',
    pink: 'var(--expo-theme-project-pink)',
    purple: 'var(--expo-theme-project-purple)',
  },
  palette: {
    white: 'var(--expo-color-white)',
    black: 'var(--expo-color-black)',
    green1: 'var(--expo-color-green1)',
    green2: 'var(--expo-color-green2)',
    green3: 'var(--expo-color-green3)',
    green4: 'var(--expo-color-green4)',
    green5: 'var(--expo-color-green5)',
    green6: 'var(--expo-color-green6)',
    green7: 'var(--expo-color-green7)',
    green8: 'var(--expo-color-green8)',
    green9: 'var(--expo-color-green9)',
    green10: 'var(--expo-color-green10)',
    green11: 'var(--expo-color-green11)',
    green12: 'var(--expo-color-green12)',
    red1: 'var(--expo-color-red1)',
    red2: 'var(--expo-color-red2)',
    red3: 'var(--expo-color-red3)',
    red4: 'var(--expo-color-red4)',
    red5: 'var(--expo-color-red5)',
    red6: 'var(--expo-color-red6)',
    red7: 'var(--expo-color-red7)',
    red8: 'var(--expo-color-red8)',
    red9: 'var(--expo-color-red9)',
    red10: 'var(--expo-color-red10)',
    red11: 'var(--expo-color-red11)',
    red12: 'var(--expo-color-red12)',
    yellow1: 'var(--expo-color-yellow1)',
    yellow2: 'var(--expo-color-yellow2)',
    yellow3: 'var(--expo-color-yellow3)',
    yellow4: 'var(--expo-color-yellow4)',
    yellow5: 'var(--expo-color-yellow5)',
    yellow6: 'var(--expo-color-yellow6)',
    yellow7: 'var(--expo-color-yellow7)',
    yellow8: 'var(--expo-color-yellow8)',
    yellow9: 'var(--expo-color-yellow9)',
    yellow10: 'var(--expo-color-yellow10)',
    yellow11: 'var(--expo-color-yellow11)',
    yellow12: 'var(--expo-color-yellow12)',
    blue1: 'var(--expo-color-blue1)',
    blue2: 'var(--expo-color-blue2)',
    blue3: 'var(--expo-color-blue3)',
    blue4: 'var(--expo-color-blue4)',
    blue5: 'var(--expo-color-blue5)',
    blue6: 'var(--expo-color-blue6)',
    blue7: 'var(--expo-color-blue7)',
    blue8: 'var(--expo-color-blue8)',
    blue9: 'var(--expo-color-blue9)',
    blue10: 'var(--expo-color-blue10)',
    blue11: 'var(--expo-color-blue11)',
    blue12: 'var(--expo-color-blue12)',
    gray1: 'var(--expo-color-gray1)',
    gray2: 'var(--expo-color-gray2)',
    gray3: 'var(--expo-color-gray3)',
    gray4: 'var(--expo-color-gray4)',
    gray5: 'var(--expo-color-gray5)',
    gray6: 'var(--expo-color-gray6)',
    gray7: 'var(--expo-color-gray7)',
    gray8: 'var(--expo-color-gray8)',
    gray9: 'var(--expo-color-gray9)',
    gray10: 'var(--expo-color-gray10)',
    gray11: 'var(--expo-color-gray11)',
    gray12: 'var(--expo-color-gray12)',
  },
};

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
      hover: palette.light.gray10,
      icon: palette.light.gray2,
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
      background: palette.dark.blue10,
      border: palette.dark.blue10,
      hover: palette.dark.blue9,
      icon: palette.dark.blue3,
      text: palette.black,
      disabled: {
        background: palette.dark.blue8,
        border: palette.dark.blue8,
        text: palette.black,
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
