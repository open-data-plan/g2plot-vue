import { defineComponent } from 'vue'
import { PercentStackedColumn, PercentStackedColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type PercentStackedColumnChartProps = Omit<
  BaseChartProps<PercentStackedColumnConfig>,
  'chart'
> &
  PercentStackedColumnConfig

const PercentStackedColumnChart = defineComponent<
  PercentStackedColumnChartProps
>((_, ctx) => {
  return <BaseChart chart={PercentStackedColumn} {...ctx.attrs} />
})

export default PercentStackedColumnChart
