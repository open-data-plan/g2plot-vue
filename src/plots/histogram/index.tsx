import { defineComponent, App } from 'vue-demi'
import { Histogram, HistogramOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type HistogramChartProps = Writeable<
  Omit<BaseChartProps<HistogramOptions>, 'chart' | 'data'> & HistogramOptions
>

const HistogramChart = defineComponent<HistogramChartProps>({
  name: 'HistogramChart',
  setup: (props, ctx) => {
    return () => (
      <BaseChart chart={Histogram} {...mergeAttrs(props, ctx.attrs)} />
    )
  },
})

/* istanbul ignore next */
HistogramChart.install = (app: App) => {
  app.component(HistogramChart.name, HistogramChart)
}

export default HistogramChart
