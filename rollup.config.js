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
        exports: 'named',
        sourcemap: true,
      },

    ],
    plugins: [
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
        extract: 'styles.global.css',
        modules: { generateScopedName: '[local]' },
        minimize: true,
      }),
      isProduction &&
        terser({
          output: {
            comments: false,
          },
        }),
    ],
    external: ['react', 'react-dom']
  };
};
