import { defineComponent } from 'vue'
import { Radar, RadarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RadarChartProps = Omit<BaseChartProps<RadarConfig>, 'chart'> &
  RadarConfig

const RadarChart = defineComponent<RadarChartProps>((props, ctx) => {
  return () => <BaseChart chart={Radar} {...ctx.attrs} {...props} />
})

export default RadarChart
