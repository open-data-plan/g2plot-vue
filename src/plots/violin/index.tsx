import { App, defineComponent } from 'vue-demi'
import { Violin, ViolinOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type ViolinChartProps = Writeable<Omit<BaseChartProps<ViolinOptions>, 'chart' | 'data'> & ViolinOptions>

const ViolinChart = defineComponent<ViolinChartProps>({
  name: 'ViolinChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Violin} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
ViolinChart.install = (app: App) => {
  app.component('ViolinChart', ViolinChart)
}

export default ViolinChart
