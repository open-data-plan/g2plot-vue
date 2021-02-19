import { defineComponent, App } from 'vue'
import { Heatmap, HeatmapOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type HeatmapChartProps = Writeable<
  Omit<BaseChartProps<HeatmapOptions>, 'chart'> & HeatmapOptions
>

const HeatmapChart = defineComponent<HeatmapChartProps>({
  name: 'HeatmapChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Heatmap} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
HeatmapChart.install = (app: App) => {
  app.component(HeatmapChart.name, HeatmapChart)
}

export default HeatmapChart
