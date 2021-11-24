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
          href: 'https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css',
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: '"Spoqa Han Sans", sans-serif',
    },
  },
  styleguideDir: 'docs',
  pagePerSection: true,
  sections: [
    // {
    //   name: 'Common',
    //   components: () => ['src/components/Icon/SVGIcon.tsx'],
    // },
    {
      name: 'Controls',
      components: () => [
        'src/components/Button/Button.tsx',
        // 'src/components/Button/TextLink.tsx',
        // 'src/components/SegmentedControl/SegmentedControl.tsx',
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
}
