import { App, defineComponent } from 'vue-demi'
import { Venn, VennOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type VennChartProps = Writeable<
  Omit<BaseChartProps<VennOptions>, 'chart' | 'data'> & VennOptions
>

const VennChart = defineComponent<VennChartProps>({
  name: 'VennChart',
  setup(props, ctx) {
    return () => <BaseChart chart={Venn} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
VennChart.install = (app: App) => {
  app.component(VennChart.name, VennChart)
}

export default VennChart
