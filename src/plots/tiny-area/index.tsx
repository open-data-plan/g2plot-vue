import { defineComponent } from 'vue'
import { TinyArea, TinyAreaConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TinyAreaChartProps = Omit<BaseChartProps<TinyAreaConfig>, 'chart'> &
  TinyAreaConfig

const TinyAreaChart = defineComponent<TinyAreaChartProps>((_, ctx) => {
  return <BaseChart chart={TinyArea} {...ctx.attrs} />
})

export default TinyAreaChart
