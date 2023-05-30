import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

let config = [
  {
    input: 'index.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
    },
    plugins: [typescript(), terser()],
    external: ['react', 'tailwind-merge'],
  },
];

if (process.env.STUB) {
  config = [
    {
      input: 'index-stub.js',
      output: {
        file: 'dist/index.js',
        format: 'cjs',
      },
      plugins: [
        copy({
          targets: [{ src: './stub.d.ts', dest: 'dist', rename: 'index.d.ts' }],
        }),
      ],
      external: ['tailwind-merge'],
    },
  ];
}

export default config;
