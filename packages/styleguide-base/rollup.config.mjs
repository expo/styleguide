import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const config = [
  {
    input: 'index.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
    },
    plugins: [
      typescript(),
      terser()
    ],
    external: ['@radix-ui/colors'],
  },
];

export default config;
