import { defineComponent } from 'vue'
import { Donut, DonutConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type DonutChartProps = Omit<BaseChartProps<DonutConfig>, 'chart'> &
  DonutConfig

const DonutChart = defineComponent<DonutChartProps>((_, ctx) => {
  return <BaseChart chart={Donut} {...ctx.attrs} />
})

export default DonutChart
