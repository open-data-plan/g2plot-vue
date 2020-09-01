import { defineComponent } from 'vue'
import { TinyLine, TinyLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TinyLineChartProps = Omit<BaseChartProps<TinyLineConfig>, 'chart'> &
  TinyLineConfig

const TinyLineChart = defineComponent<TinyLineChartProps>((props, ctx) => {
  return () => <BaseChart chart={TinyLine} {...ctx.attrs} {...props} />
})

export default TinyLineChart
