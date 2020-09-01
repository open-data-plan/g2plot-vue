import { defineComponent } from 'vue'
import { Density, DensityConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type DensityChartProps = Omit<BaseChartProps<DensityConfig>, 'chart'> &
  DensityConfig

const DensityChart = defineComponent<DensityChartProps>((props, ctx) => {
  return () => <BaseChart chart={Density} {...ctx.attrs} {...props} />
})

export default DensityChart
