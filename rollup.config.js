import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/start.ts',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.cjs',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.rollup.json',
    }),
  ],
  external: [
    'fs',
    'path',
    'http',
    'https',
    'url',
    'crypto',
    'stream',
    'util',
    'events',
    'buffer',
    'querystring',
    'os',
    'express',
  ],
}
