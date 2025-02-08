import { Facet, FacetOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type FacetChartProps = Writeable<Omit<BaseChartProps<FacetOptions>, 'chart' | 'data'> & FacetOptions>

const FacetChart = defineComponent<FacetChartProps>({
  name: 'FacetChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Facet} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
FacetChart.install = (app: App) => {
  app.component('FacetChart', FacetChart)
}

export default FacetChart
