import { defineComponent } from 'vue'
import { Gauge, GaugeConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GaugeChartProps = Omit<BaseChartProps<GaugeConfig>, 'chart'> &
  GaugeConfig

const GaugeChart = defineComponent<GaugeChartProps>((_, ctx) => {
  return <BaseChart chart={Gauge} {...ctx.attrs} />
})

export default GaugeChart
