import { defineComponent } from 'vue'
import { GroupedBar, GroupedBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GroupedBarChartProps = Omit<
  BaseChartProps<GroupedBarConfig>,
  'chart'
> &
  GroupedBarConfig

const GroupedBarChart = defineComponent<GroupedBarChartProps>((_, ctx) => {
  return <BaseChart chart={GroupedBar} {...ctx.attrs} />
})

export default GroupedBarChart
