import { defineComponent } from 'vue'
import { Rose, RoseConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RoseChartProps = Omit<BaseChartProps<RoseConfig>, 'chart'> &
  RoseConfig

const RoseChart = defineComponent<RoseChartProps>((props, ctx) => {
  return () => <BaseChart chart={Rose} {...ctx.attrs} {...props} />
})

export default RoseChart
