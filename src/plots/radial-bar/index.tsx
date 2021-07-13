import { App, defineComponent } from 'vue-demi'
import { RadialBar, RadialBarOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type RadialBarChartProps = Writeable<
  Omit<BaseChartProps<RadialBarOptions>, 'chart' | 'data'> & RadialBarOptions
>

const RadialBarChart = defineComponent<RadialBarChartProps>({
  name: 'RadialBarChart',
  setup: (props, ctx) => {
    return () => (
      <BaseChart chart={RadialBar} {...mergeAttrs(props, ctx.attrs)} />
    )
  },
})

/* istanbul ignore next */
RadialBarChart.install = (app: App) => {
  app.component(RadialBarChart.name, RadialBarChart)
}

export default RadialBarChart
