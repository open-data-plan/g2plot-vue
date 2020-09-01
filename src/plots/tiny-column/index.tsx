import { defineComponent } from 'vue'
import { TinyColumn, TinyColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TinyColumnChartProps = Omit<
  BaseChartProps<TinyColumnConfig>,
  'chart'
> &
  TinyColumnConfig

const TinyColumnChart = defineComponent<TinyColumnChartProps>((_, ctx) => {
  return <BaseChart chart={TinyColumn} {...ctx.attrs} />
})

export default TinyColumnChart
