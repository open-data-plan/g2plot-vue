import { App, defineComponent } from 'vue-demi'
import { MultiView, MultiViewOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type MultiViewChartProps = Writeable<
  Omit<BaseChartProps<MultiViewOptions>, 'chart'> & MultiViewOptions
>

const MultiViewChart = defineComponent<MultiViewChartProps>({
  name: 'MultiViewChart',
  setup: (props, ctx) => {
    return () => (
      <BaseChart chart={MultiView} {...mergeAttrs(props, ctx.attrs)} />
    )
  },
})

/* istanbul ignore next */
MultiViewChart.install = (app: App) => {
  app.component(MultiViewChart.name, MultiViewChart)
}

export default MultiViewChart
