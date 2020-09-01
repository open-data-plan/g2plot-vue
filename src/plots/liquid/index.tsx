import { defineComponent } from 'vue'
import { Liquid, LiquidConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type LiquidChartProps = Omit<BaseChartProps<LiquidConfig>, 'chart'> &
  LiquidConfig

const LiquidChart = defineComponent<LiquidChartProps>((_, ctx) => {
  return <BaseChart chart={Liquid} {...ctx.attrs} />
})

export default LiquidChart
