import { defineComponent } from 'vue'
import { RangeBar, RangeBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RangeBarChartProps = Omit<BaseChartProps<RangeBarConfig>, 'chart'> &
  RangeBarConfig

const RangeBarChart = defineComponent<RangeBarChartProps>((_, ctx) => {
  return <BaseChart chart={RangeBar} {...ctx.attrs} />
})

export default RangeBarChart
