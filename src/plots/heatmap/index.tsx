import { defineComponent, App } from 'vue'
import { Heatmap, HeatmapOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type HeatmapChartProps = Omit<BaseChartProps<HeatmapOptions>, 'chart'> &
  HeatmapOptions

const HeatmapChart = defineComponent<HeatmapChartProps>({
  name: 'HeatmapChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Heatmap} {...ctx.attrs} {...props} />
  },
})

HeatmapChart.install = (app: App) => {
  app.component(HeatmapChart.name, HeatmapChart)
}

export default HeatmapChart
