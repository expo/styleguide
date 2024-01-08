import { extendTailwindMerge } from 'tailwind-merge';

type AdditionalClassGroupIds = 'icon';

export const mergeClasses = extendTailwindMerge<AdditionalClassGroupIds>({
  extend: {
    classGroups: {
      icon: [{ icon: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] }],
    },
  },
});
