import { defineComponent, App } from 'vue-demi'
import { Progress, ProgressOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type ProgressChartProps = Writeable<
  Omit<BaseChartProps<ProgressOptions>, 'chart' | 'data'> & ProgressOptions
>

const ProgressChart = defineComponent<ProgressChartProps>({
  name: 'ProgressChart',
  setup: (props, ctx) => {
    return () => (
      <BaseChart chart={Progress} {...mergeAttrs(props, ctx.attrs)} />
    )
  },
})

/* istanbul ignore next */
ProgressChart.install = (app: App) => {
  app.component(ProgressChart.name, ProgressChart)
}

export default ProgressChart
