import { App, defineComponent } from 'vue-demi'
import { Stock, StockOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type StockChartProps = Writeable<
  Omit<BaseChartProps<StockOptions>, 'chart'> & StockOptions
>

const StockChart = defineComponent<StockChartProps>({
  name: 'StockChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Stock} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
StockChart.install = (app: App) => {
  app.component(StockChart.name, StockChart)
}

export default StockChart
