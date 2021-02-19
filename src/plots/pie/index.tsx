import { defineComponent, App } from 'vue'
import { Pie, PieOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type PieChartProps = Writeable<
  Omit<BaseChartProps<PieOptions>, 'chart'> & PieOptions
>

const PieChart = defineComponent<PieChartProps>({
  name: 'PieChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Pie} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
PieChart.install = (app: App) => {
  app.component(PieChart.name, PieChart)
}

export default PieChart
