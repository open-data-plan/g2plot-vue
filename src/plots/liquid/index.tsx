import { Liquid, LiquidOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type LiquidChartProps = Writeable<Omit<BaseChartProps<LiquidOptions>, 'chart' | 'data'> & LiquidOptions>

const LiquidChart = defineComponent<LiquidChartProps>({
  name: 'LiquidChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Liquid} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
LiquidChart.install = (app: App) => {
  app.component('LiquidChart', LiquidChart)
}

export default LiquidChart
