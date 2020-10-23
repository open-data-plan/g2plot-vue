import { App, defineComponent } from 'vue'
import { Box, BoxOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BoxChartProps = Omit<BaseChartProps<BoxOptions>, 'chart'> &
  BoxOptions

const BoxChart = defineComponent<BoxChartProps>({
  name: 'BoxChart',
  setup(props, ctx) {
    return () => <BaseChart chart={Box} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
BoxChart.install = (app: App) => {
  app.component(BoxChart.name, BoxChart)
}

export default BoxChart
