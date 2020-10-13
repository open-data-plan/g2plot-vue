import { App, defineComponent } from 'vue'
import { Bullet, BulletOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BulletChartProps = Omit<BaseChartProps<BulletOptions>, 'chart'> &
  BulletOptions

const BulletChart = defineComponent<BulletChartProps>({
  name: 'BulletChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Bullet} {...ctx.attrs} {...props} />
  },
})

BulletChart.install = (app: App) => {
  app.component(BulletChart.name, BulletChart)
}

export default BulletChart
