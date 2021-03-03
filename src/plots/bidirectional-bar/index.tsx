import { App, defineComponent } from 'vue-demi'
import { BidirectionalBar, BidirectionalBarOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type BidirectionalBarChartProps = Writeable<
  Omit<BaseChartProps<BidirectionalBarOptions>, 'chart'> &
    BidirectionalBarOptions
>

const BidirectionalBarChart = defineComponent<BidirectionalBarChartProps>({
  name: 'BidirectionalBarChart',
  setup: (props, ctx) => {
    return () => (
      <BaseChart chart={BidirectionalBar} {...ctx.attrs} {...props} />
    )
  },
})

/* istanbul ignore next */
BidirectionalBarChart.install = (app: App) => {
  app.component(BidirectionalBarChart.name, BidirectionalBarChart)
}

export default BidirectionalBarChart
