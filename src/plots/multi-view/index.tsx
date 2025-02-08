import { Mix, MixOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type MultiViewChartProps = Writeable<Omit<BaseChartProps<MixOptions>, 'chart' | 'data'> & MixOptions>

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
  app.component('MultiViewChart', MultiViewChart)
}

export default MultiViewChart
