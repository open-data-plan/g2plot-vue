import { defineComponent, App } from 'vue-demi'
import { RingProgress, RingProgressOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type RingProgressChartProps = Writeable<
  Omit<BaseChartProps<RingProgressOptions>, 'chart'> & RingProgressOptions
>

const RingProgressChart = defineComponent<RingProgressChartProps>({
  name: 'RingProgressChart',
  setup(props, ctx) {
    return () => <BaseChart chart={RingProgress} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
RingProgressChart.install = (app: App) => {
  app.component(RingProgressChart.name, RingProgressChart)
}

export default RingProgressChart
