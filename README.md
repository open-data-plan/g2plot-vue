# @opd/g2plot-vue

> [G2Plot](https://g2plot.antv.vision/) for React

[![build](https://github.com/open-data-plan/g2plot-vue/workflows/build/badge.svg)](https://github.com/open-data-plan/g2plot-vue/actions?query=workflow%3Abuild)
[![npm](https://img.shields.io/npm/v/@opd/g2plot-vue.svg)](https://www.npmjs.com/package/@opd/g2plot-vue)
[![npm](https://img.shields.io/npm/dm/@opd/g2plot-vue.svg)](https://www.npmjs.com/package/@opd/g2plot-vue)
[![npm](https://img.shields.io/npm/l/@opd/g2plot-vue.svg)](https://www.npmjs.com/package/@opd/g2plot-vue)
[![codecov](https://codecov.io/gh/open-data-plan/g2plot-vue/branch/master/graph/badge.svg)](https://codecov.io/gh/open-data-plan/g2plot-vue)

## Install

```
npm install @opd/g2plot-vue
```

## Usage

```tsx
import { LineChart, LineChartProps } from '@opd/g2plot-vue'

const config: LineChartProps = {
  height: 400,
  title: {
    visible: true,
    text: '配置折线数据点样式',
  },
  description: {
    visible: true,
    text: '自定义配置趋势线上数据点的样式',
  },
  padding: 'auto',
  forceFit: true,
  xField: 'year',
  yField: 'value',
  label: {
    visible: true,
    type: 'point',
  },
  point: {
    visible: true,
    size: 5,
  },
  xAxis: {
    tickCount: 10,
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

export default () => {
  return <LineChart {...config} />
}
```

## API

All config defined in `G2Plot` [document](https://g2plot.antv.vision/zh/docs/manual/introduction) can be used as `props` or `attrs`

## Support Chart

- [x] [`LineChart`](https://g2plot.antv.vision/zh/docs/manual/plots/line)
- [x] [`StepLineChart`](https://g2plot.antv.vision/zh/examples/step-line/multiple)
- [x] [`ScatterChart`](https://g2plot.antv.vision/zh/docs/manual/plots/scatter)
- [x] [`ColumnChart`](https://g2plot.antv.vision/zh/docs/manual/plots/column)
- [x] [`HistogramChart`](https://g2plot.antv.vision/zh/examples/column/histogram)
- [x] [`StackedColumnChart`](https://g2plot.antv.vision/zh/docs/manual/plots/stacked-column)
- [x] [`RangeColumnChart`](https://g2plot.antv.vision/zh/docs/manual/plots/range-column)
- [x] [`PercentStackedColumnChart`](https://g2plot.antv.vision/zh/examples/column/percent-stacked)
- [x] [`GroupedColumnChart`](https://g2plot.antv.vision/zh/docs/manual/plots/grouped-column)
- [x] [`WaterfallChart`](https://g2plot.antv.vision/zh/examples/column/waterfall)
- [x] [`BarChart`](https://g2plot.antv.vision/zh/docs/manual/plots/bar)
- [x] [`StackedBarChart`](https://g2plot.antv.vision/zh/docs/manual/plots/stacked-bar)
- [x] [`RangeBarChart`](https://g2plot.antv.vision/zh/docs/manual/plots/range-bar)
- [x] [`PercentStackedBarChart`](https://g2plot.antv.vision/zh/examples/bar/percent-stacked)
- [x] [`GroupedBarChart`](https://g2plot.antv.vision/zh/docs/manual/plots/grouped-bar)
- [x] [`AreaChart`](https://g2plot.antv.vision/zh/docs/manual/plots/area)
- [x] [`DensityChart`](https://github.com/antvis/G2Plot/blob/master/src/plots/density/index.ts)
- [x] [`StackedAreaChart`](https://g2plot.antv.vision/zh/docs/manual/plots/stacked-area)
- [x] [`PercentStackedAreaChart`](https://g2plot.antv.vision/zh/examples/area/percent-stacked)
- [x] [`BubbleChart`](https://g2plot.antv.vision/zh/docs/manual/plots/bubble)
- [x] [`PieChart`](https://g2plot.antv.vision/zh/docs/manual/plots/pie)
- [x] [`RadarChart`](https://g2plot.antv.vision/zh/docs/manual/plots/radar)
- [x] [`GaugeChart`](https://g2plot.antv.vision/zh/docs/manual/plots/gauge)
- [x] [`HeatmapChart`](https://g2plot.antv.vision/zh/docs/manual/plots/heatmap)
- [x] [`ProgressChart`](https://g2plot.antv.vision/zh/docs/manual/plots/sparkline-progress)
- [x] [`RingProgressChart`](https://g2plot.antv.vision/zh/docs/manual/plots/sparkline-ring-progress)
- [x] [`TinyLineChart`](https://g2plot.antv.vision/zh/docs/manual/plots/sparkline-line)
- [x] [`TinyAreaChart`](https://g2plot.antv.vision/zh/docs/manual/plots/sparkline-area)
- [x] [`TinyColumnChart`](https://g2plot.antv.vision/zh/docs/manual/plots/sparkline-column)
- [x] [`FunnelChart`](https://g2plot.antv.vision/zh/examples/funnel/basic)
- [x] [`LiquidChart`](https://g2plot.antv.vision/zh/examples/liquid/basic)
- [x] [`RoseChart`](https://g2plot.antv.vision/zh/examples/rose/basic)
- [x] [`WordCloudChart`](https://g2plot.antv.vision/zh/examples/word-cloud/basic)
- [x] [`BulletChart`](https://g2plot.antv.vision/zh/examples/bullet/basic)
- [x] [`TreemapChart`](https://g2plot.antv.vision/zh/examples/treemap/rect)
- [x] [`CalendarChart`](https://g2plot.antv.vision/zh/examples/calendar/basic)
- [x] [`DonutChart`](https://g2plot.antv.vision/zh/examples/pie/donut)
- [x] [`StackedRoseChart`](https://g2plot.antv.vision/zh/examples/rose/rose#stacked-rose)
- [x] [`GroupedRoseChart`](https://g2plot.antv.vision/zh/examples/rose/rose#grouped-rose)

## Develop

```
npm install
npm run build
```
