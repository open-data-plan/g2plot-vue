import { Radar, RadarOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type RadarChartProps = Writeable<Omit<BaseChartProps<RadarOptions>, 'chart' | 'data'> & RadarOptions>

const RadarChart = defineComponent<RadarChartProps>({
  name: 'RadarChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Radar} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
RadarChart.install = (app: App) => {
  app.component('RadarChart', RadarChart)
}

export default RadarChart
