// eslint-disable-next-line

module.exports = {
  presets: [
    [
      '@vue/babel-preset-app',
      {
        modules: false,
        corejs: 3,
        jsx: false,
        absoluteRuntime: false,
        targets: {
          browsers: 'last 2 versions, IE >= 11',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: ['@vue/babel-plugin-jsx'],
  env: {
    commonjs: {
      presets: [
        [
          '@vue/babel-preset-app',
          {
            modules: 'commonjs',
            corejs: 3,
            jsx: false,
            absoluteRuntime: false,
            targets: {
              browsers: 'last 2 versions, IE >= 11',
            },
          },
        ],
        '@babel/preset-typescript',
      ],
      plugins: ['@vue/babel-plugin-jsx'],
    },
  },
}
