import { defineComponent } from 'vue'
import { StepLine, StepLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StepLineChartProps = Omit<BaseChartProps<StepLineConfig>, 'chart'> &
  StepLineConfig

const StepLineChart = defineComponent<StepLineChartProps>((props, ctx) => {
  return () => <BaseChart chart={StepLine} {...ctx.attrs} {...props} />
})

export default StepLineChart
