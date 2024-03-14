import { App, defineComponent } from 'vue-demi'
import { DualAxes, DualAxesOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type DualAxesChartProps = Writeable<Omit<BaseChartProps<DualAxesOptions>, 'chart' | 'data'> & DualAxesOptions>

const DualAxesChart = defineComponent<DualAxesChartProps>({
  name: 'DualAxesChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={DualAxes} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
DualAxesChart.install = (app: App) => {
  app.component('DualAxesChart', DualAxesChart)
}

export default DualAxesChart
