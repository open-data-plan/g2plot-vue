import { defineComponent } from 'vue'
import { DualLine, DualLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type DualLineChartProps = Omit<BaseChartProps<DualLineConfig>, 'chart'> &
  DualLineConfig

const DualLineChart = defineComponent<DualLineChartProps>((props, ctx) => {
  return () => <BaseChart chart={DualLine} {...ctx.attrs} {...props} />
})

export default DualLineChart
