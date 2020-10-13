import { defineComponent, App } from 'vue'
import { Progress, ProgressOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ProgressChartProps = Omit<
  BaseChartProps<ProgressOptions>,
  'chart'
> &
  ProgressOptions

const ProgressChart = defineComponent<ProgressChartProps>({
  name: 'ProgressChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Progress} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
ProgressChart.install = (app: App) => {
  app.component(ProgressChart.name, ProgressChart)
}

export default ProgressChart
