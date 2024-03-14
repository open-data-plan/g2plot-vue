import { App, defineComponent } from 'vue-demi'
import { Bar, BarOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type BarChartProps = Writeable<Omit<BaseChartProps<BarOptions>, 'chart' | 'data'> & BarOptions>

const BarChart = defineComponent<BarChartProps>({
  name: 'BarChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Bar} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
BarChart.install = (app: App) => {
  app.component('BarChart', BarChart)
}

export default BarChart
