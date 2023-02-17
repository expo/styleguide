import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import commonjs from '@rollup/plugin-commonjs';

const config = [
  {
    input: 'index.ts',
    output: {
      dir: 'dist',
      format: 'module',
    },
    plugins: [
      typescript(),
      copy({
        targets: [
          { src: './src/styles/expo-theme.css', dest: 'dist' },
          { src: './tailwind.js', dest: 'dist' },
        ],
      }),
    ],
    external: ['react', '@expo/styleguide-base', 'tailwind-merge'],
  },
];

export default config;
