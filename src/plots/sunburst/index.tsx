import { App, defineComponent } from 'vue-demi'
import { Sunburst, SunburstOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type SunburstChartProps = Writeable<
  Omit<BaseChartProps<SunburstOptions>, 'chart' | 'data'> & SunburstOptions
>

const SunburstChart = defineComponent<SunburstChartProps>({
  name: 'SunburstChart',
  setup: (props, ctx) => {
    return () => (
      <BaseChart chart={Sunburst} {...mergeAttrs(props, ctx.attrs)} />
    )
  },
})

/* istanbul ignore next */
SunburstChart.install = (app: App) => {
  app.component(SunburstChart.name, SunburstChart)
}

export default SunburstChart
