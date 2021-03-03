import { defineComponent, App } from 'vue-demi'
import { Rose, RoseOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type RoseChartProps = Writeable<
  Omit<BaseChartProps<RoseOptions>, 'chart'> & RoseOptions
>

const RoseChart = defineComponent<RoseChartProps>({
  name: 'RoseChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Rose} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
RoseChart.install = (app: App) => {
  app.component(RoseChart.name, RoseChart)
}

export default RoseChart
