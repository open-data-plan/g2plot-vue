import { defineComponent } from 'vue'
import { GroupedRose, GroupedRoseConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GroupedRoseChartProps = Omit<
  BaseChartProps<GroupedRoseConfig>,
  'chart'
> &
  GroupedRoseConfig

const GroupedRoseChart = defineComponent<GroupedRoseChartProps>((_, ctx) => {
  return <BaseChart chart={GroupedRose} {...ctx.attrs} />
})

export default GroupedRoseChart
