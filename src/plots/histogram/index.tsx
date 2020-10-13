import { defineComponent, App } from 'vue'
import { Histogram, HistogramOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type HistogramChartProps = Omit<
  BaseChartProps<HistogramOptions>,
  'chart'
> &
  HistogramOptions

const HistogramChart = defineComponent<HistogramChartProps>({
  name: 'HistogramChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Histogram} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
HistogramChart.install = (app: App) => {
  app.component(HistogramChart.name, HistogramChart)
}

export default HistogramChart
