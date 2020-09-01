import { defineComponent } from 'vue'
import { PercentStackedArea, PercentStackedAreaConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type PercentStackedAreaChartProps = Omit<
  BaseChartProps<PercentStackedAreaConfig>,
  'chart'
> &
  PercentStackedAreaConfig

const PercentStackedAreaChart = defineComponent<PercentStackedAreaChartProps>(
  (props, ctx) => {
    return () => (
      <BaseChart chart={PercentStackedArea} {...ctx.attrs} {...props} />
    )
  }
)

export default PercentStackedAreaChart
