import { App, defineComponent } from 'vue-demi'
import { Mix, MixOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type MultiViewChartProps = Writeable<
  Omit<BaseChartProps<MixOptions>, 'chart'> & MixOptions
>

/**
 * @deprecated use `MixChart` instead
 */
const MultiViewChart = defineComponent<MultiViewChartProps>({
  name: 'MultiViewChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Mix} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
MultiViewChart.install = (app: App) => {
  app.component(MultiViewChart.name, MultiViewChart)
}

export default MultiViewChart
