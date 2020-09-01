import { defineComponent } from 'vue'
import { Heatmap, HeatmapConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type HeatmapChartProps = Omit<BaseChartProps<HeatmapConfig>, 'chart'> &
  HeatmapConfig

const HeatmapChart = defineComponent<HeatmapChartProps>((props, ctx) => {
  return () => <BaseChart chart={Heatmap} {...ctx.attrs} {...props} />
})

export default HeatmapChart
