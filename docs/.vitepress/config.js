const path = require('path')

module.exports = {
  root: path.resolve(process.cwd(), './docs'),
  title: 'G2Plot Vue',
  description: 'G2Plot for Vue',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: ['/', ['/guide/', 'Guide']],
  },
}
