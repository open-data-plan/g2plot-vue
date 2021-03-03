import { App, defineComponent } from 'vue-demi'
import { Sunburst, SunburstOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type SunburstChartProps = Writeable<
  Omit<BaseChartProps<SunburstOptions>, 'chart'> & SunburstOptions
>

const SunburstChart = defineComponent<SunburstChartProps>({
  name: 'SunburstChart',
  setup(props, ctx) {
    return () => <BaseChart chart={Sunburst} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
SunburstChart.install = (app: App) => {
  app.component(SunburstChart.name, SunburstChart)
}

export default SunburstChart
