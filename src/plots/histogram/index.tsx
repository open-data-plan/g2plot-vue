import { defineComponent, App } from 'vue-demi'
import { Histogram, HistogramOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type HistogramChartProps = Writeable<
  Omit<BaseChartProps<HistogramOptions>, 'chart'> & HistogramOptions
>

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
