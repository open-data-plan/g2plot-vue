import { defineComponent, App } from 'vue-demi'
import { Radar, RadarOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type RadarChartProps = Writeable<
  Omit<BaseChartProps<RadarOptions>, 'chart'> & RadarOptions
>

const RadarChart = defineComponent<RadarChartProps>({
  name: 'RadarChart',
  setup(props, ctx) {
    return () => <BaseChart chart={Radar} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
RadarChart.install = (app: App) => {
  app.component(RadarChart.name, RadarChart)
}

export default RadarChart
