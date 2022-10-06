const {
  theme,
  borderRadius,
  shadows,
  breakpoints,
} = require("@expo/styleguide");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      borderRadius,
      backgroundColor: theme.background,
      borderColor: theme.border,
      colors: {
        ...theme.palette,
        link: theme.link.default,
        status: theme.status,
        code: theme.code,
        icon: theme.icon,
        default: theme.text.default,
        secondary: theme.text.secondary,
        error: theme.text.error,
        warning: theme.text.warning,
        success: theme.text.success,
        info: theme.text.info,
        highlight: theme.highlight,
        project: theme.project,
      },
      boxShadow: shadows,
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        mono: ["Menlo", ...defaultTheme.fontFamily.mono],
      },
      // Based on Major Third (1.250) type scale.
      // Sizes calculated at: https://type-scale.com
      fontSize: {
        "heading-5xl": [
          "calc(var(--expo-theme-header-base-font-size) * 3.815)",
          {
            lineHeight: 1.2,
            letterSpacing: "-0.022rem",
          },
        ],
        "heading-4xl": [
          "calc(var(--expo-theme-header-base-font-size) * 3.052)",
          {
            lineHeight: 1.2,
            letterSpacing: "-0.022rem",
          },
        ],
        "heading-3xl": [
          "calc(var(--expo-theme-header-base-font-size) * 2.441)",
          {
            lineHeight: 1.3,
            letterSpacing: "-0.022rem",
          },
        ],
        "heading-2xl": [
          "calc(var(--expo-theme-header-base-font-size) * 1.953)",
          {
            lineHeight: 1.4,
            letterSpacing: "-0.021rem",
          },
        ],
        "heading-xl": [
          "calc(var(--expo-theme-header-base-font-size) * 1.563)",
          {
            lineHeight: 1.5,
            letterSpacing: "-0.017rem",
          },
        ],
        "heading-lg": [
          "calc(var(--expo-theme-header-base-font-size) * 1.25)",
          {
            lineHeight: 1.5,
            letterSpacing: "-0.017rem",
          },
        ],
        "heading-base": [
          "calc(var(--expo-theme-header-base-font-size) * 1)",
          {
            lineHeight: 1.625,
            letterSpacing: "-0.011rem",
          },
        ],
        "heading-sm": [
          "calc(var(--expo-theme-header-base-font-size) * 0.8)",
          {
            lineHeight: 1.615,
            letterSpacing: "-0.003rem",
          },
        ],
        "heading-xs": [
          "calc(var(--expo-theme-header-base-font-size) * 0.64)",
          {
            lineHeight: 1.58,
          },
        ],
        base: [
          "16px",
          {
            lineHeight: 1.625,
            letterSpacing: "-0.011rem",
          },
        ],
        sm: [
          "15px",
          {
            lineHeight: 1.6,
            letterSpacing: "-0.009rem",
          },
        ],
        xs: [
          "14px",
          {
            lineHeight: 1.57,
            letterSpacing: "-0.006rem",
          },
        ],
        "2xs": [
          "13px",
          {
            lineHeight: 1.61,
            letterSpacing: "-0.003rem",
          },
        ],
        "3xs": [
          "12px",
          {
            lineHeight: 1.58,
          },
        ],
      },
    },
    screens: {
      sm: `${breakpoints.small}px`,
      md: `${breakpoints.medium}px`,
      lg: `${breakpoints.large}px`,
    },
  },
};
