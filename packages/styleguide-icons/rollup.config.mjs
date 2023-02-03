import typescript from '@rollup/plugin-typescript';

const config = [
  {
    input: 'index.ts',
    output: {
      dir: 'dist',
      format: 'module',
    },
    plugins: [typescript()],
    external: ['react']
  },
];

export default config;
