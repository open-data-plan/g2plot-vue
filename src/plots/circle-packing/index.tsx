import { App, defineComponent } from 'vue-demi'
import { CirclePacking, CirclePackingOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type CirclePackingChartProps = Writeable<
  Omit<BaseChartProps<CirclePackingOptions>, 'chart' | 'data'> & CirclePackingOptions
>

const CirclePackingChart = defineComponent<CirclePackingChartProps>({
  name: 'CirclePackingChart',
  setup(props, ctx) {
    return () => <BaseChart chart={CirclePacking} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
CirclePackingChart.install = (app: App) => {
  app.component(CirclePackingChart.name, CirclePackingChart)
}

export default CirclePackingChart
