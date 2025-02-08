import { Scatter, ScatterOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type ScatterChartProps = Writeable<Omit<BaseChartProps<ScatterOptions>, 'chart' | 'data'> & ScatterOptions>

const ScatterChart = defineComponent<ScatterChartProps>({
  name: 'ScatterChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Scatter} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
ScatterChart.install = (app: App) => {
  app.component('ScatterChart', ScatterChart)
}

export default ScatterChart
