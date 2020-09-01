import { defineComponent } from 'vue'
import { FanGauge, FanGaugeConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type FanGaugeChartProps = Omit<BaseChartProps<FanGaugeConfig>, 'chart'> &
  FanGaugeConfig

const FanGaugeChart = defineComponent<FanGaugeChartProps>((props, ctx) => {
  return () => <BaseChart chart={FanGauge} {...ctx.attrs} {...props} />
})

export default FanGaugeChart
