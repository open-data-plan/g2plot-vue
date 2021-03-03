// eslint-disable-next-line
const { isVue2, isVue3 } = require('vue-demi')

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
    isVue2 && [
      '@vue/babel-preset-jsx',
      {
        compositionAPI: true,
      },
    ],
  ].filter(Boolean),
  plugins: [isVue3 && '@vue/babel-plugin-jsx'].filter(Boolean),
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
        isVue2 && '@vue/babel-preset-jsx',
      ].filter(Boolean),
      plugins: [isVue3 && '@vue/babel-plugin-jsx'].filter(Boolean),
    },
  },
}
