import { defineComponent } from 'vue'
import { StackedColumn, StackedColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedColumnChartProps = Omit<
  BaseChartProps<StackedColumnConfig>,
  'chart'
> &
  StackedColumnConfig

const StackedColumnChart = defineComponent<StackedColumnChartProps>(
  (_, ctx) => {
    return <BaseChart chart={StackedColumn} {...ctx.attrs} />
  }
)

export default StackedColumnChart
