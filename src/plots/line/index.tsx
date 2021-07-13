import { defineComponent, App } from 'vue-demi'
import { Line, LineOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type LineChartProps = Writeable<
  Omit<BaseChartProps<LineOptions>, 'chart' | 'data'> & LineOptions
>

const LineChart = defineComponent<LineChartProps>({
  name: 'LineChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Line} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
LineChart.install = (app: App) => {
  app.component(LineChart.name, LineChart)
}

export default LineChart
