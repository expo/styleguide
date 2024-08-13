const plugin = require('tailwindcss/plugin');

const palette = {
  'palette-white': 'var(--expo-color-white)',
  'palette-black': 'var(--expo-color-black)',
  'palette-green1': 'var(--green1)',
  'palette-green2': 'var(--green2)',
  'palette-green3': 'var(--green3)',
  'palette-green4': 'var(--green4)',
  'palette-green5': 'var(--green5)',
  'palette-green6': 'var(--green6)',
  'palette-green7': 'var(--green7)',
  'palette-green8': 'var(--green8)',
  'palette-green9': 'var(--green9)',
  'palette-green10': 'var(--green10)',
  'palette-green11': 'var(--green11)',
  'palette-green12': 'var(--green12)',
  'palette-purple1': 'var(--purple1)',
  'palette-purple2': 'var(--purple2)',
  'palette-purple3': 'var(--purple3)',
  'palette-purple4': 'var(--purple4)',
  'palette-purple5': 'var(--purple5)',
  'palette-purple6': 'var(--purple6)',
  'palette-purple7': 'var(--purple7)',
  'palette-purple8': 'var(--purple8)',
  'palette-purple9': 'var(--purple9)',
  'palette-purple10': 'var(--purple10)',
  'palette-purple11': 'var(--purple11)',
  'palette-purple12': 'var(--purple12)',
  'palette-pink1': 'var(--pink1)',
  'palette-pink2': 'var(--pink2)',
  'palette-pink3': 'var(--pink3)',
  'palette-pink4': 'var(--pink4)',
  'palette-pink5': 'var(--pink5)',
  'palette-pink6': 'var(--pink6)',
  'palette-pink7': 'var(--pink7)',
  'palette-pink8': 'var(--pink8)',
  'palette-pink9': 'var(--pink9)',
  'palette-pink10': 'var(--pink10)',
  'palette-pink11': 'var(--pink11)',
  'palette-pink12': 'var(--pink12)',
  'palette-orange1': 'var(--orange1)',
  'palette-orange2': 'var(--orange2)',
  'palette-orange3': 'var(--orange3)',
  'palette-orange4': 'var(--orange4)',
  'palette-orange5': 'var(--orange5)',
  'palette-orange6': 'var(--orange6)',
  'palette-orange7': 'var(--orange7)',
  'palette-orange8': 'var(--orange8)',
  'palette-orange9': 'var(--orange9)',
  'palette-orange10': 'var(--orange10)',
  'palette-orange11': 'var(--orange11)',
  'palette-orange12': 'var(--orange12)',
  'palette-yellow1': 'var(--yellow1)',
  'palette-yellow2': 'var(--yellow2)',
  'palette-yellow3': 'var(--yellow3)',
  'palette-yellow4': 'var(--yellow4)',
  'palette-yellow5': 'var(--yellow5)',
  'palette-yellow6': 'var(--yellow6)',
  'palette-yellow7': 'var(--yellow7)',
  'palette-yellow8': 'var(--yellow8)',
  'palette-yellow9': 'var(--yellow9)',
  'palette-yellow10': 'var(--yellow10)',
  'palette-yellow11': 'var(--yellow11)',
  'palette-yellow12': 'var(--yellow12)',
  'palette-blue1': 'var(--blue1)',
  'palette-blue2': 'var(--blue2)',
  'palette-blue3': 'var(--blue3)',
  'palette-blue4': 'var(--blue4)',
  'palette-blue5': 'var(--blue5)',
  'palette-blue6': 'var(--blue6)',
  'palette-blue7': 'var(--blue7)',
  'palette-blue8': 'var(--blue8)',
  'palette-blue9': 'var(--blue9)',
  'palette-blue10': 'var(--blue10)',
  'palette-blue11': 'var(--blue11)',
  'palette-blue12': 'var(--blue12)',
  'palette-red1': 'var(--red1)',
  'palette-red2': 'var(--red2)',
  'palette-red3': 'var(--red3)',
  'palette-red4': 'var(--red4)',
  'palette-red5': 'var(--red5)',
  'palette-red6': 'var(--red6)',
  'palette-red7': 'var(--red7)',
  'palette-red8': 'var(--red8)',
  'palette-red9': 'var(--red9)',
  'palette-red10': 'var(--red10)',
  'palette-red11': 'var(--red11)',
  'palette-red12': 'var(--red12)',
  'palette-gray1': 'var(--slate1)',
  'palette-gray2': 'var(--slate2)',
  'palette-gray3': 'var(--slate3)',
  'palette-gray4': 'var(--slate4)',
  'palette-gray5': 'var(--slate5)',
  'palette-gray6': 'var(--slate6)',
  'palette-gray7': 'var(--slate7)',
  'palette-gray8': 'var(--slate8)',
  'palette-gray9': 'var(--slate9)',
  'palette-gray10': 'var(--slate10)',
  'palette-gray11': 'var(--slate11)',
  'palette-gray12': 'var(--slate12)',
};

const expoTailwindConfig = {
  safelist: ['icon-md', 'text-icon-default'],
  darkMode: ['class', '[class*="dark-theme"]'],
  theme: {
    borderRadius: {
      none: 0,
      xs: 2,
      sm: 4,
      md: 6,
      lg: 10,
      xl: 16,
      '2xl': 20,
      '3xl': 24,
      full: 9999,
    },
    backgroundColor: {
      default: 'var(--expo-theme-background-default)',
      screen: 'var(--expo-theme-background-screen)',
      subtle: 'var(--expo-theme-background-subtle)',
      element: 'var(--expo-theme-background-element)',
      hover: 'var(--expo-theme-background-hover)',
      selected: 'var(--expo-theme-background-selected)',
      overlay: 'var(--expo-theme-background-overlay)',
      success: 'var(--expo-theme-background-success)',
      warning: 'var(--expo-theme-background-warning)',
      danger: 'var(--expo-theme-background-danger)',
      info: 'var(--expo-theme-background-info)',
      transparent: 'transparent',

      'button-primary': 'var(--expo-theme-button-primary-background)',
      'button-primary-hover': 'var(--expo-theme-button-primary-hover)',
      'button-primary-disabled': 'var(--expo-theme-button-primary-disabled-background)',
      'button-primary-destructive': 'var(--expo-theme-button-primary-destructive-background)',
      'button-primary-destructive-hover': 'var(--expo-theme-button-primary-destructive-hover)',
      'button-primary-destructive-disabled': 'var(--expo-theme-button-primary-destructive-disabled-background)',

      'button-secondary': 'var(--expo-theme-button-secondary-background)',
      'button-secondary-hover': 'var(--expo-theme-button-secondary-hover)',
      'button-secondary-disabled': 'var(--expo-theme-button-secondary-disabled-background)',
      'button-secondary-destructive': 'var(--expo-theme-button-secondary-destructive-background)',
      'button-secondary-destructive-hover': 'var(--expo-theme-button-secondary-destructive-hover)',
      'button-secondary-destructive-disabled': 'var(--expo-theme-button-secondary-destructive-disabled-background)',

      'button-tertiary': 'var(--expo-theme-button-tertiary-background)',
      'button-tertiary-hover': 'var(--expo-theme-button-tertiary-hover)',
      'button-tertiary-disabled': 'var(--expo-theme-button-tertiary-disabled-background)',

      'button-quaternary': 'var(--expo-theme-button-quaternary-background)',
      'button-quaternary-hover': 'var(--expo-theme-button-quaternary-hover)',
      'button-quaternary-disabled': 'var(--expo-theme-button-quaternary-disabled-background)',

      ...palette,
    },
    borderColor: {
      default: 'var(--expo-theme-border-default)',
      secondary: 'var(--expo-theme-border-secondary)',
      success: 'var(--expo-theme-border-success)',
      warning: 'var(--expo-theme-border-warning)',
      danger: 'var(--expo-theme-border-danger)',
      info: 'var(--expo-theme-border-info)',
      transparent: 'transparent',

      'button-primary': 'var(--expo-theme-button-primary-border)',
      'button-primary-disabled': 'var(--expo-theme-button-primary-disabled-border)',
      'button-primary-destructive': 'var(--expo-theme-button-primary-destructive-border)',
      'button-primary-destructive-disabled': 'var(--expo-theme-button-primary-destructive-disabled-border)',

      'button-secondary': 'var(--expo-theme-button-secondary-border)',
      'button-secondary-disabled': 'var(--expo-theme-button-secondary-disabled-border)',
      'button-secondary-destructive': 'var(--expo-theme-button-secondary-destructive-border)',
      'button-secondary-destructive-disabled': 'var(--expo-theme-button-secondary-destructive-disabled-border)',

      'button-tertiary': 'var(--expo-theme-button-tertiary-border)',
      'button-tertiary-disabled': 'var(--expo-theme-button-tertiary-disabled-border)',

      'button-quaternary': 'var(--expo-theme-button-quaternary-border)',
      'button-quaternary-disabled': 'var(--expo-theme-button-quaternary-disabled-border)',

      ...palette,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      default: 'var(--expo-theme-text-default)',
      secondary: 'var(--expo-theme-text-secondary)',
      tertiary: 'var(--expo-theme-text-tertiary)',
      quaternary: 'var(--expo-theme-text-quaternary)',
      link: 'var(--expo-theme-text-link)',
      success: 'var(--expo-theme-text-success)',
      warning: 'var(--expo-theme-text-warning)',
      danger: 'var(--expo-theme-text-danger)',
      info: 'var(--expo-theme-text-info)',

      'icon-default': 'var(--expo-theme-icon-default)',
      'icon-secondary': 'var(--expo-theme-icon-secondary)',
      'icon-tertiary': 'var(--expo-theme-icon-tertiary)',
      'icon-quaternary': 'var(--expo-theme-icon-quaternary)',
      'icon-success': 'var(--expo-theme-icon-success)',
      'icon-warning': 'var(--expo-theme-icon-warning)',
      'icon-danger': 'var(--expo-theme-icon-danger)',
      'icon-info': 'var(--expo-theme-icon-info)',

      'button-primary': 'var(--expo-theme-button-primary-text)',
      'button-primary-icon': 'var(--expo-theme-button-primary-icon)',
      'button-primary-disabled': 'var(--expo-theme-button-primary-disabled-text)',
      'button-primary-destructive': 'var(--expo-theme-button-primary-destructive-text)',
      'button-primary-destructive-icon': 'var(--expo-theme-button-primary-destructive-icon)',
      'button-primary-destructive-disabled': 'var(--expo-theme-button-primary-destructive-disabled-text)',

      'button-secondary': 'var(--expo-theme-button-secondary-text)',
      'button-secondary-icon': 'var(--expo-theme-button-secondary-icon)',
      'button-secondary-disabled': 'var(--expo-theme-button-secondary-disabled-text)',
      'button-secondary-destructive': 'var(--expo-theme-button-secondary-destructive-text)',
      'button-secondary-destructive-icon': 'var(--expo-theme-button-secondary-destructive-icon)',
      'button-secondary-destructive-disabled': 'var(--expo-theme-button-secondary-destructive-disabled-text)',

      'button-tertiary': 'var(--expo-theme-button-tertiary-text)',
      'button-tertiary-icon': 'var(--expo-theme-button-tertiary-icon)',
      'button-tertiary-disabled': 'var(--expo-theme-button-tertiary-disabled-text)',

      'button-quaternary': 'var(--expo-theme-button-quaternary-text)',
      'button-quaternary-icon': 'var(--expo-theme-button-quaternary-icon)',
      'button-quaternary-disabled': 'var(--expo-theme-button-quaternary-disabled-text)',

      ...palette,
    },
    gradientColorStops: {
      default: 'var(--expo-theme-background-default)',
      screen: 'var(--expo-theme-background-screen)',
      subtle: 'var(--expo-theme-background-subtle)',
      element: 'var(--expo-theme-background-element)',
      hover: 'var(--expo-theme-background-hover)',
      selected: 'var(--expo-theme-background-selected)',
      overlay: 'var(--expo-theme-background-overlay)',
      success: 'var(--expo-theme-background-success)',
      warning: 'var(--expo-theme-background-warning)',
      danger: 'var(--expo-theme-background-danger)',
      info: 'var(--expo-theme-background-info)',
      transparent: 'transparent',

      ...palette,
    },
    boxShadow: {
      none: 'var(--expo-theme-shadows-none)',
      xs: 'var(--expo-theme-shadows-xs)',
      sm: 'var(--expo-theme-shadows-sm)',
      md: 'var(--expo-theme-shadows-md)',
      lg: 'var(--expo-theme-shadows-lg)',
      xl: 'var(--expo-theme-shadows-xl)',
    },
    fontSize: {
      lg: [
        '18px',
        {
          lineHeight: 1.5,
        },
      ],
      base: [
        '16px',
        {
          lineHeight: 1.625,
          letterSpacing: '-0.011rem',
        },
      ],
      sm: [
        '15px',
        {
          lineHeight: 1.6,
          letterSpacing: '-0.009rem',
        },
      ],
      xs: [
        '14px',
        {
          lineHeight: 1.57,
          letterSpacing: '-0.006rem',
        },
      ],
      '2xs': [
        '13px',
        {
          lineHeight: 1.61,
          letterSpacing: '-0.003rem',
        },
      ],
      '3xs': [
        '12px',
        {
          lineHeight: 1.58,
        },
      ],
    },
    heading: {
      '5xl': {
        fontSize: 'calc(var(--expo-theme-heading-base-font-size) * 3.815)',
        lineHeight: 1.2,
        letterSpacing: '-0.022rem',
      },
      '4xl': {
        fontSize: 'calc(var(--expo-theme-heading-base-font-size) * 3.052)',
        lineHeight: 1.2,
        letterSpacing: '-0.022rem',
      },
      '3xl': {
        fontSize: 'calc(var(--expo-theme-heading-base-font-size) * 2.441)',
        lineHeight: 1.3,
        letterSpacing: '-0.022rem',
      },
      '2xl': {
        fontSize: 'calc(var(--expo-theme-heading-base-font-size) * 1.953)',
        lineHeight: 1.4,
        letterSpacing: '-0.021rem',
      },
      xl: {
        fontSize: 'calc(var(--expo-theme-heading-base-font-size) * 1.563)',
        lineHeight: 1.5,
        letterSpacing: '-0.017rem',
      },
      lg: {
        fontSize: 'calc(var(--expo-theme-heading-base-font-size) * 1.25)',
        lineHeight: 1.5,
        letterSpacing: '-0.017rem',
      },
      base: {
        fontSize: 'calc(var(--expo-theme-heading-base-font-size) * 1)',
        lineHeight: 1.625,
        letterSpacing: '-0.011rem',
      },
      sm: {
        fontSize: 'calc(var(--expo-theme-heading-base-font-size) * 0.8)',
        lineHeight: 1.615,
        letterSpacing: '-0.003rem',
      },
      xs: {
        fontSize: 'calc(var(--expo-theme-heading-base-font-size) * 0.64)',
        lineHeight: 1.58,
      },
    },
    screens: {
      xs: '340px',
      sm: '420px',
      'sm-gutters': '468px',
      md: '740px',
      'md-gutters': '788px',
      lg: '960px',
      'lg-gutters': '1008px',
      xl: '1200px',
      'xl-gutters': '1248px',
      '2xl': '1524px',
      '2xl-gutters': '1572px',
    },
    extend: {
      stroke: {
        'bg-default': 'var(--expo-theme-background-default)',
        'bg-screen': 'var(--expo-theme-background-screen)',
        'bg-subtle': 'var(--expo-theme-background-subtle)',
        'bg-element': 'var(--expo-theme-background-element)',
        'bg-hover': 'var(--expo-theme-background-hover)',
        'bg-selected': 'var(--expo-theme-background-selected)',
        'bg-overlay': 'var(--expo-theme-background-overlay)',
        'bg-success': 'var(--expo-theme-background-success)',
        'bg-warning': 'var(--expo-theme-background-warning)',
        'bg-danger': 'var(--expo-theme-background-danger)',
        'bg-info': 'var(--expo-theme-background-info)',
      },
      fill: {
        'border-default': 'var(--expo-theme-border-default)',
        'border-secondary': 'var(--expo-theme-border-secondary)',
        'border-success': 'var(--expo-theme-border-success)',
        'border-warning': 'var(--expo-theme-border-warning)',
        'border-danger': 'var(--expo-theme-border-danger)',
        'border-info': 'var(--expo-theme-border-info)',
      },
      backgroundColor: {
        'app-cyan': 'var(--expo-color-app-cyan)',
        'app-light-blue': 'var(--expo-color-app-light-blue)',
        'app-dark-blue': 'var(--expo-color-app-dark-blue)',
        'app-indigo': 'var(--expo-color-app-indigo)',
        'app-purple': 'var(--expo-color-app-purple)',
        'app-pink': 'var(--expo-color-app-pink)',
        'app-orange': 'var(--expo-color-app-orange)',
        'app-gold': 'var(--expo-color-app-gold)',
        'app-yellow': 'var(--expo-color-app-yellow)',
        'app-lime': 'var(--expo-color-app-lime)',
        'app-light-green': 'var(--expo-color-app-light-green)',
        'app-dark-green': 'var(--expo-color-app-dark-green)',
      },
      height: {
        15: '3.75rem',
      },
      width: {
        15: '3.75rem',
      },
      size: {
        15: '3.75rem',
      },
      opacity: {
        inherit: 'inherit',
      },
      scale: {
        98: '.98',
        1025: '1.025',
        175: '1.75',
        200: '2.0',
      },
      fontSize: {
        inherit: [
          'inherit',
          {
            lineHeight: 'inherit',
            letterSpacing: 'inherit',
            fontWeight: 'inherit',
          },
        ],
      },
      gridTemplateColumns: {
        'auto-min-1': 'auto',
        'auto-min-2': 'minmax(min-content, auto) min-content',
        'auto-min-3': 'minmax(min-content, auto) repeat(2, min-content)',
        'auto-min-4': 'minmax(min-content, auto) repeat(3, min-content)',
        'auto-min-5': 'minmax(min-content, auto) repeat(4, min-content)',
        'auto-min-6': 'minmax(min-content, auto) repeat(5, min-content)',
        'auto-min-7': 'minmax(min-content, auto) repeat(6, min-content)',
        'auto-min-8': 'minmax(min-content, auto) repeat(7, min-content)',
      },
      transitionDuration: {
        default: '150ms',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        fadeOut: {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
        slideDownAndFade: {
          '0%': {
            opacity: 0,
            transform: 'translateY(8px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        slideRightAndFade: {
          '0%': {
            opacity: 0,
            transform: 'translateX(8px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        slideLeftAndFade: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-8px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        slideUpAndFade: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-8px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.25s ease-out',
        fadeOut: 'fadeOut 0.15s ease-in',
        slideDownAndFade: 'slideDownAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            sm: null,
            base: null,
            lg: null,
            xl: null,
            '2xl': null,
            invert: null,
          },
        },
      }),
    },
  },
  corePlugins: {
    fontFamily: false,
  },
  plugins: [
    plugin(({ addComponents, addVariant, matchUtilities, theme }) => {
      addVariant('hocus', ['&:hover', '&:focus-visible']);
      matchUtilities({ heading: (value) => value }, { values: theme('heading') });
      addComponents({
        '.icon-2xs': {
          height: theme('height.3'),
          width: theme('width.3'),
        },
        '.icon-xs': {
          // note(simek): figure out how to access `h-3.5` using path
          height: '0.875rem',
          width: '0.875rem',
        },
        '.icon-sm': {
          height: theme('height.4'),
          width: theme('width.4'),
        },
        '.icon-md': {
          height: theme('height.5'),
          width: theme('width.5'),
        },
        '.icon-lg': {
          height: theme('height.6'),
          width: theme('width.6'),
        },
        '.icon-xl': {
          height: theme('height.8'),
          width: theme('width.8'),
        },
        '.icon-2xl': {
          height: theme('height.10'),
          width: theme('width.10'),
        },
        '.break-words': { 'word-break': 'break-word' },
        '.wrap-anywhere': { 'overflow-wrap': 'anywhere' },
        '.pause-animation': { 'animation-play-state': 'paused' },
        '.transform-box': { 'transform-box': 'fill-box' },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.variant-numeric-normal': {
          'font-variant-numeric': 'normal',
        },
        '.variant-numeric-slashed': {
          'font-variant-numeric': 'slashed-zero',
        },
        '.variant-numeric-tabular': {
          'font-variant-numeric': 'tabular-nums',
        },
        '.asset-shadow': {
          filter: 'drop-shadow(0 3px 10px rgba(0, 0, 0, 0.12)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.07))',
        },
        '.asset-sm-shadow': {
          filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.08)) drop-shadow(0 1px 4px rgba(0, 0, 0, 0.03))',
        },
      });
    }),
    require('@tailwindcss/typography'),
  ],
};

module.exports = expoTailwindConfig;
