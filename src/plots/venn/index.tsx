import { Venn, VennOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type VennChartProps = Writeable<Omit<BaseChartProps<VennOptions>, 'chart' | 'data'> & VennOptions>

const VennChart = defineComponent<VennChartProps>({
  name: 'VennChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Venn} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
VennChart.install = (app: App) => {
  app.component('VennChart', VennChart)
}

export default VennChart
