import { App, defineComponent } from 'vue-demi'
import { Gauge, GaugeOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type GaugeChartProps = Writeable<Omit<BaseChartProps<GaugeOptions>, 'chart' | 'data'> & GaugeOptions>

const GaugeChart = defineComponent<GaugeChartProps>({
  name: 'GaugeChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Gauge} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
GaugeChart.install = (app: App) => {
  app.component('GaugeChart', GaugeChart)
}

export default GaugeChart
