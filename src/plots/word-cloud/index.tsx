import { defineComponent } from 'vue'
import { WordCloud, WordCloudConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type WordCloudChartProps = Omit<
  BaseChartProps<WordCloudConfig>,
  'chart'
> &
  WordCloudConfig

const WordCloudChart = defineComponent<WordCloudChartProps>((props, ctx) => {
  return () => <BaseChart chart={WordCloud} {...ctx.attrs} {...props} />
})

export default WordCloudChart
