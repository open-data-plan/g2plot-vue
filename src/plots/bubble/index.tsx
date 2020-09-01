import { defineComponent } from 'vue'
import { Bubble, BubbleConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BubbleChartProps = Omit<BaseChartProps<BubbleConfig>, 'chart'> &
  BubbleConfig

const BubbleChart = defineComponent<BubbleChartProps>((props, ctx) => {
  return () => <BaseChart chart={Bubble} {...ctx.attrs} {...props} />
})

export default BubbleChart
