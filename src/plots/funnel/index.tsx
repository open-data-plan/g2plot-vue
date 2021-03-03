import { defineComponent, App } from 'vue-demi'
import { Funnel, FunnelOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type FunnelChartProps = Writeable<
  Omit<BaseChartProps<FunnelOptions>, 'chart'> & FunnelOptions
>

const FunnelChart = defineComponent<FunnelChartProps>({
  name: 'FunnelChart',
  setup(props, ctx) {
    return () => <BaseChart chart={Funnel} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
FunnelChart.install = (app: App) => {
  app.component(FunnelChart.name, FunnelChart)
}

export default FunnelChart
