import { defineComponent } from 'vue'
import { TinyColumn, TinyColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TinyColumnChartProps = Omit<
  BaseChartProps<TinyColumnConfig>,
  'chart'
> &
  TinyColumnConfig

const TinyColumnChart = defineComponent<TinyColumnChartProps>((props, ctx) => {
  return () => <BaseChart chart={TinyColumn} {...ctx.attrs} {...props} />
})

export default TinyColumnChart
