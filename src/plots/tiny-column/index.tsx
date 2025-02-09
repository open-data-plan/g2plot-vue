import { TinyColumn, TinyColumnOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type TinyColumnChartProps = Writeable<
  Omit<BaseChartProps<TinyColumnOptions>, 'chart' | 'data'> & TinyColumnOptions
>

const TinyColumnChart = defineComponent<TinyColumnChartProps>({
  name: 'TinyColumnChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={TinyColumn} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
TinyColumnChart.install = (app: App) => {
  app.component('TinyColumnChart', TinyColumnChart)
}

export default TinyColumnChart
