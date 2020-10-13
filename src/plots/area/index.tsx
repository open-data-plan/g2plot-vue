import { App, defineComponent } from 'vue'
import { Area, AreaOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type AreaChartProps = Omit<BaseChartProps<AreaOptions>, 'chart'> &
  AreaOptions

const AreaChart = defineComponent<AreaChartProps>({
  name: 'AreaChart',
  setup(props, ctx) {
    return () => <BaseChart chart={Area} {...ctx.attrs} {...props} />
  },
})

AreaChart.install = (app: App) => {
  app.component(AreaChart.name, AreaChart)
}

export default AreaChart
