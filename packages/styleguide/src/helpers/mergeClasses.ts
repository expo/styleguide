import { extendTailwindMerge } from 'tailwind-merge';

type AdditionalClassGroupIds = 'icon';

export const mergeClasses = extendTailwindMerge<AdditionalClassGroupIds>({
  extend: {
    classGroups: {
      icon: [{ icon: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] }],
    },
  },
});
