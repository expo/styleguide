import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

const config = [
  {
    input: 'index.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
    },
    plugins: [
      typescript(),
      terser(),
      copy({
        targets: [
          { src: './src/styles/expo-search-ui.css', dest: 'dist' },
        ],
      }),
    ],
    external: [
      '@expo/styleguide',
      '@expo/styleguide-base',
      '@expo/styleguide-icons',
      '@sanity/client',
      '@sanity/image-url',
      'cmdk',
      'lodash.groupby',
      'react',
      'tailwind-merge'
    ],
  },
];

export default config;
