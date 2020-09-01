import { defineComponent } from 'vue'
import { Histogram, HistogramConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type HistogramChartProps = Omit<
  BaseChartProps<HistogramConfig>,
  'chart'
> &
  HistogramConfig

const HistogramChart = defineComponent<HistogramChartProps>((_, ctx) => {
  return <BaseChart chart={Histogram} {...ctx.attrs} />
})

export default HistogramChart
