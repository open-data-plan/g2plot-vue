import { defineComponent } from 'vue'
import { MeterGauge, MeterGaugeConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type MeterGaugeChartProps = Omit<
  BaseChartProps<MeterGaugeConfig>,
  'chart'
> &
  MeterGaugeConfig

const MeterGaugeChart = defineComponent<MeterGaugeChartProps>((props, ctx) => {
  return () => <BaseChart chart={MeterGauge} {...ctx.attrs} {...props} />
})

export default MeterGaugeChart
