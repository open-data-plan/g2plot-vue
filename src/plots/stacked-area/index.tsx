import { defineComponent } from 'vue'
import { StackedArea, StackedAreaConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedAreaChartProps = Omit<
  BaseChartProps<StackedAreaConfig>,
  'chart'
> &
  StackedAreaConfig

const StackedAreaChart = defineComponent<StackedAreaChartProps>((_, ctx) => {
  return <BaseChart chart={StackedArea} {...ctx.attrs} />
})

export default StackedAreaChart
