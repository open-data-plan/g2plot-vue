import { defineComponent } from 'vue'
import { RingProgress, RingProgressConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RingProgressChartProps = Omit<
  BaseChartProps<RingProgressConfig>,
  'chart'
> &
  RingProgressConfig

const RingProgressChart = defineComponent<RingProgressChartProps>((_, ctx) => {
  return <BaseChart chart={RingProgress} {...ctx.attrs} />
})

export default RingProgressChart
