import { App, defineComponent } from 'vue-demi'
import { MultiView, MultiViewOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type MultiViewChartProps = Writeable<
  Omit<BaseChartProps<MultiViewOptions>, 'chart'> & MultiViewOptions
>

const MultiViewChart = defineComponent<MultiViewChartProps>({
  name: 'MultiViewChart',
  setup(props, ctx) {
    return () => <BaseChart chart={MultiView} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
MultiViewChart.install = (app: App) => {
  app.component(MultiViewChart.name, MultiViewChart)
}

export default MultiViewChart
