import { defineComponent, App } from 'vue-demi'
import { Waterfall, WaterfallOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type WaterfallChartProps = Writeable<
  Omit<BaseChartProps<WaterfallOptions>, 'chart'> & WaterfallOptions
>

const WaterfallChart = defineComponent<WaterfallChartProps>({
  name: 'WaterfallChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Waterfall} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
WaterfallChart.install = (app: App) => {
  app.component(WaterfallChart.name, WaterfallChart)
}

export default WaterfallChart
