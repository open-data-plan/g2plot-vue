import { defineComponent, App } from 'vue-demi'
import { Scatter, ScatterOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type ScatterChartProps = Writeable<
  Omit<BaseChartProps<ScatterOptions>, 'chart'> & ScatterOptions
>

const ScatterChart = defineComponent<ScatterChartProps>({
  name: 'ScatterChart',
  setup(props, ctx) {
    return () => <BaseChart chart={Scatter} {...ctx.attrs} {...props} />
  },
}) as any

/* istanbul ignore next */
ScatterChart.install = (app: App) => {
  app.component(ScatterChart.name, ScatterChart)
}

export default ScatterChart
