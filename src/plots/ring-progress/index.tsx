import { defineComponent, App } from 'vue'
import { RingProgress, RingProgressOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RingProgressChartProps = Omit<
  BaseChartProps<RingProgressOptions>,
  'chart'
> &
  RingProgressOptions

const RingProgressChart = defineComponent<RingProgressChartProps>({
  name: 'RingProgressChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={RingProgress} {...ctx.attrs} {...props} />
  },
})

RingProgressChart.install = (app: App) => {
  app.component(RingProgressChart.name, RingProgressChart)
}

export default RingProgressChart
