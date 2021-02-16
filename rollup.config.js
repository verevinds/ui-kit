import postcss from 'rollup-plugin-postcss';
import postcssShort from 'postcss-short';
import autoprefixer from 'autoprefixer';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import typescript from 'rollup-plugin-typescript2';
import transformPaths from '@zerollup/ts-transform-paths';
import external from 'rollup-plugin-peer-deps-external';
import strip from '@rollup/plugin-strip';

import json from '@rollup/plugin-json';

import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    builtins(),
    resolve({
      preferBuiltins: false,
    }),
    commonjs({
      extensions: ['.js', '.ts'],
      include: /node_modules/,
      ignoreGlobal: true,
    }),
    globals(),
    json(),
    postcss({
      extensions: ['.css', '.scss'],
      plugins: [autoprefixer, postcssShort],
      extract: 'styles.global.css',
      modules: { generateScopedName: '[local]' },
      minimize: true,
    }),
    typescript({
      typescript: require('typescript'),
      objectHashIgnoreUnknownHack: true,
      cacheRoot: '.cache',
      tsconfig: 'tsconfig.json',
      transformers: [service => transformPaths(service.getProgram())],
    }),
    strip(),
    terser({
      output: {
        comments: false,
      },
    }),
  ],
  external: ['react', 'react-dom'],
};
