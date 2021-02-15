import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';
import transformPaths from '@zerollup/ts-transform-paths';
import autoprefixer from 'autoprefixer';
import postcssShort from 'postcss-short';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default commandLineArgs => {
  const isProduction = process.env.NODE_ENV === 'production';

  return {
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
    onwarn(warning, warn) {
      if (warning.code === 'EVAL') return;
      warn(warning);
    },
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
      typescript({
        typescript: require('typescript'),
        objectHashIgnoreUnknownHack: true,
        cacheRoot: '.cache',
        tsconfig: 'tsconfig.json',
        transformers: [service => transformPaths(service.getProgram())],
      }),
      postcss({
        extensions: ['.css', '.scss'],
        plugins: [autoprefixer, postcssShort],
        extract: 'dist/styles.global.css',
        modules: { generateScopedName: '[local]' },
        minimize: true,
      }),
      isProduction && strip(),
      isProduction &&
        terser({
          output: {
            comments: false,
          },
        }),
    ],
  };
};
