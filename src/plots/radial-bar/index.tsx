import { App, defineComponent } from 'vue'
import { RadialBar, RadialBarOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type RadialBarChartProps = Writeable<
  Omit<BaseChartProps<RadialBarOptions>, 'chart'> & RadialBarOptions
>

const RadialBarChart = defineComponent<RadialBarChartProps>({
  name: 'RadialBarChart',
  setup(props, ctx) {
    return () => <BaseChart chart={RadialBar} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
RadialBarChart.install = (app: App) => {
  app.component(RadialBarChart.name, RadialBarChart)
}

export default RadialBarChart
