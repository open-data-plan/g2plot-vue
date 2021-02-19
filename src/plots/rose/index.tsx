import { defineComponent, App } from 'vue'
import { Rose, RoseOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type RoseChartProps = Writeable<
  Omit<BaseChartProps<RoseOptions>, 'chart'> & RoseOptions
>

const RoseChart = defineComponent<RoseChartProps>({
  name: 'RoseChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Rose} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
RoseChart.install = (app: App) => {
  app.component(RoseChart.name, RoseChart)
}

export default RoseChart
