# @opd/g2plot-vue

> [G2Plot](https://g2plot.antv.vision/) for `Vue`, both `v2` and `v3`, see [documentation](https://g2plot-vue.opd.cool) for more

[![build](https://github.com/open-data-plan/g2plot-vue/workflows/build/badge.svg)](https://github.com/open-data-plan/g2plot-vue/actions?query=workflow%3Abuild)
[![npm](https://img.shields.io/npm/v/@opd/g2plot-vue.svg)](https://www.npmjs.com/package/@opd/g2plot-vue)
[![npm](https://img.shields.io/npm/dm/@opd/g2plot-vue.svg)](https://www.npmjs.com/package/@opd/g2plot-vue)
[![npm](https://img.shields.io/npm/l/@opd/g2plot-vue.svg)](https://www.npmjs.com/package/@opd/g2plot-vue)
[![codecov](https://codecov.io/gh/open-data-plan/g2plot-vue/branch/master/graph/badge.svg)](https://codecov.io/gh/open-data-plan/g2plot-vue)

## Install

```
npm install @opd/g2plot-vue
```

`g2plot-vue` will auto switch export version based on your installed `vue` version, if not work, you can switch by follow:

```bash
node ./node_modules/@opd/g2plot-vue/scripts/postinstall.js
```

## Usage

[![Edit g2plot-vue-basic-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/g2plot-vue-basic-example-uxde9?fontsize=14&hidenavigation=1&theme=dark)

### jsx

```tsx
import { defineComponent, ref } from 'vue'
import { LineChart, LineChartProps } from '@opd/g2plot-vue'

const config: LineChartProps = {
  height: 350,
  autoFit: true,
  xField: 'year',
  yField: 'value',
  smooth: true,
  meta: {
    value: {
      max: 15,
    },
  },
  data: [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 11 },
  ],
}

export default defineComponent(() => {
  const chartRef = ref(null)
  return () => <LineChart {...config} chartRef={chartRef} />
})
```

### template

```vue
<template>
  <line-chart v-bind="config" />
</template>
<script>
import Vue from 'vue'
import { LineChart } from '@opd/g2plot-vue'

Vue.use(LineChart)

export default {
  data() {
    return {
      config: {
        height: 350,
        autoFit: true,
        xField: 'year',
        yField: 'value',
        smooth: true,
        meta: {
          value: {
            max: 15,
          },
        },
        data: [
          { year: '1991', value: 3 },
          { year: '1992', value: 4 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 5 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 6 },
          { year: '1997', value: 7 },
          { year: '1998', value: 9 },
          { year: '1999', value: 11 },
        ],
      },
    }
  },
}
</script>
```

## API

All config defined in `G2Plot` [document](https://g2plot.antv.vision/zh/docs/manual/introduction) can be used as `props` or `attrs`

## Develop

```
npm install
npm run build
```
