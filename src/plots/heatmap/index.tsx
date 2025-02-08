import { Heatmap, HeatmapOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type HeatmapChartProps = Writeable<Omit<BaseChartProps<HeatmapOptions>, 'chart' | 'data'> & HeatmapOptions>

const HeatmapChart = defineComponent<HeatmapChartProps>({
  name: 'HeatmapChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Heatmap} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
HeatmapChart.install = (app: App) => {
  app.component('HeatmapChart', HeatmapChart)
}

export default HeatmapChart
