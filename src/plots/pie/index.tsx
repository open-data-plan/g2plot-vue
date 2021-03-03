import { defineComponent, App } from 'vue-demi'
import { Pie, PieOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type PieChartProps = Writeable<
  Omit<BaseChartProps<PieOptions>, 'chart'> & PieOptions
>

const PieChart = defineComponent<PieChartProps>({
  name: 'PieChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Pie} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
PieChart.install = (app: App) => {
  app.component(PieChart.name, PieChart)
}

export default PieChart
