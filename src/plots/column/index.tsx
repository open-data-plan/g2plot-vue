import { defineComponent, App } from 'vue-demi'
import { Column, ColumnOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type ColumnChartProps = Writeable<
  Omit<BaseChartProps<ColumnOptions>, 'chart'> & ColumnOptions
>

const ColumnChart = defineComponent<ColumnChartProps>({
  name: 'ColumnChart',
  setup(props, ctx) {
    return () => <BaseChart chart={Column} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
ColumnChart.install = (app: App) => {
  app.component(ColumnChart.name, ColumnChart)
}

export default ColumnChart
