import { defineComponent } from 'vue'
import { Bubble, BubbleConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BubbleChartProps = Omit<BaseChartProps<BubbleConfig>, 'chart'> &
  BubbleConfig

const BubbleChart = defineComponent<BubbleChartProps>((_, ctx) => {
  return <BaseChart chart={Bubble} {...ctx.attrs} />
})

export default BubbleChart
