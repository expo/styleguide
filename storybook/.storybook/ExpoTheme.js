import { create } from '@storybook/theming';
import { typography } from "../../packages/styleguide/src";

export default create({
  base: 'dark',

  appContentBg: 'transparent',

  fontBase: typography.fontFaces.regular,
  fontCode: typography.fontFaces.mono,

  brandTitle: 'Expo Styleguide',
});