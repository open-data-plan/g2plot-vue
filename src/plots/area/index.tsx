import { Area, AreaOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type AreaChartProps = Writeable<Omit<BaseChartProps<AreaOptions>, 'chart' | 'data'> & AreaOptions>

const AreaChart = defineComponent<AreaChartProps>({
  name: 'AreaChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Area} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
AreaChart.install = (app: App) => {
  app.component('AreaChart', AreaChart)
}

export default AreaChart
