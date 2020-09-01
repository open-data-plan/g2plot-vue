import { defineComponent } from 'vue'
import { StackedRose, StackedRoseConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedRoseChartProps = Omit<
  BaseChartProps<StackedRoseConfig>,
  'chart'
> &
  StackedRoseConfig

const StackedRoseChart = defineComponent<StackedRoseChartProps>((_, ctx) => {
  return <BaseChart chart={StackedRose} {...ctx.attrs} />
})

export default StackedRoseChart
