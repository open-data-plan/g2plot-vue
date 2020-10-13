import { defineComponent, App } from 'vue'
import { Rose, RoseOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RoseChartProps = Omit<BaseChartProps<RoseOptions>, 'chart'> &
  RoseOptions

const RoseChart = defineComponent<RoseChartProps>({
  name: 'RoseChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Rose} {...ctx.attrs} {...props} />
  },
})

RoseChart.install = (app: App) => {
  app.component(RoseChart.name, RoseChart)
}

export default RoseChart
