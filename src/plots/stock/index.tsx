import { App, defineComponent } from 'vue'
import { Stock, StockOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StockChartProps = Omit<BaseChartProps<StockOptions>, 'chart'> &
  StockOptions

const StockChart = defineComponent<StockChartProps>({
  name: 'StockChart',
  setup(props, ctx) {
    return () => <BaseChart chart={Stock} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
StockChart.install = (app: App) => {
  app.component(StockChart.name, StockChart)
}

export default StockChart
