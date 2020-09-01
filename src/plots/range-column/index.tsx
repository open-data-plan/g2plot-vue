import { defineComponent } from 'vue'
import { RangeColumn, RangeColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RangeColumnChartProps = Omit<
  BaseChartProps<RangeColumnConfig>,
  'chart'
> &
  RangeColumnConfig

const RangeColumnChart = defineComponent<RangeColumnChartProps>((_, ctx) => {
  return <BaseChart chart={RangeColumn} {...ctx.attrs} />
})

export default RangeColumnChart
