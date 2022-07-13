import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'G2Plot Vue',
  description: 'G2Plot for Vue',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Demo', link: '/demo/' },
      { text: 'Github', link: 'https://github.com/open-data-plan/g2plot-vue' },
      {
        text: 'Changelog',
        link: 'https://github.com/open-data-plan/g2plot-vue/blob/master/CHANGELOG.md',
      },
      { text: 'G2Plot', link: 'https://g2plot.antv.vision' },
    ],
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2020-present Open Data Plan',
    },
  },
})
