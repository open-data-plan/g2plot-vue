import { defineComponent } from 'vue'
import { StackedBar, StackedBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedBarChartProps = Omit<
  BaseChartProps<StackedBarConfig>,
  'chart'
> &
  StackedBarConfig

const StackedBarChart = defineComponent<StackedBarChartProps>((_, ctx) => {
  return <BaseChart chart={StackedBar} {...ctx.attrs} />
})

export default StackedBarChart
