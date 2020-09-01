import { defineComponent } from 'vue'
import { Pie, PieConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type PieChartProps = Omit<BaseChartProps<PieConfig>, 'chart'> & PieConfig

const PieChart = defineComponent<PieChartProps>((props, ctx) => {
  return () => <BaseChart chart={Pie} {...ctx.attrs} {...props} />
})

export default PieChart
