import { TinyArea, TinyAreaOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type TinyAreaChartProps = Writeable<Omit<BaseChartProps<TinyAreaOptions>, 'chart' | 'data'> & TinyAreaOptions>

const TinyAreaChart = defineComponent<TinyAreaChartProps>({
  name: 'TinyAreaChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={TinyArea} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
TinyAreaChart.install = (app: App) => {
  app.component('TinyAreaChart', TinyAreaChart)
}

export default TinyAreaChart
