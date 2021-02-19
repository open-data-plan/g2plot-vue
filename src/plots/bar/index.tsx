import { App, defineComponent } from 'vue'
import { Bar, BarOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type BarChartProps = Writeable<
  Omit<BaseChartProps<BarOptions>, 'chart'> & BarOptions
>

const BarChart = defineComponent<BarChartProps>({
  name: 'BarChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Bar} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
BarChart.install = (app: App) => {
  app.component(BarChart.name, BarChart)
}

export default BarChart
