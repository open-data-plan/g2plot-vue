import { defineComponent } from 'vue'
import { Bullet, BulletConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BulletChartProps = Omit<BaseChartProps<BulletConfig>, 'chart'> &
  BulletConfig

const BulletChart = defineComponent<BulletChartProps>((props, ctx) => {
  return () => <BaseChart chart={Bullet} {...ctx.attrs} {...props} />
})

export default BulletChart
