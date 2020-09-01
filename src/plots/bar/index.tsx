import { defineComponent } from 'vue'
import { Bar, BarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BarChartProps = Omit<BaseChartProps<BarConfig>, 'chart'> & BarConfig

const BarChart = defineComponent<BarChartProps>((props, ctx) => {
  return () => <BaseChart chart={Bar} {...ctx.attrs} {...props} />
})

export default BarChart
