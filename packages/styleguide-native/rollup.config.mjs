import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const config = [
  {
    input: 'index.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
    },
    plugins: [typescript(), terser()],
    external: ['react', 'react-native-svg'],
  },
];

export default config;
