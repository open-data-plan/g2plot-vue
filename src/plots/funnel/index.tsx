import { defineComponent } from 'vue'
import { Funnel, FunnelConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type FunnelChartProps = Omit<BaseChartProps<FunnelConfig>, 'chart'> &
  FunnelConfig

const FunnelChart = defineComponent<FunnelChartProps>((props, ctx) => {
  return () => <BaseChart chart={Funnel} {...ctx.attrs} {...props} />
})

export default FunnelChart
