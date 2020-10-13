import { defineComponent, App } from 'vue'
import { Column, ColumnOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ColumnChartProps = Omit<BaseChartProps<ColumnOptions>, 'chart'> &
  ColumnOptions

const ColumnChart = defineComponent<ColumnChartProps>({
  name: 'ColumnChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Column} {...ctx.attrs} {...props} />
  },
})

ColumnChart.install = (app: App) => {
  app.component(ColumnChart.name, ColumnChart)
}

export default ColumnChart
