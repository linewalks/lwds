import { babel } from '@rollup/plugin-babel'
import alias from '@rollup/plugin-alias'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'
import url from '@rollup/plugin-url'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

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
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts', '.tsx'],
    }),
    alias({
      entries: [
        { find: '@src', replacement: 'src' },
        { find: '@assets', replacement: 'src/assets' },
        { find: '@components', replacement: 'src/components' },
        { find: '@helpers', replacement: 'src/helpers' }
      ],
    }),
    postcss({
      includePaths: ['src/components', 'src/assets/styles'],
      extensions: ['.css', '.scss', '.sass'],
    }),
    nodeResolve({
      mainFields: ['browser', 'jsnext', 'module', 'main'],
    }),
    commonjs({ extensions: ['.js', '.ts', '.tsx'] }),
    url(),
    json(),
    typescript(),
  ],
  external: [
    'react',
    'react-dom',
    'styled-components',
    'd3',
    'recharts',
    'antd',
    'typescript',
    'tslib',
  ],
}
