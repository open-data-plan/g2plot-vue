import { mount } from '@vue/test-utils'
import Chart from '../../src/plots/word-cloud'

const config = {
  width: 600,
  height: 500,
  wordField: 'x',
  weightField: 'value',
  color: '#6262ff',
  wordStyle: {
    fontFamily: 'Verdana',
    fontSize: [24, 80],
  },
}

describe('Chart', () => {
  test('should render without crashed', () => {
    mount(() => <Chart {...config} />)
  })
})
