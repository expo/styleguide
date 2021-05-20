export const theme = {
  background: {
    default: 'var(--expo-theme-background-default)',
    canvas: 'var(--expo-theme-background-canvas)',
    secondary: 'var(--expo-theme-background-secondary)',
    tertiary: 'var(--expo-theme-background-tertiary)',
    quaternary: 'var(--expo-theme-background-quaternary)',
    error: 'var(--expo-theme-background-error)',
    warning: 'var(--expo-theme-background-warning)',
    success: 'var(--expo-theme-background-success)',
    overlay: 'var(--expo-theme-background-overlay)',
  },
  border: {
    default: 'var(--expo-theme-border-default)',
    error: 'var(--expo-theme-border-error)',
    warning: 'var(--expo-theme-border-warning)',
    success: 'var(--expo-theme-border-success)',
  },
  button: {
    primary: {
      background: 'var(--expo-theme-button-primary-background)',
      foreground: 'var(--expo-theme-button-primary-foreground)',
    },
    secondary: {
      background: 'var(--expo-theme-button-secondary-background)',
      foreground: 'var(--expo-theme-button-secondary-foreground)',
    },
    tertiary: {
      background: 'var(--expo-theme-button-tertiary-background)',
      foreground: 'var(--expo-theme-button-tertiary-foreground)',
    },
    transparent: {
      background: 'var(--expo-theme-button-transparent-background)',
      foreground: 'var(--expo-theme-button-transparent-foreground)',
    },
    ghost: {
      background: 'var(--expo-theme-button-ghost-background)',
      foreground: 'var(--expo-theme-button-ghost-foreground)',
      border: 'var(--expo-theme-button-ghost-border)',
    },
  },
  link: { default: 'var(--expo-theme-link-default)' },
  status: {
    default: 'var(--expo-theme-status-default)',
    error: 'var(--expo-theme-status-error)',
    warning: 'var(--expo-theme-status-warning)',
    success: 'var(--expo-theme-status-success)',
    info: 'var(--expo-theme-status-info)',
  },
  text: {
    default: 'var(--expo-theme-text-default)',
    secondary: 'var(--expo-theme-text-secondary)',
    error: 'var(--expo-theme-text-error)',
    warning: 'var(--expo-theme-text-warning)',
    success: 'var(--expo-theme-text-success)',
  },
  icon: {
    default: 'var(--expo-theme-icon-default)',
    secondary: 'var(--expo-theme-icon-secondary)',
  },
  code: {
    keyword: 'var(--expo-theme-code-keyword)',
    builtin: 'var(--expo-theme-code-builtin)',
    property: 'var(--expo-theme-code-property)',
    comment: 'var(--expo-theme-code-comment)',
    punctuation: 'var(--expo-theme-code-punctuation)',
    operator: 'var(--expo-theme-code-operator)',
    regex: 'var(--expo-theme-code-regex)',
    string: 'var(--expo-theme-code-string)',
    before: 'var(--expo-theme-code-before)',
  },
  highlight: {
    accent: 'var(--expo-theme-highlight-accent)',
    emphasis: 'var(--expo-theme-highlight-emphasis)',
  },
};

export const lightTheme = {
  background: {
    default: 'var(--expo-color-base-light-white',
    canvas: 'var(--expo-color-base-light-gray-000',
    secondary: 'var(--expo-color-base-light-gray-100)',
    tertiary: 'var(--expo-color-base-light-gray-200)',
    quaternary: 'var(--expo-color-base-light-gray-300)',
    error: 'var(--expo-color-base-light-red-100)',
    warning: 'var(--expo-color-base-light-yellow-100)',
    success: 'var(--expo-color-base-light-green-100)',
    overlay: 'var(--expo-color-base-light-white',
  },
  border: {
    default: 'var(--expo-color-base-light-gray-300)',
    error: 'var(--expo-color-base-light-red-300)',
    success: 'var(--expo-color-base-light-green-300)',
    warning: 'var(--expo-color-base-light-yellow-300)',
  },
  button: {
    primary: {
      background: 'var(--expo-color-base-light-primary-500)',
      foreground: 'var(--expo-color-base-light-white)',
    },
    secondary: {
      background: 'var(--expo-color-base-light-gray-200)',
      foreground: 'var(--expo-color-base-light-black)',
    },
    tertiary: {
      background: 'var(--expo-color-base-light-black',
      foreground: 'var(--expo-color-base-light-white)',
    },
    transparent: {
      background: 'transparent',
      foreground: 'var(--expo-color-base-light-black)',
    },
    ghost: {
      background: 'transparent',
      foreground: 'var(--expo-color-base-light-gray-800)',
      border: 'var(--expo-color-base-light-gray-400)',
    },
  },
  icon: {
    default: 'var(--expo-color-base-light-gray-700)',
    secondary: 'var(--expo-color-base-light-gray-500)',
  },
  link: {
    default: 'var(--expo-color-base-light-primary-500)',
  },
  status: {
    default: 'var(--expo-color-base-light-gray-500)',
    error: 'var(--expo-color-base-light-red-500)',
    warning: 'var(--expo-color-base-light-yellow-500)',
    success: 'var(--expo-color-base-light-green-500)',
    info: 'var(--expo-color-base-light-blue-500)',
  },
  text: {
    default: 'var(--expo-color-base-light-black)',
    secondary: 'var(--expo-color-base-light-gray-700)',
    error: 'var(--expo-color-base-light-red-600)',
    warning: 'var(--expo-color-base-light-yellow-900)',
    success: 'var(--expo-color-base-light-green-600)',
  },
  code: {
    keyword: 'var(--expo-color-base-light-blue-500)',
    builtin: 'var(--expo-color-base-light-green-600)',
    property: 'var(--expo-color-base-light-red-500)',
    comment: 'var(--expo-color-base-light-gray-600)',
    punctuation: 'var(--expo-color-base-light-gray-700)',
    operator: 'var(--expo-color-base-light-yellow-800)',
    regex: 'var(--expo-color-base-light-orange-600)',
    string: 'var(--expo-color-base-light-yellow-700)',
    before: 'var(--expo-color-base-light-gray-400)',
  },
  highlight: {
    accent: 'var(--expo-color-base-light-primary-300)',
    emphasis: 'var(--expo-color-base-light-yellow-300)',
  },
};

export const darkTheme = {
  background: {
    default: 'var(--expo-color-base-dark-gray-000',
    canvas: 'var(--expo-color-base-dark-gray-100)',
    secondary: 'var(--expo-color-base-dark-gray-200)',
    tertiary: 'var(--expo-color-base-dark-gray-300)',
    quaternary: 'var(--expo-color-base-dark-gray-400)',
    error: 'var(--expo-color-base-dark-red-000',
    warning: 'var(--expo-color-base-dark-yellow-000',
    success: 'var(--expo-color-base-dark-green-000',
    overlay: 'var(--expo-color-base-dark-gray-100)',
  },
  border: {
    default: 'var(--expo-color-base-dark-gray-400)',
    error: 'var(--expo-color-base-dark-red-200)',
    success: 'var(--expo-color-base-dark-green-200)',
    warning: 'var(--expo-color-base-dark-yellow-200)',
  },
  button: {
    primary: {
      background: 'var(--expo-color-base-dark-primary-500)',
      foreground: 'var(--expo-color-base-dark-white',
    },
    secondary: {
      background: 'var(--expo-color-base-dark-gray-300)',
      foreground: 'var(--expo-color-base-dark-white',
    },
    tertiary: {
      background: 'var(--expo-color-base-dark-gray-900)',
      foreground: 'var(--expo-color-base-dark-black',
    },
    transparent: {
      background: 'transparent',
      foreground: 'var(--expo-color-base-dark-gray-800)',
    },
    ghost: {
      background: 'transparent',
      foreground: 'var(--expo-color-base-dark-gray-800)',
      border: 'var(--expo-color-base-dark-gray-400)',
    },
  },
  icon: {
    default: 'var(--expo-color-base-dark-gray-800)',
    secondary: 'var(--expo-color-base-dark-gray-600)',
  },
  link: {
    default: 'var(--expo-color-base-dark-primary-700)',
  },
  status: {
    default: 'var(--expo-color-base-dark-gray-400)',
    error: 'var(--expo-color-base-dark-red-500)',
    warning: 'var(--expo-color-base-dark-yellow-500)',
    success: 'var(--expo-color-base-dark-green-500)',
    info: 'var(--expo-color-base-dark-blue-500)',
  },
  text: {
    default: 'var(--expo-color-base-dark-gray-800)',
    secondary: 'var(--expo-color-base-dark-gray-600)',
    error: 'var(--expo-color-base-dark-red-600)',
    warning: 'var(--expo-color-base-dark-yellow-900)',
    success: 'var(--expo-color-base-dark-green-600)',
  },
  code: {
    keyword: 'var(--expo-color-base-dark-blue-600)',
    builtin: 'var(--expo-color-base-dark-green-600)',
    property: 'var(--expo-color-base-dark-red-600)',
    comment: 'var(--expo-color-base-dark-gray-600)',
    punctuation: 'var(--expo-color-base-dark-gray-700)',
    operator: 'var(--expo-color-base-dark-yellow-800)',
    regex: 'var(--expo-color-base-dark-orange-600)',
    string: 'var(--expo-color-base-dark-yellow-700)',
    before: 'var(--expo-color-base-dark-gray-400)',
  },
  highlight: {
    accent: 'var(--expo-color-base-dark-primary-700)',
    emphasis: 'var(--expo-color-base-dark-yellow-300)',
  },
};
