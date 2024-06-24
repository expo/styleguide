import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

const baseConfig = {
  input: 'src/index.ts',
  output: {
    name: 'index',
    dir: 'dist',
    format: 'cjs',
    generatedCode: 'es2015',
    exports: 'named',
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  treeshake: 'smallest',
  plugins: [typescript(), terser()],
  external: ['react', 'tailwind-merge'],
};

function getConfig() {
  if (process.env.STUB) {
    return {
      ...baseConfig,
      input: 'src/index-stub.js',
      plugins: [
        copy({
          targets: [{ src: './stub.d.ts', dest: 'dist', rename: 'index.d.ts' }],
        }),
      ],
    };
  }
  return baseConfig;
}

const config = getConfig();

export default config;
