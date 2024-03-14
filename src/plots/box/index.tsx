import { App, defineComponent } from 'vue-demi'
import { Box, BoxOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type BoxChartProps = Writeable<Omit<BaseChartProps<BoxOptions>, 'chart' | 'data'> & BoxOptions>

const BoxChart = defineComponent<BoxChartProps>({
  name: 'BoxChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Box} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
BoxChart.install = (app: App) => {
  app.component('BoxChart', BoxChart)
}

export default BoxChart
