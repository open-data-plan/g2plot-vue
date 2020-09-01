import { defineComponent } from 'vue'
import { GroupedColumn, GroupedColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GroupedColumnChartProps = Omit<
  BaseChartProps<GroupedColumnConfig>,
  'chart'
> &
  GroupedColumnConfig

const GroupedColumnChart = defineComponent<GroupedColumnChartProps>(
  (props, ctx) => {
    return () => <BaseChart chart={GroupedColumn} {...ctx.attrs} {...props} />
  }
)

export default GroupedColumnChart
