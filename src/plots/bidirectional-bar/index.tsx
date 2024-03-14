import { App, defineComponent } from 'vue-demi'
import { BidirectionalBar, BidirectionalBarOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type BidirectionalBarChartProps = Writeable<
  Omit<BaseChartProps<BidirectionalBarOptions>, 'chart' | 'data'> & BidirectionalBarOptions
>

const BidirectionalBarChart = defineComponent<BidirectionalBarChartProps>({
  name: 'BidirectionalBarChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={BidirectionalBar} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
BidirectionalBarChart.install = (app: App) => {
  app.component('BidirectionalBarChart', BidirectionalBarChart)
}

export default BidirectionalBarChart
