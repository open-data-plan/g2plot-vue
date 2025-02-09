import { Waterfall, WaterfallOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
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
  app.component('WaterfallChart', WaterfallChart)
}

export default WaterfallChart
