import { defineComponent, App } from 'vue'
import { Funnel, FunnelOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type FunnelChartProps = Omit<BaseChartProps<FunnelOptions>, 'chart'> &
  FunnelOptions

const FunnelChart = defineComponent<FunnelChartProps>({
  name: 'FunnelChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Funnel} {...ctx.attrs} {...props} />
  },
})

FunnelChart.install = (app: App) => {
  app.component(FunnelChart.name, FunnelChart)
}

export default FunnelChart
