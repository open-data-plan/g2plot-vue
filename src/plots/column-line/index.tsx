import { defineComponent } from 'vue'
import { ColumnLine, ColumnLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ColumnLineChartProps = Omit<
  BaseChartProps<ColumnLineConfig>,
  'chart'
> &
  ColumnLineConfig

const ColumnLineChart = defineComponent<ColumnLineChartProps>((props, ctx) => {
  return () => <BaseChart chart={ColumnLine} {...ctx.attrs} {...props} />
})

export default ColumnLineChart
