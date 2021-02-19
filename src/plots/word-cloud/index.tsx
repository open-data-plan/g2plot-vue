import { defineComponent, App } from 'vue'
import { WordCloud, WordCloudOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type WordCloudChartProps = Writeable<
  Omit<BaseChartProps<WordCloudOptions>, 'chart'> & WordCloudOptions
>

const WordCloudChart = defineComponent<WordCloudChartProps>({
  name: 'WordCloudChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={WordCloud} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
WordCloudChart.install = (app: App) => {
  app.component(WordCloudChart.name, WordCloudChart)
}

export default WordCloudChart
