import { defineComponent, App } from 'vue-demi'
import { TinyArea, TinyAreaOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type TinyAreaChartProps = Writeable<
  Omit<BaseChartProps<TinyAreaOptions>, 'chart'> & TinyAreaOptions
>

const TinyAreaChart = defineComponent<TinyAreaChartProps>({
  name: 'TinyAreaChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={TinyArea} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
TinyAreaChart.install = (app: App) => {
  app.component(TinyAreaChart.name, TinyAreaChart)
}

export default TinyAreaChart
