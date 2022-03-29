const path = require('path')
const { version } = require('./package')

const ignore = [
  '**/__tests__/**',
  '**/*.test.{js,jsx,ts,tsx}',
  '**/*.spec.{js,jsx,ts,tsx}',
  '**/*.d.ts',
]

module.exports = {
  title: 'LWDS Guide',
  assetsDir: './src/assets/',
  require: [
    // path.resolve(__dirname, 'src/assets/styles/reset.css'),
    // path.resolve(__dirname, 'src/assets/styles/spoqaHansans.css'),
  ],
  components: [
    // 'src/assets/styles/font.ts',
    // 'src/components/**/*.{js,jsx,ts,tsx}',
  ],
  moduleAliases: {
    '@src': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@helpers': path.resolve(__dirname, 'src/helpers'),
  },
  version,
  ignore: ignore.concat([]),
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: '/src/assets/styles/font/SpoqaHanSansNeo.scss',
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
          name: 'Icon',
          content: 'src/components/Icon/Icon.md',
          components: () => [
            'src/components/Icon/IconSet/Navigation.tsx',
            'src/components/Icon/IconSet/Action.tsx',
            'src/components/Icon/IconSet/Domain.tsx',
            'src/components/Icon/IconSet/Specific.tsx',
            'src/components/Icon/IconSet/Toggle.tsx',
          ],
        },
      ],
    },
    // {
    //   name: 'Forms',
    //   components: () => [
    //     'src/components/Forms/Checkbox.tsx',
    //     'src/components/Forms/Radio.tsx',
    //     'src/components/Forms/TextInput.tsx',
    //     'src/components/Forms/Select.tsx',
    //   ],
    // },
    // {
    //   name: 'Tabs',
    //   components: () => ['src/components/Tabs/Tabs.tsx'],
    // },
    // {
    //   name: 'Menu',
    //   components: () => ['src/components/Menu/Dropdown/Dropdown.tsx'],
    // },
    // {
    //   name: 'Advanced',
    //   components: () => [
    //     'src/components/Search/SearchBar.tsx',
    //     'src/components/Tooltip/Tooltip.tsx',
    //     'src/components/ProgressBar/ProgressBar.tsx',
    //   ],
    // },
  ],
  propsParser: (filePath, source, resolver, handlers) => {
    const { ext } = path.parse(filePath)
    return ext === '.tsx'
      ? require('react-docgen-typescript')
          .withCustomConfig(`${process.cwd()}/tsconfig.json`)
          .parse(filePath, source, resolver, handlers)
      : require('react-docgen').parse(source, resolver, handlers)
  },
}
