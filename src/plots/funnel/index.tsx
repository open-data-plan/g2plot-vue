import { defineComponent, App } from 'vue-demi'
import { Funnel, FunnelOptions } from '@antv/g2plot'
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
  app.component(FunnelChart.name, FunnelChart)
}

export default FunnelChart
