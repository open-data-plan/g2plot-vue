import { defineComponent, App } from 'vue'
import { Liquid, LiquidOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type LiquidChartProps = Omit<BaseChartProps<LiquidOptions>, 'chart'> &
  LiquidOptions

const LiquidChart = defineComponent<LiquidChartProps>({
  name: 'LiquidChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Liquid} {...ctx.attrs} {...props} />
  },
})

LiquidChart.install = (app: App) => {
  app.component(LiquidChart.name, LiquidChart)
}

export default LiquidChart
