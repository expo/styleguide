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
      terser({
        keep_fnames: /.+ColorMode/
      }),
      copy({
        targets: [
          { src: './src/styles/expo-theme.css', dest: 'dist' },
        ],
      }),
    ],
    external: [
      '@expo/styleguide-base',
      'next/link',
      'react',
      'tailwind-merge'
    ],
  },
];

export default config;
