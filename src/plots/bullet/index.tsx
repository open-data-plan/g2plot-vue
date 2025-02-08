import { Bullet, BulletOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type BulletChartProps = Writeable<Omit<BaseChartProps<BulletOptions>, 'chart' | 'data'> & BulletOptions>

const BulletChart = defineComponent<BulletChartProps>({
  name: 'BulletChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Bullet} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
BulletChart.install = (app: App) => {
  app.component('BulletChart', BulletChart)
}

export default BulletChart
