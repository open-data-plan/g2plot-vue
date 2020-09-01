import { defineComponent } from 'vue'
import { GroupedColumnLine, GroupedColumnLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GroupedColumnLineChartProps = Omit<
  BaseChartProps<GroupedColumnLineConfig>,
  'chart'
> &
  GroupedColumnLineConfig

const GroupedColumnLineChart = defineComponent<GroupedColumnLineChartProps>(
  (props, ctx) => {
    return () => (
      <BaseChart chart={GroupedColumnLine} {...ctx.attrs} {...props} />
    )
  }
)

export default GroupedColumnLineChart
