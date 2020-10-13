import { defineComponent, App } from 'vue'
import { Line, LineOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type LineChartProps = Omit<BaseChartProps<LineOptions>, 'chart'> &
  LineOptions

const LineChart = defineComponent<LineChartProps>({
  name: 'LineChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Line} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
LineChart.install = (app: App) => {
  app.component(LineChart.name, LineChart)
}

export default LineChart
