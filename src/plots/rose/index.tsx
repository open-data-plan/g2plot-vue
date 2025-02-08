import { Rose, RoseOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type RoseChartProps = Writeable<Omit<BaseChartProps<RoseOptions>, 'chart' | 'data'> & RoseOptions>

const RoseChart = defineComponent<RoseChartProps>({
  name: 'RoseChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Rose} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
RoseChart.install = (app: App) => {
  app.component('RoseChart', RoseChart)
}

export default RoseChart
