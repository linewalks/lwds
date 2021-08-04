
module.exports = {
  title: 'Hee UI Style Guide',
  assetsDir: 'src/assets/',
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}'
  ],
  pagePerSection: true,
  sections: [
    {
      name: 'Controls',
      components: () => [
        'src/components/Button/Button.tsx',
        'src/components/Button/TextLink.tsx',
        'src/components/SegmentedControl/SegmentedControl.tsx'
      ]
    },
    {
      name: 'Tabs',
      components: () => [
        'src/components/Tabs/Tabs.tsx'
      ]
    }
  ],
}
