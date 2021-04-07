/* eslint-disable @typescript-eslint/no-var-requires */
const vue = require('vue')
const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

const version = vue.version
const isVue2 = +version.split('.')[0] === 2

if (isVue2) {
  console.log('[G2Plot-Vue] Switch main field for Vue 2')
  pkg.main = 'lib2/index.js'
  pkg.module = 'es2/index.js'
} else {
  console.log('[G2Plot-Vue] Switch main field for Vue 3')
  pkg.main = 'lib/index.js'
  pkg.module = 'es/index.js'
}

fs.writeFileSync(
  path.resolve(__dirname, '../package.json'),
  JSON.stringify(pkg, null, 2),
  {
    encoding: 'utf-8',
  }
)
