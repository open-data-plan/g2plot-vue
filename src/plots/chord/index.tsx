import { App, defineComponent } from 'vue-demi'
import { Chord, ChordOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'
import { mergeAttrs } from '../../utils'

export type ChordChartProps = Writeable<Omit<BaseChartProps<ChordOptions>, 'chart' | 'data'> & ChordOptions>

const ChordChart = defineComponent<ChordChartProps>({
  name: 'ChordChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Chord} {...mergeAttrs(props, ctx.attrs)} />
  },
})

/* istanbul ignore next */
ChordChart.install = (app: App) => {
  app.component(ChordChart.name, ChordChart)
}

export default ChordChart
