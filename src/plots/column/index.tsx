import { defineComponent } from 'vue'
import { Column, ColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ColumnChartProps = Omit<BaseChartProps<ColumnConfig>, 'chart'> &
  ColumnConfig

const ColumnChart = defineComponent<ColumnChartProps>((props, ctx) => {
  return () => <BaseChart chart={Column} {...ctx.attrs} {...props} />
})

export default ColumnChart
