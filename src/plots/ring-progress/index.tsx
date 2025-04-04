import { RingProgress, RingProgressOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type RingProgressChartProps = Writeable<
  Omit<BaseChartProps<RingProgressOptions>, 'chart' | 'data'> & RingProgressOptions
>

const RingProgressChart = defineComponent<RingProgressChartProps>({
  name: 'RingProgressChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={RingProgress} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
RingProgressChart.install = (app: App) => {
  app.component('RingProgressChart', RingProgressChart)
}

export default RingProgressChart
