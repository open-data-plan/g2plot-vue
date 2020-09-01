import { defineComponent } from 'vue'
import { DensityHeatmap, DensityHeatmapConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type DensityHeatmapChartProps = Omit<
  BaseChartProps<DensityHeatmapConfig>,
  'chart'
> &
  DensityHeatmapConfig

const DensityHeatmapChart = defineComponent<DensityHeatmapChartProps>(
  (props, ctx) => {
    return () => <BaseChart chart={DensityHeatmap} {...ctx.attrs} {...props} />
  }
)

export default DensityHeatmapChart
