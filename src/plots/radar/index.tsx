import { defineComponent, App } from 'vue'
import { Radar, RadarOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RadarChartProps = Omit<BaseChartProps<RadarOptions>, 'chart'> &
  RadarOptions

const RadarChart = defineComponent<RadarChartProps>({
  name: 'RadarChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Radar} {...ctx.attrs} {...props} />
  },
})

RadarChart.install = (app: App) => {
  app.component(RadarChart.name, RadarChart)
}

export default RadarChart
