import { defineComponent, App } from 'vue'
import { TinyColumn, TinyColumnOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TinyColumnChartProps = Omit<
  BaseChartProps<TinyColumnOptions>,
  'chart'
> &
  TinyColumnOptions

const TinyColumnChart = defineComponent<TinyColumnChartProps>({
  name: 'TinyColumnChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={TinyColumn} {...ctx.attrs} {...props} />
  },
})

TinyColumnChart.install = (app: App) => {
  app.component(TinyColumnChart.name, TinyColumnChart)
}

export default TinyColumnChart
