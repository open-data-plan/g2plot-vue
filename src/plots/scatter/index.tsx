import { defineComponent } from 'vue'
import { Scatter, ScatterConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ScatterChartProps = Omit<BaseChartProps<ScatterConfig>, 'chart'> &
  ScatterConfig

const ScatterChart = defineComponent<ScatterChartProps>((_, ctx) => {
  return <BaseChart chart={Scatter} {...ctx.attrs} />
})

export default ScatterChart
