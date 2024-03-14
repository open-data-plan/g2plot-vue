import { App, defineComponent } from 'vue-demi'
import { TinyLine, TinyLineOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type TinyLineChartProps = Writeable<Omit<BaseChartProps<TinyLineOptions>, 'chart' | 'data'> & TinyLineOptions>

const TinyLineChart = defineComponent<TinyLineChartProps>({
  name: 'TinyLineChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={TinyLine} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
TinyLineChart.install = (app: App) => {
  app.component('TinyLineChart', TinyLineChart)
}

export default TinyLineChart
