import { mount } from '@vue/test-utils'
import Chart, { WordCloudChartProps } from '../../src/plots/word-cloud'

const config: WordCloudChartProps = {
  width: 600,
  height: 400,
  data: [],
  maskImage:
    'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ',
  wordStyle: {
    rotation: [-Math.PI / 2, Math.PI / 2],
    rotateRatio: 0.5,
    rotationSteps: 4,
    fontSize: [10, 60],
    active: {
      shadowColor: '#333333',
      shadowBlur: 10,
    },
    gridSize: 8,
  },
  shape: 'cardioid',
  shuffle: false,
  backgroundColor: '#fff',
  selected: -1,
}

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(() => <Chart {...config} />)
  })
})
