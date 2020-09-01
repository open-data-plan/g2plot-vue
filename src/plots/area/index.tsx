import { defineComponent } from 'vue'
import { Area, AreaConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type AreaChartProps = Omit<BaseChartProps<AreaConfig>, 'chart'> &
  AreaConfig

const AreaChart = defineComponent<AreaChartProps>((_, ctx) => {
  return <BaseChart chart={Area} {...ctx.attrs} />
})

export default AreaChart
