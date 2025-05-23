import { Funnel, FunnelOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type FunnelChartProps = Writeable<Omit<BaseChartProps<FunnelOptions>, 'chart' | 'data'> & FunnelOptions>

const FunnelChart = defineComponent<FunnelChartProps>({
  name: 'FunnelChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Funnel} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
FunnelChart.install = (app: App) => {
  app.component('FunnelChart', FunnelChart)
}

export default FunnelChart
