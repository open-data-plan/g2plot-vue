import { defineComponent } from 'vue'
import { Bullet, BulletConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BulletChartProps = Omit<BaseChartProps<BulletConfig>, 'chart'> &
  BulletConfig

const BulletChart = defineComponent<BulletChartProps>((_, ctx) => {
  return <BaseChart chart={Bullet} {...ctx.attrs} />
})

export default BulletChart
