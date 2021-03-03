import { App, defineComponent } from 'vue-demi'
import { Chord, ChordOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'
import { Writeable } from '../../types'

export type ChordChartProps = Writeable<
  Omit<BaseChartProps<ChordOptions>, 'chart'> & ChordOptions
>

const ChordChart = defineComponent<ChordChartProps>({
  name: 'ChordChart',
  setup(props, ctx) {
    return () => <BaseChart chart={Chord} {...ctx.attrs} {...props} />
  },
})

/* istanbul ignore next */
ChordChart.install = (app: App) => {
  app.component(ChordChart.name, ChordChart)
}

export default ChordChart
