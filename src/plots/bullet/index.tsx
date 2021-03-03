import { App, defineComponent } from 'vue-demi'
import { Bullet, BulletOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type BulletChartProps = Writeable<
  Omit<BaseChartProps<BulletOptions>, 'chart'> & BulletOptions
>

const BulletChart = defineComponent<BulletChartProps>({
  name: 'BulletChart',
  setup(props, ctx) {
    return () => <BaseChart chart={Bullet} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
BulletChart.install = (app: App) => {
  app.component(BulletChart.name, BulletChart)
}

export default BulletChart
