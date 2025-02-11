import { extendTailwindMerge } from 'tailwind-merge';

type AdditionalClassGroupIds = 'icon' | 'heading';

export const mergeClasses = extendTailwindMerge<AdditionalClassGroupIds>({
  extend: {
    classGroups: {
      icon: [{ icon: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] }],
      heading: [{ heading: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'] }],
    },
  },
});
