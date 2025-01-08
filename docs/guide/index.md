---
title: Guide
---

## What

`G2Plot Vue` is a chart component set powered by [`G2Plot`](https://g2plot.antv.vision/).

## Features

- Fully support `G2Plot` charts, and will support new chart at first time.
- Native support for `TypeScript`.
- **100%** unit test coverage

> Vue 2 has reached EOL and is no longer actively maintained, so we dropped support for Vue 2 and only support Vue 3.

## Install

```
npm install @opd/g2plot-vue
```

## Usage

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
  return <LineChart {...config} chartRef={chartRef} />
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
