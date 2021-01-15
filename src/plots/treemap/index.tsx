import { App, defineComponent } from 'vue'
import { Treemap, TreemapOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TreemapChartProps = Omit<BaseChartProps<TreemapOptions>, 'chart'> &
  TreemapOptions

const TreemapChart = defineComponent<TreemapChartProps>({
  name: 'TreemapChart',
  setup(props, ctx) {
    return () => <BaseChart chart={Treemap} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
TreemapChart.install = (app: App) => {
  app.component(TreemapChart.name, TreemapChart)
}

export default TreemapChart
