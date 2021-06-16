import { mount } from '@vue/test-utils'
import ViolinChart, { ViolinChartProps } from '../../src/plots/violin'

const config: ViolinChartProps = {
  data: [],
  xField: 'a',
  yField: 'b',
}

describe('ViolinChart', () => {
  test('should render without crashed', () => {
    mount(() => <ViolinChart {...config} />)
  })
})
