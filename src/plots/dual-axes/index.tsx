import { App, defineComponent } from 'vue'
import { DualAxes, DualAxesOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type DualAxesChartProps = Writeable<
  Omit<BaseChartProps<DualAxesOptions>, 'chart'> & DualAxesOptions
>

const DualAxesChart = defineComponent<DualAxesChartProps>({
  name: 'DualAxesChart',
  setup(props, ctx) {
    return () => <BaseChart chart={DualAxes} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
DualAxesChart.install = (app: App) => {
  app.component(DualAxesChart.name, DualAxesChart)
}

export default DualAxesChart
