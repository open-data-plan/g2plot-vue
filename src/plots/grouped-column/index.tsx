import { defineComponent } from 'vue'
import { GroupedColumn, GroupedColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GroupedColumnChartProps = Omit<
  BaseChartProps<GroupedColumnConfig>,
  'chart'
> &
  GroupedColumnConfig

const GroupedColumnChart = defineComponent<GroupedColumnChartProps>(
  (_, ctx) => {
    return <BaseChart chart={GroupedColumn} {...ctx.attrs} />
  }
)

export default GroupedColumnChart
