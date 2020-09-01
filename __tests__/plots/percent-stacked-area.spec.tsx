import { mount } from '@vue/test-utils'
import Chart, {
  PercentStackedAreaChartProps,
} from '../../src/plots/percent-stacked-area'

const config: PercentStackedAreaChartProps = {
  title: {
    visible: true,
    text: '堆叠面积图',
  },
  data: [],
  xField: 'date',
  yField: 'value',
  stackField: 'country',
  color: [
    '#6897a7',
    '#8bc0d6',
    '#60d7a7',
    '#dedede',
    '#fedca9',
    '#fab36f',
    '#d96d6f',
  ],
  xAxis: {
    type: 'time',
    tickCount: 5,
  },
  legend: {
    visible: true,
    position: 'right-top',
  },
  responsive: true,
}

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(() => <Chart {...config} />)
  })
})
