const path = require('path')
const { version } = require('./package')
const webpackConfig = require('./webpack.config.js')

const ignore = [
  '**/__tests__/**',
  '**/*.test.{js,jsx,ts,tsx}',
  '**/*.spec.{js,jsx,ts,tsx}',
  '**/*.d.ts',
]

module.exports = {
  title: 'LWDS Guide',
  assetsDir: './src/assets/',
  require: [path.resolve(__dirname, 'src/assets/styles/reset.scss')],
  components: [
    // 'src/assets/styles/font.ts',
    // 'src/components/**/*.{js,jsx,ts,tsx}',
  ],
  moduleAliases: {
    '@src': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@helpers': path.resolve(__dirname, 'src/helpers'),
    '@types': path.resolve(__dirname, 'src/types'),
  },
  version,
  ignore: ignore.concat([]),
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css',
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: '"Spoqa Han Sans Neo"',
    },
  },
  styleguideDir: 'docs',
  pagePerSection: true,
  sections: [
    {
      name: 'Foundation',
      sections: [
        {
          name: 'Color',
          components: () => [
            'src/components/Color/Core.tsx',
            'src/components/Color/Status.tsx',
            'src/components/Color/Theme.tsx',
            'src/components/Color/VisualColor.tsx',
            'src/components/Color/ChartColor.tsx',
          ],
        },
        {
          name: 'Icon',
          content: 'src/components/Icon/Icon.md',
          components: () => [
            'src/components/Icon/IconSet/Navigation.tsx',
            'src/components/Icon/IconSet/Action.tsx',
            'src/components/Icon/IconSet/Domain.tsx',
            'src/components/Icon/IconSet/Formula.tsx',
            'src/components/Icon/IconSet/Specific.tsx',
          ],
        },
        {
          name: 'Shadow',
          content: 'src/components/Shadow/Shadow.md',
        },
        {
          name: 'Spacing',
          content: 'src/components/Spacing/Spacing.md',
        },
        {
          name: 'Size',
          content: 'src/components/Size/Size.md',
        },
        {
          name: 'Typography',
          content: 'src/components/Typography/Typography.md',
        },
      ],
    },
    {
      name: 'Component',
      sections: [
        {
          name: 'Button',
          content: 'src/components/Button/Button.md',
        },
        {
          name: 'Checkbox',
          content: 'src/components/Checkbox/Checkbox.md',
        },
        {
          name: 'Dropdown',
          content: 'src/components/Dropdown/Dropdown.md',
        },
        {
          name: 'ProgressBar',
          content: 'src/components/ProgressBar/ProgressBar.md',
        },
        {
          name: 'Radio',
          content: 'src/components/Radio/Radio.md',
        },
        {
          name: 'Tabs',
          content: 'src/components/Tabs/Tabs.md',
        },
        {
          name: 'Toast',
          content: 'src/components/Toast/Toast.md',
        },
        {
          name: 'Tooltip',
          content: 'src/components/Tooltip/Tooltip.md',
        },
      ],
    },
  ],
  propsParser: (filePath, source, resolver, handlers) => {
    const { ext } = path.parse(filePath)
    return ext === '.tsx'
      ? require('react-docgen-typescript')
          .withCustomConfig(`${process.cwd()}/tsconfig.json`)
          .parse(filePath, source, resolver, handlers)
      : require('react-docgen').parse(source, resolver, handlers)
  },
  webpackConfig: {
    mode: webpackConfig.mode,
    module: webpackConfig.module,
    plugins: webpackConfig.plugins,
    resolve: webpackConfig.resolve,
  },
}
