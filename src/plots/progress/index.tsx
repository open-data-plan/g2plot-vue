import { defineComponent } from 'vue'
import { Progress, ProgressConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ProgressChartProps = Omit<BaseChartProps<ProgressConfig>, 'chart'> &
  ProgressConfig

const ProgressChart = defineComponent<ProgressChartProps>((props, ctx) => {
  return () => <BaseChart chart={Progress} {...ctx.attrs} {...props} />
})

export default ProgressChart
