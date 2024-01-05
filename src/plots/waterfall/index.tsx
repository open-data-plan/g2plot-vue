import { defineComponent, App } from 'vue-demi'
import { Waterfall, WaterfallOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type WaterfallChartProps = Writeable<Omit<BaseChartProps<WaterfallOptions>, 'chart' | 'data'> & WaterfallOptions>

const WaterfallChart = defineComponent<WaterfallChartProps>({
  name: 'WaterfallChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Waterfall} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
WaterfallChart.install = (app: App) => {
  app.component(WaterfallChart.name, WaterfallChart)
}

export default WaterfallChart
