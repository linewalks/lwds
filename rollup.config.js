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

const extensions = ['.js', '.jsx', '.ts', '.tsx']

function commonPlugins(inputPath) {
  return [
    external(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions,
      include: [`${inputPath}/*.ts`, `${inputPath}/*.tsx`],
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
      modules: false,
      extract: true,
      minimize: true,
      includePaths: inputPath,
      extensions: ['.css', '.scss', '.sass'],
    }),
    scssVariable(),
    nodeResolve({
      extensions,
      mainFields: ['browser', 'jsnext', 'module', 'main'],
    }),
    commonjs({
      include: ['node_modules/**', 'src/assets/styles/**'],
      extensions,
      namedExports: {
        'node_modules/react-dom/server.browser.js': ['renderToStaticMarkup'],
      },
    }),
    url(),
    json(),
    typescript({
      tsconfigDefaults: { compilerOptions: { declaration: true } },
      tsconfig: 'tsconfig.json',
      tsconfigOverride: {
        include: [`typings`, `${inputPath}/*.ts`, `${inputPath}/*.tsx`],
      },
    }),
    svgr(),
    terser(),
  ]
}

function commonExternal() {
  return [
    'react',
    'react-dom',
    'styled-components',
    'typescript',
    'tslib',
    'faker',
  ]
}

const bundlePath = [
  { input: 'src', output: 'dist' }, // import {} from 'lwds'
  {
    input: 'src/components/Icon/Icons',
    output: 'dist/icons', // import {} from 'lwds/icons'
  },
]

export default [
  // default setting build
  ...bundlePath.map(({ input, output }) => ({
    input: `${input}/index.ts`,
    output: [
      {
        file: `${output}/index.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${output}/index.esm.js`,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: commonPlugins(input, output),
    external: commonExternal(),
  })),

  // custom setting build
  {
    input: 'src/assets/styles/index.js',
    output: [
      {
        file: `dist/styles/index.js`, // import {} from 'lwds/styles'
        format: 'cjs',
        sourcemap: true,
        exports: 'default',
      },
      {
        file: `dist/styles/index.esm.js`,
        format: 'esm',
        sourcemap: true,
        exports: 'default',
      },
    ],
    plugins: commonPlugins('src/assets/styles', 'dist/styles'),
    external: commonExternal(),
  },
  {
    input: 'src/assets/styles/index.scss',
    output: {
      file: 'dist/typography.css',
      format: 'es',
    },
    plugins: [
      postcss({
        modules: false,
        extract: true,
      }),
    ],
  },
]
