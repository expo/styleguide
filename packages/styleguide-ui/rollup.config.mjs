import typescript from '@rollup/plugin-typescript';

const config = [
  {
    input: 'index.js',
    output: {
      dir: 'dist',
      format: 'module',
    },
    plugins: [typescript()],
    external: ['react', 'tailwind-merge']
  },
];

export default config;
