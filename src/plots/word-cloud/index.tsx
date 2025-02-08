import { WordCloud, WordCloudOptions } from '@antv/g2plot'
import { App, defineComponent } from 'vue'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type WordCloudChartProps = Writeable<Omit<BaseChartProps<WordCloudOptions>, 'chart' | 'data'> & WordCloudOptions>

const WordCloudChart = defineComponent<WordCloudChartProps>({
  name: 'WordCloudChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={WordCloud} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
WordCloudChart.install = (app: App) => {
  app.component('WordCloudChart', WordCloudChart)
}

export default WordCloudChart
