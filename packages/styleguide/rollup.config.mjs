import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

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
        targets: [{ src: 'src/styles/expo-theme.css', dest: 'dist' }],
      }),
    ],
    external: ['react', '@expo/styleguide-base'],
  },
];

export default config;
