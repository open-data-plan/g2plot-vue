import { App, defineComponent } from 'vue-demi'
import { Bullet, BulletOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type BulletChartProps = Writeable<
  Omit<BaseChartProps<BulletOptions>, 'chart' | 'data'> & BulletOptions
>

const BulletChart = defineComponent<BulletChartProps>({
  name: 'BulletChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Bullet} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
BulletChart.install = (app: App) => {
  app.component(BulletChart.name, BulletChart)
}

export default BulletChart
