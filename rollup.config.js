import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import url from '@rollup/plugin-url'
import scssVariable from 'rollup-plugin-sass-variables'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import svgr from '@svgr/rollup'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    },
  ],
  plugins: [
    peerDepsExternal(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts', '.tsx'],
    }),
    alias({
      entries: [
        { find: 'src', replacement: 'src' }
      ]
    }),
    postcss({
      extract: true,
      modules: false,
      use: ['sass']
    }),
    scssVariable(),
    nodeResolve({
      mainFields: ['browser', 'jsnext', 'module', 'main'],
    }),
    commonjs({ extensions: ['.js', '.ts', '.tsx'] }),
    svgr(),
    json(),
    url(),
    typescript()
  ]
}
