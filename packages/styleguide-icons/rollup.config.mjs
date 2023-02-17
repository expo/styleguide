import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

let config = [
  {
    input: 'index.ts',
    output: {
      dir: 'dist',
      format: 'module',
    },
    plugins: [typescript()],
    external: ['react'],
  },
];

if (process.env.STUB) {
  config = [
    {
      input: 'index-stub.js',
      output: {
        format: 'module',
        file: 'dist/index.js',
      },
      plugins: [
        copy({
          targets: [{ src: './stub.d.ts', dest: 'dist', rename: 'index.d.ts' }],
        }),
      ],
    },
  ];
}

export default config;
