import postcss from 'rollup-plugin-postcss'
import scssVariable from 'rollup-plugin-sass-variables'

import alias from '@rollup/plugin-alias'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import url from '@rollup/plugin-url'
import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'

import svgr from '@svgr/rollup'

import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: 'src/index.ts',
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
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions,
      include: ['./src/**/*.ts', './src/**/*.tsx'],
    }),
    alias({
      resolve: ['.ts', '.tsx'],
      entries: [
        { find: '@src', replacement: 'src' },
        { find: '@assets', replacement: 'src/assets' },
        { find: '@components', replacement: 'src/components' },
        { find: '@helpers', replacement: 'src/helpers' },
      ],
    }),
    postcss({
      includePaths: ['src/components', 'src/assets/styles'],
      extensions: ['.css', '.scss', '.sass'],
    }),
    scssVariable(),
    nodeResolve({
      extensions,
      mainFields: ['browser', 'jsnext', 'module', 'main'],
    }),
    commonjs({
      extensions,
      namedExports: {
        'node_modules/react-dom/server.browser.js': ['renderToStaticMarkup'],
      },
    }),
    url(),
    json(),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    svgr(),
    terser(),
  ],
  external: [
    'react',
    'react-dom',
    'styled-components',
    'typescript',
    'tslib',
    'faker',
  ],
}
