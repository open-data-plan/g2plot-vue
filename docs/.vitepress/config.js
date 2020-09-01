const path = require('path')

module.exports = {
  root: path.resolve(process.cwd(), './docs'),
  title: 'G2Plot Vue',
  description: 'G2Plot for Vue',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/open-data-plan/g2plot-vue' },
    ],
    sidebar: 'auto',
  },
}
