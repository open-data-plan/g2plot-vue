import { defineComponent, App } from 'vue'
import { TinyArea, TinyAreaOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TinyAreaChartProps = Omit<
  BaseChartProps<TinyAreaOptions>,
  'chart'
> &
  TinyAreaOptions

const TinyAreaChart = defineComponent<TinyAreaChartProps>({
  name: 'TinyAreaChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={TinyArea} {...ctx.attrs} {...props} />
  },
})

TinyAreaChart.install = (app: App) => {
  app.component(TinyAreaChart.name, TinyAreaChart)
}

export default TinyAreaChart
