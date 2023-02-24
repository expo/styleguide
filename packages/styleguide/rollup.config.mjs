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
      copy({
        targets: [
          { src: './src/styles/expo-theme.css', dest: 'dist' },
          { src: './src/styles/global.css', dest: 'dist' },
          { src: './tailwind.js', dest: 'dist' },
        ],
      }),
    ],
    external: ['react', '@expo/styleguide-base', 'tailwind-merge'],
  },
];

export default config;
