import { Mix, MixOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type MixChartProps = Writeable<Omit<BaseChartProps<MixOptions>, 'chart' | 'data'> & MixOptions>

const MixChart = defineComponent<MixChartProps>({
  name: 'MixChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Mix} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
MixChart.install = (app: App) => {
  app.component('MixChart', MixChart)
}

export default MixChart
