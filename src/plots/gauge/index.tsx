import { defineComponent, App } from 'vue'
import { Gauge, GaugeOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GaugeChartProps = Omit<BaseChartProps<GaugeOptions>, 'chart'> &
  GaugeOptions

const GaugeChart = defineComponent<GaugeChartProps>({
  name: 'GaugeChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Gauge} {...ctx.attrs} {...props} />
  },
})

GaugeChart.install = (app: App) => {
  app.component(GaugeChart.name, GaugeChart)
}

export default GaugeChart
