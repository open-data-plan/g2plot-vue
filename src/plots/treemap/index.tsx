import { Treemap, TreemapOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type TreemapChartProps = Writeable<Omit<BaseChartProps<TreemapOptions>, 'chart' | 'data'> & TreemapOptions>

const TreemapChart = defineComponent<TreemapChartProps>({
  name: 'TreemapChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Treemap} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
TreemapChart.install = (app: App) => {
  app.component('TreemapChart', TreemapChart)
}

export default TreemapChart
