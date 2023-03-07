import { extendTailwindMerge } from 'tailwind-merge';

export const mergeClasses = extendTailwindMerge({
  classGroups: {
    icon: [{ icon: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] }],
  },
});
