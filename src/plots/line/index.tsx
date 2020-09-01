import { defineComponent } from 'vue'
import { Line, LineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type LineChartProps = Omit<BaseChartProps<LineConfig>, 'chart'> &
  LineConfig

const LineChart = defineComponent<LineChartProps>((props, ctx) => {
  return () => <BaseChart chart={Line} {...ctx.attrs} {...props} />
})

export default LineChart
