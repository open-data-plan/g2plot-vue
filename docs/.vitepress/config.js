const path = require('path')

module.exports = {
  root: path.resolve(process.cwd(), './docs'),
  title: 'G2Plot Vue',
  description: 'G2Plot for Vue',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/open-data-plan/g2plot-vue' },
      {
        text: 'Changelog',
        link:
          'https://github.com/open-data-plan/g2plot-vue/blob/master/CHANGELOG.md',
      },
      { text: 'G2Plot', link: 'https://g2plot.antv.vision' },
    ],
    sidebar: 'auto',
  },
}
