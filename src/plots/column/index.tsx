import { Column, ColumnOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type ColumnChartProps = Writeable<Omit<BaseChartProps<ColumnOptions>, 'chart' | 'data'> & ColumnOptions>

const ColumnChart = defineComponent<ColumnChartProps>({
  name: 'ColumnChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Column} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
ColumnChart.install = (app: App) => {
  app.component('ColumnChart', ColumnChart)
}

export default ColumnChart
