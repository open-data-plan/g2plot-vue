import { defineComponent, App } from 'vue'
import { Scatter, ScatterOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ScatterChartProps = Omit<BaseChartProps<ScatterOptions>, 'chart'> &
  ScatterOptions

const ScatterChart = defineComponent<ScatterChartProps>({
  name: 'ScatterChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Scatter} {...ctx.attrs} {...props} />
  },
}) as any

ScatterChart.install = (app: App) => {
  app.component(ScatterChart.name, ScatterChart)
}

export default ScatterChart
